import './branches.css'
import Footer from '../../components/footer/Footer'

import avatar from '../../assets/Ellipse 45.png'

import useGetAllBranches from '../../hooks/getAllBranches'
import { useNavigate, useParams } from 'react-router-dom'


const Branches = () => {

    const { clinicId } = useParams()
    const navigate = useNavigate()

    // getting our-center All Data
    const data = useGetAllBranches('our-branches', 'centerId', clinicId)

    const textHandler = (num, text) => {
        if (text.length > num) {
            return (text.slice(0, num) + '...')
        }
        return text
    }

    const branchIdHander = (id) => {
        navigate(`/doctors/${id}`)
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row text-center"><h3>Our Branches</h3></div>
                <div className="row mt-5">
                    {data.map((item, index) =>
                        <div key={index} onClick={() => { branchIdHander(item.id) }} className="col-lg-4 d-flex justify-content-lg-start justify-content-center">
                            <div className="card p-0 m-0" style={{ cursor: 'pointer' }} >
                                <div className="card__header">
                                    <img src={item.url} alt="card__image" className="card__image" width="600" />
                                </div>
                                <div className="card__body">
                                    <span className="tag tag-blue">{item.centerLocation}</span>
                                    <h4 className='mt-2'>{item.centerName}</h4>
                                    <p className='text-justify'>{textHandler(110, item.aboutCenter)}</p>
                                </div>
                                <div className="card__footer mt-0 py-0 mb-2">
                                    <div className="user d-flex gap-2 align-items-center">
                                        <img src={avatar} style={{ width: '20%' }} />
                                        <div className="user__info">
                                            <h5 className='p-0 m-0'>{item.branchContactName}</h5>
                                            <small>{item.branchContact}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Branches
