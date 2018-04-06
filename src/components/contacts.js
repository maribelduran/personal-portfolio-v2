import React from "react";
import "./contacts.css";

const Contacts = () => {
return(
    <section id="contact" className="section contact">
      <h2 className="text-center">CONTACT</h2>
      <div className="row text-center section-content">
        {/* Github log */}
        <div className="col-sm-2">
          <a href="https://github.com/maribelduran" target="_blank" className="btn btn-social-icon">
            <span className="fa fa-github"></span>
          </a>
        </div>
         {/* Twitter logo} */ }
        <div className="col-sm-2">
          <a href="https://twitter.com/maribeldotduran" target="_blank" className="btn btn-social-icon">
            <span className="fa fa-twitter"></span>
          </a>
        </div>
         {/* Medium logo} */ }
        <div className="col-sm-2">
          <a href="https://medium.com/@maribelduran" target="_blank" className="btn btn-social-icon btn">
            <span className="fa fa-medium"></span>
          </a>
        </div>
       {/* Instagram logo} */ }
        <div className="col-sm-2">
          <a href="https://www.instagram.com/mariclay" target="_blank" className="btn btn-social-icon">
            <span className="fa fa-instagram"></span>
          </a>
        </div>
        {/* LinkedIn logo} */ }
        <div className="col-sm-2">
          <a href="https://www.linkedin.com/in/maribelduran" target="_blank" className="btn btn-social-icon btn-linkedin">
            <span className="fa fa-linkedin"></span>
          </a>
        </div>
         {/* Envelope logo} */ }
        <div className="col-sm-2">
          <a href="mailto:maribelduranucm@gmail.com" target="_blank" className="btn btn-social-icon btn-envelope">
            <span className="fa fa-envelope"></span>
          </a>
        </div> 
      </div> 
    </section>
  )
}

export default Contacts;