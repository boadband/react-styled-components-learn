import React,{ useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import Section from '../Components/Section/Section'
import InfoSection from '../Components/infoSection/infoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/infoSection/Data'
import Services from '../Components/Services/services'
import Footer from '../Components/Footer/Footer'



const Homepage = () => {
    const [isOpen,setIsOpen] = useState(false)

    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Section />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Homepage
