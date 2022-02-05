import React from 'react';

const Contact = () => {
  return (
      <div className="container mt-5">
        <div className='row'>
            <div className='col-12 mb-5'>
              <h1 className='text-center text-primary'>Contact Us</h1>
              <hr />
            </div>
            <div className='col-6'>
                <img src='/images/enveloppe.jpg' alt='Contact Us' height='400px' />
            </div>
            <div className='col-6'>
                <form>
                    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                </form>
                <button className="btn btn-primary">Send Message</button>
            </div>
        </div>
      </div>
  )
};

export default Contact;