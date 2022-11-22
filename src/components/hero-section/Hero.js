import './hero.css'

import img from '../../assets/hero-section/Banner1.png'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Hero = () => {
    const { ref, inView } = useInView()
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()
    const animation4 = useAnimation()

    useEffect(() => {
        if (inView) {
            animation1.start({
                opacity: 1,
                transition: { duration: 0.5, type: 'spring', stiffness: 30, }
            })
        }
        if (inView) {
            animation2.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, type: 'spring', stiffness: 120, }
            })
        }
        if (inView) {
            animation3.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, type: 'spring', stiffness: 90, }
            })
        }
        if (inView) {
            animation4.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 1 }
            })
        }

        if (!inView) {
            animation1.start({ opacity: 0 })
            animation2.start({ opacity: 0, y: 20 })
            animation3.start({ opacity: 0, y: 20 })
            animation4.start({ scale: 0, opacity: 0 })
        }

    }, [inView])

    return (
        <div className='container hero' style={{ marginTop: '5rem' }}>
            <motion.div animate={animation1} ref={ref} className="row">
                <div className="col-lg-6">
                    <div className="hero-text mt-3">
                        <motion.h2
                            animate={animation2}
                        >
                            Lorem ipsum dolor amet
                        </motion.h2>
                        <motion.p
                            className='my-4 para'
                            animate={animation3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercit ationem harum minus deleniti.
                            Ducimus placeat atque error. Aspernatur incidunt ut dolore.Aspernatur incidunt ut dolore Aspernatur incidunt ut dolore.</motion.p>
                        <motion.div
                            className="buttons d-flex gap-4 align-items-center"
                            animate={animation4}
                        >
                            <span>More Info</span>
                            <button>Register Now</button>
                        </motion.div>
                    </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                    <motion.div
                        className="hero-img"
                        initial={{ y: 0 }}
                        animate={{ y: [-20, 20] }}
                        transition={{ yoyo: Infinity }}
                    >
                        <img src={img} alt="img" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
