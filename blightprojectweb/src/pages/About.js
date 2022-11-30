import React from 'react'
import imageAdho from '../images/adho.jpeg';
import imageAllan from '../images/allan.jpeg';
import imageBarasa from '../images/barasa.jpg';
import {Helmet} from 'react-helmet';

function About() {
  return (
  <>
    <Helmet>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
    </Helmet>
  <div className="container">
                    
                    <div className="row">
                        <div className="heading-title text-center">
                            <h3 className="text-uppercase">Meet the team </h3>
                            <p className="p-top-30 half-txt">This website is about an algorithm that can identify tomato blight in plant.<br/>This app provides a categorical basis of identify blight into 4 classes based on day.</p>
                            <p className="p-top-30 half-txt">These 4 classes are:</p>
                            <p>
                                Blight infected day 1-3<br/>
                                Blight infected day 3-5<br/>
                                Blight infected day 5-7<br/>
                                Blight infected day 7 onward
                            </p>
                            <p>	
                                It functions is to help farmers identify early blight as possible so as to <br/> avoid transition to late blight and infection of the whole plant
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={imageAllan} alt="team member" className="img-responsive" width="1000" height="1200"></img>
                                    {/* <img id="myImg" src={imageAllan} alt="The Pulpit Rock" width="304" height="228"></img> */}
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Innovation at its best</h4>
                                        <p>We design and build</p>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Allan Were</h5>
                                <span>Machine Learning & AI</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={imageAdho} alt="team member" className="img-responsive" width="300" height="300"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>I am innovative</h4>
                                        <p>ABE Engineer.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="team-title">
                                <h5>Adho Mamo</h5>
                                <span>Machine learning & AI</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={imageBarasa} alt="team member" className="img-responsive"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>I love to design</h4>
                                        <p>Web Designer.</p>
                                    </div>
                                    
                                </div>
                            </div> 
                            <div className="team-title">
                                <h5>Barasa Sammy</h5>
                                <span>Web Developer</span>
                            </div>
                        </div>

                    </div>
                        {/* About */}
                </div>
  </>
    
  )
}

export default About