import React from 'react';
import About from '../components/About/About';
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
        aboutlink={'#about'}
        contactlink={'#contact'} />

      <div className='page'>


        <About id="about"
          pic={`${process.env.PUBLIC_URL}/assets/me.jpg`} />
              <div className="row" id='contact'>
            <Contact />
          </div>

        <div className='container' >
            <div className='col'>
              <div className='proj' id="project">
                <Projects
                  title={"Local Weather App"}
                  pic={`${process.env.PUBLIC_URL}/assets/weather.png`}
                  descrip={"A simple weather app utilizing AJAX calls to Openweather to provide the current weather outlook for the day."}
                  gitlink={"https://joemc9011.github.io/Weather/"} />
                <Projects
                  title={"Employee Tracker"}
                  descrip={"Content management system that simplifies employee record keeping for employers"}

                  gitlink={"https://github.com/joemc9011/employeedatabase"} />
                <Projects
                  title={"Timed Javascript Quiz"}
                  descrip={"A timed multiple choice quiz, constructed with javascript, that will let the user know when they are wrong and right"}
                  pic={`${process.env.PUBLIC_URL}/assets/quiz.png`}
                  gitlink={"https://joemc9011.github.io/quiz.hw/"} />
              </div>

            </div>
            <div className='col' id='photo' >
              <Photoshop
                pic={`${process.env.PUBLIC_URL}/assets/creature.png`}
                title="Creature Skateboard"
                descrip='Joe McAndrew (me) Creature Skateboard 2020 design constest'
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