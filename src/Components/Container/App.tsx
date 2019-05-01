import React, { Component } from 'react';


//Components
import StreamingAudio from '../Component/StreamingAudio';
import SlideShow from '../Component/SlideShow';
import Menu from '../Component/Menu';
import VideoYoutube from '../Component/VideoYoutube';
import AboutUs from '../Component/About-us';
import Footer from '../Component/Footer';
import Copyright from '../Component/Copyright';



class App extends Component {
  render() {
    return (
      <div className="onepage front" data-spy="scroll" data-target="#top1" data-offset="92">     
          <div id="main">
            <div id="home">
              <SlideShow/>
              {/* <StreamingAudio/> */}
            </div>
          </div>    
        <Menu/>
        <VideoYoutube/>
        <AboutUs/>
        <Footer/>
        <Copyright/>
      </div>
    );
  }
}

export default App;
