import React, { Fragment } from 'react'
import Banner from '../../components/banner/Banner'
import Clinic from '../../components/clinic-section/Clinic'
import Facilities from '../../components/facilities-section/Facilities'
import Footer from '../../components/footer/Footer'
import Group from '../../components/group-section/Group'
import Hero from '../../components/hero-section/Hero'
import Navbar from '../../components/navbar-section/Navbar'
import Speciality from '../../components/speciality-section/Speciality'

const Home = () => {
    return (
        <Fragment>
            {/* <Navbar /> */}
            <Hero />
            <Group />
            <Facilities />
            <Speciality />
            <Banner />
            <Clinic />
            <Footer />
        </Fragment>
    )
}

export default Home
