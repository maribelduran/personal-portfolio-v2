import React from "react";
import "./contacts.css";
import contactList from "../data/contacts.json";

const Contacts = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="text-center">CONTACT</h2>
      <div className="row text-center section-content">
        {contactList.map(contact => (
          <div className="col-sm-2" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              className="btn-social-icon"
              rel="noopener noreferrer"
            >
              <span className={`fa fa-${contact.icon}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
