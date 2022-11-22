import './banner.css'
const Banner = () => {
    return (
        <div className='container' style={{ marginTop: '6rem' }}>
            <div className="row p-0 m-0 banner px-4 py-5">
                <div className="col-lg-6">
                    <h3 className='p-0 m-0'>Ready to get started ?</h3>
                    <p className='p-0 mb-0 mt-2'>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-end">
                    <button>Create Appointment Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
