import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
      <div className="container mt-5">
          <div className="row">
            <div className='col-6'>
              <h1 className="fw-bold text-center text-primary">
                   About Us
              </h1>
              <hr />
              <p className='lead'>
                  Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                       survived not only five centuries, but also the 
                       leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release
                         of Letraset sheets containing Lorem Ipsum passages,
                   and more recently with desktop publishing software like Aldus 
                   PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
                    dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                       survived not only five centuries, but also the 
                       leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release.
              </p>
              <NavLink to='contact' className="btn btn-outline-primary">Contact Us</NavLink>
            </div>
            <div className="col-6 d-flex justify-content-end mt-5 py-5">
                <img src='/images/about1.jpg' alt='About' height='300px' />
            </div>
          </div>
      </div>
  )
};

export default About;