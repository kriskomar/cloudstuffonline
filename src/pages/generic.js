import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import pic4 from '../images/pic04.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Welcome To The Cloud</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <p>
            You are now in the cloud. It's that easy! Now that you've converted all of your assets to cloud assets, 
            you can sit back, relax, and breathe easy. Smell that? That's the satisfaction of being in the cloud. 
          </p>
          <p>
            You and thousands of other cloud customers have been satisfactorily serviced by our licensed cloud specialists. 
            Enjoy your stay even more up in the clouds with our signature CloudPamper™ level of service which doubles the 
            amount of cloud you will be given. Ask your cloud sales associate today if you're interested. 
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
