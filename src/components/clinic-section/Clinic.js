import './clinic.css'
import icon1 from '../../assets/clinics/Shape.png'
import icon3 from '../../assets/clinics/Shape1.png'
import icon2 from '../../assets/clinics/Icon_18_.png'

import SectionHeader from '../SectionHeader'
import useGetData from '../../hooks/getAllData';

import { useNavigate } from 'react-router-dom'

const Clinic = () => {

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, temporibus.'
    const navigate = useNavigate()

    // getting our-center All Data
    const data = useGetData('our-center')

    // getting clinic id
    const getClinicId = (id) => {
        navigate(`/branches/${id}`)
    }

    return (
        <div className='container' style={{ marginTop: '6rem' }}>
            <SectionHeader heading='Our Clinics' paragraph={text} />
            <div className="row d-flex justify-content-center mt-3">
                {data.map((item, index) => (
                    <div key={index} className="col-lg-6 mt-4 mt-lg-0">
                        <div className="clinic d-flex gap-3">
                            <div className="clinic-img">
                                <img src={item.url} alt="img" />
                            </div>
                            <div className="clinic-text">
                                <h6>{item.centerName}</h6>
                                <div className="clinic-contact mb-2 d-flex gap-3">
                                    <div className='d-flex gap-2 align-items-center'> <span>  <img src={icon1} alt='icon' /> </span><small> +123 456 78 91</small></div>
                                    <div className='d-flex gap-2 align-items-center'><span> <img src={icon2} alt='icon' /></span><small> hello@luxi.com</small></div>

                                </div>
                                <div className='d-flex align-items-center gap-1'><span><img src={icon3} alt="alt" className='me-2' /></span><small>{item.centerLocation}</small></div>
                                <button onClick={() => getClinicId(item.id)}>Book Your Appoinment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clinic
