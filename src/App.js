import React, { Component } from 'react'
import banner from './images/pas.jpg'
import instadikeBanner from './images/banner.jpg'
import instaDikeTruckPic from './images/I-D_Tanker_&_Sky.jpg'
import chemDike from './images/ChemDike_no-pricing.jpg'
import idVideo from './video/Instadike.mp4'
import videoPoster from './images/instadike2.jpg'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isPlayingVideo: false
    }
  }
  toggleIsPlaying = () => {
    const {isPlayingVideo} = this.state; 
    this.setState({isPlayingVideo: !isPlayingVideo});
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={banner} className="App-logo" alt="logo" />
          <img src={instadikeBanner} className="App-logo" alt="insta-dike banner" />
        </header>
        <p className="content">
          <img src={instaDikeTruckPic} class="content-img" alt="insta-dike with truck" />
          <p class="subcontent">
            <h2>
              The Insta-Dike is a patented spill containment system as required
              by law in part of your SPCC plan Title 40 CFR part 112.7.
            </h2>

            <p>
              It is constructed of steel, a membrane, and a poured concrete
              floor. Hydraulic cylinders raise
              end ramps to form a containment dike around the tanker. When raised,
              the end ramps seal and provide containment of any spilled fuel,
              and a hydraulic valve connected to the drain provides control of
              draining and cleaning of the system.
            </p>

            <p>
              When not in use any rain water is drained onto the drive. In
              areas where snow occurs simply clean the area as you would a driveway or
              parking lot, using a broom on the end ramps.
            </p>

            <p>
              It adds about two minutes to your
              loading/unloading time. Hoses are contained and connected to an
              optional spill box or spill buckets can be installed in the poured
              concrete floor.
            </p>
            <p>
              We can size a system to your needs:
              <ul>
                <li>Power company substation transformers &mdash; E-Z containment. Call for details. </li>
                <li>Insta-Dike can be used for fire department dump tank.</li>
                <li>Approved by the EPA and <a href="https://www.osha.gov">OSHA</a></li>
              </ul>
            </p>
            <p>
              The Insta Dike should provide many years of service.
            </p>
            <a href="#contact" class="anchorlink"><h3>Contact us for an authorized dealer in your area</h3></a>

          </p>
        </p>
        <hr />
        <p>
          <VideoPlayer toggle={this.toggleIsPlaying} isPlayingVideo={this.state.isPlayingVideo} />
        </p>
        <hr />
        <p className="content">
          <p class="subcontent">
            <p>
              <h2>
                The Chem Dike is a patented containment for totes and pallets
                of 55 gallon drums.
              </h2>
              <ul>
                <li>It will contain four 250-gallon totes or six pallets of 55-gallon
                drums when stacked.</li>
                <li>It provides more containment in less space. </li>
                <li>You can access through a door that seals when closed.</li>
                <li>It is made of heavy duty steel.</li>
                <li>It also provides containment of hoses when connected to totes.</li>
              </ul>
              <a href="#contact" class="anchorlink"><h3>Contact us to find a dealer in your area!</h3></a>
            </p>
          </p>
          <img src={chemDike} alt="chem-dike" className="content-img"/>
        </p>
        <p>
          <h1>ADD IT UP : IT JUST MAKES SENSE TO PREVENT A SPILL.</h1>
        </p>
        <p class="footer" id="contact">
          <p class="info">
            <strong><em>Prevent-A-Spill</em></strong> has been providing spill containment systems for over 20 years.
          </p>
          <div class="contact">
            <p><address>
              Prevent-A-Spill,Inc<br />
              P.O. Box 206<br />
              Huntington, IN 46750<br />
              (p) 260-341-8496 or<br />
              (p) 231-981-2596
            </address></p>
            <p><address>
              Manufacturing Plant<br />
              2050 U.S. 24 East<br />
              Huntington, IN 46750
            </address></p>
            <p>
              <a href="mailto:prevent-a-spill@excite.com">
              email : prevent-a-spill@excite.com
              </a></p>
          </div>
        </p>
      </div>
    )
  }
}

class VideoPlayer extends Component {
  render() {
    const {isPlayingVideo, toggle} = this.props;
    if (isPlayingVideo) {
      return (
        <div class="video-player-container">
          <div>
            <video src={idVideo} controls>
              Sorry, your browser doesn't support embedded videos,
              but don't worry, you can <a href={idVideo}>download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
          <button onClick={toggle} class="video-toggle">Close Video</button>
        </div>
      )
    } else {
      return (
        <div>
          <p onClick={toggle} class="anchorlink">Click to see a video of the Insta-Dike in action!</p>
          <img src={videoPoster} onClick={toggle} alt="click to play video" class="image-button" />
        </div>
      )
    }
  }
}

export default App
