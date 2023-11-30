
import React from 'react'
import Banner from '../Banner/Banner';
import About from '../About/About';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Category from '../Category/Category';
import Action from '../Action/Action';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
  return (
    <div>
       
        <Banner></Banner>
        <Category></Category>
        <Action></Action>
        <About></About>
        <Team></Team>
        <Testimonial></Testimonial>
        <Contact></Contact>

    </div>
  )
}

export default Home;