import React from 'react'
import {Helmet} from 'react-helmet';

function Contact() {
  return (
    <>
      <Helmet>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
    </Helmet>
      <div className="container">

    <h3 className="text-center">Contact us</h3><br />
    <div className="row">
      <div className="col-md-8">
          <form action="/post" method="post">
            <input className="form-control" name="name" placeholder="Name..." /><br />
            <input className="form-control" name="phone" placeholder="Phone..." /><br />
            <input className="form-control" name="email" placeholder="E-mail..." /><br />
            <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height:150}}></textarea><br />
            <input className="btn btn-primary" type="submit" value="Send"></input><br /><br />
          </form>
      </div>
      <div className="col-md-4">
        <b>Allan Were Otieno</b> <br />
        Phone: 0710668142<br />
        Eng Agricultural and Biosytems <br/>
        E-mail: <a href="mailto:Were.allan99@gmail.com">Were.allan99@gmail.com</a><br />
        <br /><br />
        <b>Adho Mamo</b><br />
        Phone: 0710917833<br />
        Eng Agricultural and Biosytems  <br/>
        <a href="mailto:adhomamo@gmail.com">adhomamo@gmail.com</a><br />
        <br /><br />

        <b> Dr. Stephen Ondimu</b><br />
        Lecturer at Jomo Kenyatta University of Agriculture and Technology (JKUAT)<br />
        Biosystems Engineering  <br/>
        <a href="mailto:lecturer@jkuat.ac.ke">lecturer@jkuat.ac.ke</a><br />
        <br /><br />
        
      </div>
    </div>
</div>
    </>
  )
}

export default Contact