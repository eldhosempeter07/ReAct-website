import React, { Component } from 'react'
import img1 from '../assests/img/logos/creative-market.jpg'
import img2 from '../assests/img/logos/designmodo.jpg'
import img3 from '../assests/img/logos/envato.jpg'
import img4 from '../assests/img/logos/themeforest.jpg'
import SingleClient from './SingleClient'
const clients = [
    {image:img1},
    {image:img2},
    {image:img3},
    {image:img4},

]

export class Clients extends Component {
    render() {
        return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {clients.map((client,index)=>{
                        return <SingleClient {...client} key={index} />
                    })}
                </div>
            </div>
        </div>                
        )
    }
}

export default Clients
