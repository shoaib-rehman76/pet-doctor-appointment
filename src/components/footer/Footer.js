import './footer.css'
import logo from '../../assets/logo/logo.png'
const Footer = () => {
    return (
        <div className='container-fluid footer ' style={{ marginTop: '6rem' }}>
            <div className="container py-5 ">
                <div className="row ">
                    <div className="col-lg-3">
                        <div className='header'>
                            <img src={logo} alt="img" />
                            <h4>Medical</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adipisicing elit. Cupiditate, nobis.</p>
                        <small>@skype theme 2021</small>
                    </div>
                    <div className="col-lg-2 d-flex flex-column">
                        <h5>COMPANY</h5>
                        <small className='mt-2'>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                    </div>
                    <div className="col-lg-2 d-flex flex-column">
                        <h5>SERVICES</h5>
                        <small className='mt-2'>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                    </div>
                    <div className="col-lg-2 d-flex flex-column">
                        <h5>RESOURCES</h5>
                        <small className='mt-2'>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center flex-column">
                        <h5>COMPANY</h5>
                        <small className='mt-2'>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                        <small className='my-2'>Donec dignissim</small>
                        <small>Donec dignissim</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
