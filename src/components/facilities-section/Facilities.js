import React from 'react'
import './facilities.css'
import SectionHeader from '../SectionHeader'

import img1 from '../../assets/facilities/article3.jpg'
import img2 from '../../assets/facilities/article4.jpg'
import img3 from '../../assets/facilities/article5.jpg'
import img4 from '../../assets/facilities/article7.jpg'
import img5 from '../../assets/facilities/article8.jpg'
import img6 from '../../assets/facilities/article9.jpg'


const Facilities = () => {

    const paragraph = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.'
    const cards = [
        {
            img: img1,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
        {
            img: img2,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
        {
            img: img3,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
        {
            img: img4,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
        {
            img: img5,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
        {
            img: img6,
            heading: 'Lorem, ipsum dolor',
            para: 'Lorem ipsum dolor sit amet con sectetur adipisicing elit. Itaque, quae Itaque, quae Itaque',
            button: 'Read More'
        },
    ]

    return (
        <div className='container' style={{ marginTop: '6rem' }}>
            <SectionHeader heading={'Clinic Facilities'} paragraph={paragraph} />
            <div className="row">
                {cards.map((item, index) => (
                    <div key={index} className="col-lg-4 d-flex justify-content-center justify-content-lg-start mt-5">
                        <div className="card ">
                            <img src={item.img} alt="img1" />
                            <div className="card-text mx-2">
                                <h5 className='my-3'>{item.heading}</h5>
                                <p>{item.para}</p>
                            </div>
                            <button >{item.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Facilities
