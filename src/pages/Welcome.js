import React from 'react';
import Pic from '../components/Pic/Pic';
import Projects from '../components/Projects/Projects';
import Photoshop from '../components/Photoshop/Photoshop';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import './welcome.css'


function Welcome() {
  return (
    <>
      <Navbar
        photolink={'#photo'}
        projlink={'#project'}
        piclink={'#about'}
        contactlink={'#contact'} />

      <div className='page'>


        <Pic id="about"
          pict={`${process.env.PUBLIC_URL}/assets/me.png`} />



        <div id='contact'>
          <Contact />
        </div>


        <div className = "projdiv">
          <h1 className = "title">PROJECTS</h1>


          <div className='col'>
            <div className='proj' id="project">
              <Projects
                title={"Local Weather App"}
                pic={`${process.env.PUBLIC_URL}/assets/weather.png`}
                descrip={"A simple weather app utilizing AJAX calls to Openweather to provide the current weather outlook for the day."}
                deploylink={"https://joemc9011.github.io/Weather/"}
                gitlink={"https://github.com/joemc9011/Weather"} />
              <Projects
                title={"Employee Tracker"}
                descrip={"Content management system that simplifies employee record keeping for employers"}

                gitlink={"https://github.com/joemc9011/employeedatabase"} />
              <Projects
                title={"Timed Javascript Quiz"}
                descrip={"A timed multiple choice quiz, constructed with javascript, that will let the user know when they are wrong and right"}
                pic={`${process.env.PUBLIC_URL}/assets/quiz.png`}
                deploylink={"https://joemc9011.github.io/quiz.hw/"}
                gitlink={"https://github.com/joemc9011/quiz.hw"} />
            </div>

          </div>

        </div>

        <div className = "photodiv">
          <h1 className = "title">PHOTOSHOP</h1>

          <div className='row' id='photo' >
            <Photoshop
              pic={`${process.env.PUBLIC_URL}/assets/creature.png`}
              title="Creature Skateboard"
              descrip='Joe McAndrew Creature Skateboard 2020 design constest'
            />
            <Photoshop
              pic={`${process.env.PUBLIC_URL}/assets/dripshow.png`}
              title='Drip NYC'
              descrip='Allie Mae (Comedian) monthly NYC show '
            />
            <Photoshop
              pic={`${process.env.PUBLIC_URL}/assets/redrum.png`}
              title='Redrum tour'
              descrip='Ibrahim Khalif (Comedian) 2021 tour'
            />
            <Photoshop
              pic={`${process.env.PUBLIC_URL}/assets/riff.png`}
              title='Riff off the Roof Leap day 2019'
              descrip='Ryan Rummel (Comedian) monthly Jersey City show'
            />
            <Photoshop
              pic={`${process.env.PUBLIC_URL}/assets/brain.png`}
              title='Make Yourself Podcast art'
              descrip='Paul Spratt (Comedian) podcast'
            />
          </div>
        </div>







      </div>

    </>
  )
};

export default Welcome;