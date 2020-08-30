import React, { Component } from 'react'
import Header from '../common/Header'
import image from '../assests/img/header-bg.jpg'
import Services from '../common/Services'
import Portfolio from '../common/Portfolio'
import Team from '../common/Team'
import Clients from '../common/Clients'
import Footer from '../common/Footer'
import Timeline from '../common/Timeline'
import Contact from './Contact'

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title = 'Welcome To Our Studio!'
                subtitle = "ITS NICE TO MEET YOU"
                buttonTitle = 'Tell Me More '
                link = "/services"
                showButton ={true}
                image = {image}
                
                />

                <Services/>

                <Portfolio/>
                <Timeline/>
                <Team/>
                <Clients/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Home
