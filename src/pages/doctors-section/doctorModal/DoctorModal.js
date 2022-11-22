import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../components/firebase';


const DoctorModal = ({ docId }) => {

    const [data, setData] = useState()
    useEffect(() => {
        const getDoctor = () => {
            const docRef = doc(db, "available-Doctors", docId);
            getDoc(docRef).then((doc) => {
                console.log(doc.data(), doc.id);
                setData(doc.data())
            })
        }
        getDoctor()
    }, [docId])
    console.log(data);

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="exampleModalLabel">Book Your Appointment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="doctor-info ">
                                        <div className="doctor-info-card px-3 rounded py-2">

                                            <div>
                                                <img src={data?.availableDocImg} alt="img" />
                                                <div className="speciality mt-4 d-flex justify-content-between">
                                                    <h6>Doctor Name</h6>
                                                    <p>{data?.availableDoc}</p>
                                                </div>
                                            </div>


                                            {/* <div className="speciality mt-2 d-flex justify-content-between">
                                                    <h6>Specialization</h6>
                                                    <p>{data.availableDocSpecialty}</p>
                                                </div>
                                                <div className="speciality mt-2 d-flex justify-content-between">
                                                    <h6>Start Date </h6>
                                                    <p>{data.availableDocStartTime}-{data.startMonth}-{data.startYear}</p>
                                                </div>
                                                <div className="speciality mt-2 d-flex justify-content-between">
                                                    <h6>End Date</h6>
                                                    <p>{data.availableDocEndTime}-{data.endMonth}-{data.endYear}</p>
                                                </div>
                                                <div className="speciality mt-2 d-flex justify-content-between">
                                                    <h6>Appointment Duration</h6>
                                                    <p>{data.availableDocAppointimeDuration} minutes</p>
                                                </div> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="appointment-time p-2 mt-5 mt-lg-0  text-start border">
                                    <h6>Select Your Date & Time</h6>
                                    {/* <div className="calander mt-3 d-flex justify-content-between">
                                          <input onChange={(e) => setAppointmentDate(e.target.value)} type="date"
                                              min={disablePastDate()}
                                              max={disableFutureDate()}
                                          /> */}
                                    {/* <div className="time-slot">
                                              <select onChange={(e) => { setSelectTimeSlot(e.target.value) }}>
                                                  <option selected disabled>Select your timeslot</option>
                                                  {numberOfSlots}
                                              </select>
                                          </div> */}
                                </div>
                                {/* <div className="user-detail">
                                          <input ref={userNameRef} type="text" placeholder='user-name' required />
                                          <input ref={userEmailRef} type="email" placeholder='user-email' required />
                                          <input ref={userNumberRef} type="number" placeholder='number' required />
                                          <textarea className='p-2' ref={userMessageRef} cols="50" placeholder='share your thoughts...' rows="5"></textarea>
                                      </div> */}
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button onClick={appoinmentHandler} type="button" className="btn btn-primary">Book Appointment</button> */}
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
            {/* </div> */}
            {/* </div> */}

        </>
    )
}

export default DoctorModal
