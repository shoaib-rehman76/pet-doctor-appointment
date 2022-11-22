import './doctor.css'

import Footer from '../../components/footer/Footer'
import useGetAllBranches from '../../hooks/getAllBranches'
import { useNavigate, useParams } from 'react-router-dom'
import DoctorModal from './doctorModal/DoctorModal'
import { useState } from 'react'

const Doctors = () => {

    const navigate = useNavigate()
    const { branchDoctor } = useParams()
    const [showModal, setShowModal] = useState(false)
    const [docId, setDocId] = useState('')
    const data = useGetAllBranches('available-Doctors', 'selectBranch', branchDoctor)

    const getDoctorIdHandler = (doctorId) => {
        // setDocId(doctorId)
        navigate(`/doctor-appointment/${doctorId}`)
        // setShowModal(!showModal)
    }
    return (
        <>
            <div className='container available'>
                <div className="text-center">
                    <h3 className='mb-5'>Our Doctors</h3>
                </div>
                <div className='row'>
                    {data.map((item, i) => (
                        <div key={i} className="col-lg-4">
                            <div className="available-card" style={{ cursor: 'pointer' }} >
                                <div className='img-div py-2'>
                                    <img src={item.availableDocImg} alt="img" className='mx-auto' />
                                    <h4 className='mt-3 text-center'>{item.availableDoc}</h4>
                                </div>
                                <div className="card-text p-2 mt-3">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Speciality</h5>
                                        <h5>{item.availableDocSpecialty}</h5>
                                    </div>
                                    <div className='d-flex mt-2 justify-content-between'>
                                        <span>Start Date-Time</span>
                                        <span>{item.availableDocStartTime}/{item.startMonth}/{item.startYear}</span>
                                    </div>
                                    <div className='d-flex  mt-2 justify-content-between'>
                                        <span>End Date-Time</span>
                                        <span>{item.availableDocEndTime}/{item.endMonth}/{item.endYear}</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Appointment Duration</h6>
                                        <h6>{item.availableDocAppointimeDuration} mnts</h6>
                                    </div>
                                    <button
                                        className='w-100 d-block text-center my-2 rounded border-0 text-white bg-primary'
                                        style={{ padding: '.8rem 0' }}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => { getDoctorIdHandler(item.id) }}
                                    >
                                        Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* {showModal && <DoctorModal docId={docId} />} */}
            <Footer />
        </>
    )

}

export default Doctors
