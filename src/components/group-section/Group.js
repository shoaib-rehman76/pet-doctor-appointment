import './group.css'

import doctorimg from '../../assets/group-section/Group.png'
import medicalimg from '../../assets/group-section/Group (2).png'
import homeimg from '../../assets/group-section/Group (1).png'
const Group = () => {
    return (
        <div className='container' style={{ marginTop: '7rem' }}>
            <div className="row">
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="doctor-group d-flex justify-content-center align-items-center gap-2">
                        <img src={doctorimg} alt="" />
                        <div className="text mt-3">
                            <h3>+1200</h3>
                            <h5>Doctors</h5>
                        </div>
                    </div>
                    <p className='text-center mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="doctor-group d-flex justify-content-center align-items-center gap-2">
                        <img src={medicalimg} alt="" />
                        <div className="text mt-3">
                            <h3>+1200</h3>
                            <h5>Clinics</h5>
                        </div>
                    </div>
                    <p className='text-center mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                </div>
                <div className="col-lg-4">
                    <div className="doctor-group d-flex justify-content-center align-items-center gap-2">
                        <img src={homeimg} alt="" />
                        <div className="text mt-3">
                            <h3>+100</h3>
                            <h5>Specialist</h5>
                        </div>
                    </div>
                    <p className='text-center mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                </div>
            </div>
        </div>
    )
}

export default Group
