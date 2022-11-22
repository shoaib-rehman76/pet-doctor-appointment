import './speciality.css'

import img from '../../assets/speciality/Illustration & Title.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useEffect } from 'react'

const Speciality = () => {

    const { ref, inView } = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: { duration: 2 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])


    return (
        <div className='container' style={{ marginTop: '6rem' }}>
            <div className="row" ref={ref}>
                <div className="col-lg-6 mt-3">
                    <div className="speciality-text">
                        <h1>Our Speciality</h1>
                        <p className='mt-4 mb-4'>Curabitur egestas consequat lorem, vel fermentum augue porta id.
                            Aliquam lobortis magna neque, gravida consequat velit venenatis at
                            Aliquam lobortis magna neque, gravida consequat velit venenatis at.</p>
                        <div className="btns ">
                            <button>Dentist</button>
                            <button>Padriatic</button>
                            <button>Cardiology</button>
                        </div>
                        <div className="btns active">
                            <button>Traumatologi</button>
                            <button>Othopaedi</button>
                            <button>Anestesiologi</button>
                        </div>
                        <div className="btns">
                            <button>Reumatologi</button>
                            <button>Andrologi</button>
                            <button>Ortodonsia</button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 speciality-img">
                    <motion.img
                        animate={animation}
                        src={img} alt="img"
                    />
                </div>
            </div >
        </div>
    )
}

export default Speciality
