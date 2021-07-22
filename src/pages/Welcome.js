import React from 'react';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Photoshop from '../components/Photoshop/Photoshop';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
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

        <header>
          <Header id="about"
            picture={`${process.env.PUBLIC_URL}/assets/me.png`} />
        </header>


        <h1 className="title">PROJECTS</h1>

        <div className='row' id= 'project'>

          <Projects
            title={"Local Weather App"}
            pict={`${process.env.PUBLIC_URL}/assets/weather.png`}
            descrip={"A simple weather app utilizing AJAX calls to Openweather to provide the current weather outlook for the day."}
            deploylink={"https://joemc9011.github.io/Weather/"}
            gitlink={"https://github.com/joemc9011/Weather"} />

          <Projects
            title={"Timed Javascript Quiz"}
            descrip={"A timed multiple choice quiz, constructed with javascript, that will let the user know when they are wrong and right"}
            pict={`${process.env.PUBLIC_URL}/assets/quiz.png`}
            deploylink={"https://joemc9011.github.io/quiz.hw/"}
            gitlink={"https://github.com/joemc9011/quiz.hw"} />
          <Projects
            title={"Employee Search Engine"}
            pict={`${process.env.PUBLIC_URL}/assets/employeesearchengine.png`}
            descrip={"A react app dedicated to organizing employee information in order to easily fetch data determined by search query."}
            deploylink={"https://joemc9011.github.io/employeesearchengine/"}
            gitlink={"https://github.com/joemc9011/employeesearchengine"} />


        </div>



        <h1 className="title">PHOTOSHOP</h1>

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
<div className='contact' id="contact">
<Contact/>
</div>
 






      </div>

    </>
  )
};

export default Welcome;