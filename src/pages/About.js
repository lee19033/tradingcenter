import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import aboutImg from '../imges/israel.jpg';

const About = () => (
    <div class="container ml-1">
    
          <div class="row">
         <div class="col-xl col-md-8">   
        <div className='about-section'>
           <h1>About Us </h1>
           <p>@Trading Center App</p>
           <p>Trading center app are businesses working with different 
               kinds of products which are sold for consumer, <br/> business, 
               or government purposes. Trading companies buy a specialized range of products, <br/>
               maintain a stock or a shop, and deliver products to customers.
           </p>
           <ReactBootStrap.Figure>
                <ReactBootStrap.Figure.Image
                    width={250}
                    height={200}
                    alt="250X200"
                    src={aboutImg}
                />
                <ReactBootStrap.Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum -
                    There is no free developer of a quiver sometimes soft propaganda.
                </ReactBootStrap.Figure.Caption>
           </ReactBootStrap.Figure>
        </div>
        </div>
        </div>
        </div>    
)

export default About;