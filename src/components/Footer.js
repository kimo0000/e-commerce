import React from 'react';

const Footer = () => {
  return (
    <>
       <div className="bg-dark">
         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mx-5">
          <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">© 2021 Company, Inc, kimo</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
       <li><a href='https://www.facebook.com' target='blank'><span className='fa fa-facebook me-2'></span></a></li>
       <li><a href='https://www.instagram.com' target='blank'><span className='fa fa-instagram me-2'></span></a></li>
       <li><a href='https://www.twitter.com' target='blank'><span className='fa fa-twitter me-2'></span></a></li>
    </ul>
  </footer>
</div>
    </>
  )
};

export default Footer;