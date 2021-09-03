import React from 'react';
import './Cards.css';
import CardItem from './Carditem';


function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these Epic Destinations!</h1>
        <div className='cards_container'>
         <div className='cards_wrapper'>
             <ul className='cards_items'>
                 <CardItem
                 src='assests/image1.jpg'
                 text='Travel through the Islands of Bail in a Private Cruisse'
                 label='Luxury'
                 path='/services'
                 />
                    <CardItem
                 src='assests/image4.jpg'
                 text='Ride through the Sahara Desert on a guided camel tour'
                 label='Adrenaline'
                 path='/sign-up'
                 />
             </ul>
             <ul className='cards_items'>
                 <CardItem
                 src='assests/image2.jpg'
                 text='Set Salt in the Atlantic Ocean visiting Uncharted waters'
                 label='Mystery'
                 path='/services'
                 />
                  <CardItem
                 src='assests/image3.jpg'
                 text='Experience Football on Top of the Himilayan Mountains'
                 label='Adventure'
                 path='/products'
                 />
                  <CardItem
                 src='assests/image4.jpg'
                 text='Ride through the Sahara Desert on a guided camel tour'
                 label='Adrenaline'
                 path='/sign-up'
                 />
               
             </ul>
             
                
                 
         </div>
        </div>
            
        </div>
    )
}

export default Cards
