import React, { Component } from 'react'
import banner from './images/pas.jpg'
import instadikeBanner from './images/banner.jpg'
import instaDikeTruckPic from './images/I-D_Tanker_&_Sky.jpg'
import chemDike from './images/ChemDike_no-pricing.jpg'
import './App.css'

class App extends Component {
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
                It is constructed of steel &mdash; a membrane and a poured concrete
                floor. Hydraulic cylinders raise
                end ramps to form a containment dike around the tanker, when raised
                the end ramps seal and provide containment of any spilled fuel
                and a hydraulic valve connected to the drain provides control of
                draining and cleaning of system.
            </p>

            <p>
                When not in use any rain water is drained onto drive. In
                areas that snow occurs simply clean area as you would a driveway or
                parking lot, use a broom on end ramps.
            </p>

            <p>
                It adds about two minutes to your
                loading/unloading time. Hoses are contained and connected to an
                optional spill box or spill buckets can be installed in the poured
                concrete floor.
            </p>
            <p>
                We can size a system to your needs.
            </p>
            <p>
                The Insta Dike should provide many years of service.
            </p>
            <a href="#contact" class="anchorlink"><h3>Contact us for a dealer in your area</h3></a>

          </p>
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
              <a href="#contact" class="anchorlink"><h3>Contact us a dealer in your area!</h3></a>
            </p>
          </p>
          <img src={chemDike} alt="chem-dike" className="content-img"/>
        </p>
        <p>
          <h1>ADD IT UP : IT JUST MAKES SENSE TO PREVENT A SPILL.</h1>
        </p>
        <p class="footer" id="contact">
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
        </p>
      </div>
    )
  }
}

export default App
