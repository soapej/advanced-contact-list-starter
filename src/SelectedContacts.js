import React from 'react';
// import Contact from './Contact';

const SelectedContacts = props => {
  return (
    <section className="selected-contacts">
      <ul>
        {props.contacts.map(contact => {

          return (
            <li key={props._id} onClick={() => props.onClick}>
              <div className="image-cropper">
                <img src={props.avatar} alt="avatar"/>
              </div>
              <div className="contact-info">
                <h3>
                  {props.name}
                </h3>
                {props.occupation}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  );
  }


export default SelectedContacts;
