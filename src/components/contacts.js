import React from "react";

const Contacts = () => {
return(
    <div id="contact" class="section">
      <h2 class="text-center">CONTACT</h2>
      <div class="row text-center section-content">
        {/* Github log */}
        <div class="col-sm-2">
          <a href="https://github.com/maribelduran" target="_blank" class="btn btn-social-icon btn-instagram">
            <span class="fa fa-github"></span>
          </a>
        </div>
         {/* Twitter logo} */ }
        <div class="col-sm-2">
          <a href="https://twitter.com/maribeldotduran" target="_blank" class="btn btn-social-icon btn-instagram">
            <span class="fa fa-twitter"></span>
          </a>
        </div>
         {/* Medium logo} */ }
        <div class="col-sm-2">
          <a href="https://medium.com/@maribelduran" target="_blank" class="btn btn-social-icon btn-instagram">
            <span class="fa fa-medium"></span>
          </a>
        </div>
       {/* Instagram logo} */ }
        <div class="col-sm-2">
          <a href="https://www.instagram.com/mariclay" target="_blank" class="btn btn-social-icon btn-instagram">
            <span class="fa fa-instagram"></span>
          </a>
        </div>
        {/* LinkedIn logo} */ }
        <div class="col-sm-2">
          <a href="https://www.linkedin.com/in/maribelduran" target="_blank" class="btn btn-social-icon btn-linkedin">
            <span class="fa fa-linkedin"></span>
          </a>
        </div>
         {/* Envelope logo} */ }
        <div class="col-sm-2">
          <a href="mailto:maribelduranucm@gmail.com" target="_blank" class="btn btn-social-icon btn-envelope">
            <span class="fa fa-envelope"></span>
          </a>
        </div> 
      </div> 
    </div>
)
}

export default Contacts;