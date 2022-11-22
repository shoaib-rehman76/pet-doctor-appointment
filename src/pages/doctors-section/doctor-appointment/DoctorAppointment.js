import React, { useEffect, useRef, useState } from 'react'
import './doctorprofile.css'
import { useParams } from 'react-router-dom'
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../../components/firebase';
import Footer from '../../../components/footer/Footer';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DoctorAppointment = () => {
    const [shifts, setShifts] = useState([])
    const [doctorData, setDoctorData] = useState([])
    const [selectTimeSlot, setSelectTimeSlot] = useState('')
    const [appointmentDate, setAppointmentDate] = useState('')
    const userNameRef = useRef('')
    const userEmailRef = useRef('')
    const userNumberRef = useRef('')
    const userMessageRef = useRef('')

    const { doctorid } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        const getDoctor = () => {
            const docRef = doc(db, "available-Doctors", doctorid);
            getDoc(docRef).then((doc) => {
                console.log(doc.data(), doc.id);
                setData(doc.data())
            })
        }
        getDoctor()
    }, [doctorid])
    console.log(data);

    let startDateArr = [], shiftTime, endDateArr = [], appointmentDuration, doctorName, startDate, endDate, startMonth, endMonth, startYear, endYear;
    appointmentDuration = data?.availableDocAppointimeDuration;
    doctorName = data?.availableDoc;
    startDate = data?.availableDocStartTime;
    endDate = data?.availableDocEndTime;
    startMonth = data?.startMonth;
    endMonth = data?.endMonth;
    startYear = data?.startYear;
    endYear = data?.endYear;
    shiftTime = data?.shiftStartTime;
    startDateArr.push(...[startMonth, startDate, startYear]);
    endDateArr.push(...[endYear, endMonth, endDate]);
    // console.log(startDateArr, endDateArr);


    // ======== getting our-shifts ============
    const branchShifts = () => {
        const q = collection(db, "staff-shifts");
        getDocs(q).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setShifts(data)
        })
    }
    useEffect(() => {
        branchShifts();
    }, [])

    // shifts time...
    let shiftSTime = parseInt(shifts[0]?.startTime)
    let shiftETime = parseInt(shifts[0]?.endTime)
    // console.log('shift start time', shiftSTime + (30 * 60 * 1000), 'shift end time', shiftETime);
    // totalShiftTime...
    const shiftTotalTime = (shiftETime - shiftSTime) * 60;

    // console.log('total time of shifts in minutes', shiftTotalTime);
    // appointment duration of each doctor...
    const totalTimeSlots = (shiftTotalTime / appointmentDuration)
    // console.log('total slots for each doctors ', totalTimeSlots, 'appointment durration of doctor', appointmentDuration);


    // ============ disabling pastDate ===============
    const disablePastDate = () => {
        const startDate = new Date(startDateArr)
        const dd = String(startDate.getDate()).padStart(2, "0");
        const mm = String(startDate.getMonth()).padStart(2, "0");
        const yyyy = String(startDate.getFullYear())
        return (yyyy + "-" + mm + "-" + dd);
    }
    // ============= disabling futureDate ============
    const disableFutureDate = () => {
        const endDate = new Date(endDateArr)
        const dd = String(endDate.getDate()).padStart(2, "0");
        const mm = String(endDate.getMonth()).padStart(2, "0");
        const yyyy = String(endDate.getFullYear())
        return (yyyy + "-" + mm + "-" + dd);
    }

    console.log(disableFutureDate(), disablePastDate());

    // showing times in options
    let doctorTime = [startYear, startMonth, startDate, shiftTime]
    const numberOfSlots = [];
    let showSlots = 0;
    let showMinutes;
    for (let step = 0; step < totalTimeSlots; step++) {
        showMinutes += appointmentDuration
        let date = moment(doctorTime)
        let dateIntoMiliseconds = date + showSlots * 60 * 1000
        showSlots += appointmentDuration;
        let modifyDate = moment(dateIntoMiliseconds)
        // console.log(date2);
        // console.log(modifyDate.hours(), String(modifyDate.minutes()).padEnd(2, '0'));
        numberOfSlots.push(<option key={step} >{`${modifyDate.hour()} : ${String(modifyDate.minutes()).padEnd(2, '0')}  `}</option>)
        // numberOfSlots.push(<button key={step}>{`${modifyDate.hour()} : ${String(modifyDate.minutes()).padEnd(2, '0')}  `}</button>)
    }

    const appoinmentHandler = async (e) => {
        e.preventDefault()

        if (selectTimeSlot.length === 0) {
            return toast.warn("Plz select Time");
        }
        if (appointmentDate.length === 0) {
            return toast.warn("Plz select Date");
        }
        if (userNameRef.current.value.length === 0) {
            return toast.warn("username required");
        }
        if (userEmailRef.current.value.length === 0) {
            return toast.warn("userEmail required");
        }
        if (userNumberRef.current.value.length === 0) {
            return toast.warn("userNumber required");
        }
        if (userMessageRef.current.value.length === 0) {
            return toast.warn("userMessage required");
        }

        try {
            const clientRef = collection(db, 'client-collection');
            await addDoc(clientRef, {
                selectTimeSlot,
                appointmentDate,
                clientID: uuidv4(),
                clientName: userNameRef.current.value,
                clientEmail: userEmailRef.current.value,
                clientNumber: userNumberRef.current.value,
                clientMessage: userMessageRef.current.value,
                doctorName
            })
            toast.success('Appointment created successfully thank you')
            userNameRef.current.value = ''
            userEmailRef.current.value = ''
            userNumberRef.current.value = ''
            userMessageRef.current.value = ''
        } catch (e) {
            toast.warn(e.message)
        }
    }

    return (
        <>
            <div className='container mt-4'>
                <div className="row">
                    <span className='text-center'><span className='bg-primary text-white py-1 px-2 fw-bold rounded-1'>Dr.{data?.availableDoc}</span></span>
                </div>
                <div className="row mt-3 border rounded doctor-profile p-5">
                    <div className="col-lg-4 left-side border">
                        <img src={data?.availableDocImg} alt="img" />
                        <hr style={{ width: '80%', margin: '1rem auto' }} />
                        <div className="speciality mt-4 d-flex justify-content-between">
                            <h6>Specialization</h6>
                            <p>{data?.availableDocSpecialty}</p>
                        </div>
                        <div className="speciality mt-2 d-flex justify-content-between">
                            <h6>Start Date </h6>
                            <p>{data?.availableDocStartTime}-{data?.startMonth}-{data?.startYear}</p>
                        </div>
                        <div className="speciality mt-2 d-flex justify-content-between">
                            <h6>End Date</h6>
                            <p>{data?.availableDocEndTime}-{data?.endMonth}-{data?.endYear}</p>
                        </div>
                        <div className="speciality mt-2 d-flex justify-content-between">
                            <h6>Appointment Duration</h6>
                            <p>{data?.availableDocAppointimeDuration} minutes</p>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-2">
                        <div className='d-flex flex-column align-items-center gap-3'>
                            <div className="calander cursor-pointer">
                                <input onChange={(e) => setAppointmentDate(e.target.value)} type="date"
                                    min={disablePastDate()}
                                    max={disableFutureDate()}
                                />
                            </div>
                            <div className="time-slot">
                                <select onChange={(e) => { setSelectTimeSlot(e.target.value) }}>
                                    <option selected disabled>Select your timeslot</option>
                                    {numberOfSlots}
                                </select>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className="user-detail d-flex flex-column">
                                <input ref={userNameRef} type="text" placeholder='user-name' required />
                                <input ref={userEmailRef} type="email" placeholder='user-email' required />
                                <input ref={userNumberRef} type="number" placeholder='number' required />
                                <textarea className='p-2' ref={userMessageRef} cols="50" placeholder='share your thoughts...' rows="5"></textarea>
                            </div>
                            <div className="modal-footer mt-3 border-0">
                                <button onClick={appoinmentHandler} type="button" className="btn btn-primary py-2">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                </div>
            </div>
            <Footer />
        </>

    )
}

export default DoctorAppointment
