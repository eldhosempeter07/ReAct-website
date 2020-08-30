import React, { Component } from 'react'
import Header from '../common/Header'
import image from '../assests/img/about-bg.jpg'
import Timeline from '../common/Timeline'

class About extends Component {
    render() {
        return (
            <div>

            <Header
                title = 'About Us'
                subtitle = "ITS REALLY A GREAT STORY"
                image = {image}
                
                />
                
            <Timeline/>            
            </div>
        )
    }
}

export default About
