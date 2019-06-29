import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>CLOUD STUFF ONLINE</h1>
          <p>
            We are experts at getting you in to
            <br />
            your own advanced and distributed cloud!
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  More cloud stuff
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Connect Your Offices To The Cloud</h2>
              <p>
                With cloud stuff, you can "have your cloud
                and eat it too!" We have advanced cloud
                VPN connectivity throughout the continental US,
                meaning your cloud network will make your
                employees feel more connected than ever.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    I want cloud now!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Cloud VoIP - New Voice Over Cloud Protocol</h2>
              <p>
                With Cloud Stuff's new Voice Over Cloud Protocol
                you can be sure that every call your business 
                needs to make will be safely transported over
                our cloud network to make your employees more
                productive every day. Just ask your sales representative
                for CloudWipe today!
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Order CloudWipe!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Worried About Cloud Insertion?</h2>
              <p>
                Many business leaders that are curious about 
                inserting their business into the cloud have 
                used Cloud Stuff to help them with this most
                daunting task. Don't worry! We'll get you as 
                far up into our cloud with our patented 
                "CloudInsert"™ technology!
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Use "CloudInsert"™ Today!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            We use expert level cloud engineers and advanced cloud technology to make sure that 100% of our customers
            seeking their way into the cloud get there safe and sound, every time. We've never had an unsatisfied cloud customer 
            and we treat each and every new customer like they are our one and only! 
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Weather Control System</h3>
              <p>
                Our patented weather control system, "No Cloudy Days", literally controls the weather to create an external 
                ecosystem around your business that suits the needs of whatever you would like. If you like clouds, just push the "Clouds" 
                button and within 10 minutes you'll be surrounded by clouds, guaranteed! If you like fair weather, push the "No Clouds" 
                button and all clouds will immediately be cleared away from the local area and out of your face. Viola! 
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>Alchemical Fabrication System</h3>
              <p>
                Our new, patented Alchemical Fabication System literally lets you convert precious metals such 
                as gold and platinum into the cloud. Your metals become precious cloud currency that are 100% safe 
                to handle and use for any cloud purchasing scenario. 
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Cloud Wizard</h3>
              <p>
                With our new Cloud Wizard feature, you can be jamming in to the cloud in a matter of minutes! 
                Simply create your account, click on the brown Cloud Wizard button, and enjoy your way around the cloud immediately!
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>Double Cloud Penetration Testing</h3>
              <p>
                We employ expert CyberCloud Security Engineers who know their way around a cloud system. We take your 
                CyberCloud Security seriously by practicing our patented Double Cloud Penetration Testing to ensure your 
                cloud is impenetrable. 
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more about Cloud Stuff
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch with the cloud experts</h2>
          <p>
            Email us today at <a href="mailto:cloudstuffisgreat@cloudstuff.online">cloudstuffisgreat@cloudstuff.online</a> 
            and we will get you in touch with the first available cloud specialist sales representative. You will not be 
            disappointed with how fast they respond to cloud inquiries. 
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    12345 WhiteCloud Road #654
                    <br />
                    Cloudhole, TN 48488-3388
                    <br />
                    USA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="/#">cloudstuffisgreat@cloudstuff.online</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(208) 555-1245</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-linkedin">
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
