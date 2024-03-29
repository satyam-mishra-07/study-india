import React from 'react';

const ContactForm = () => {
  return (
    <div className='w-full h-screen'>
        <div className="min-h-screen flex w-full justify-center items-center">
          <div className="container mx-auto w-1/2">
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold">Contact Us</h1>
              <h4 className="text-gray-400 text-lg">We'd love to hear from you!</h4>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-4">
                <div className="styled-input wide">
                  <input type="text" required className="input-field" />
                  <label className="label">Name</label> 
                </div>
                <div className="styled-input">
                  <input type="text" required className="input-field" />
                  <label className="label">Email</label> 
                </div>
                <div className="styled-input">
                  <input type="text" required className="input-field" />
                  <label className="label">Phone Number</label> 
                </div>
                <div className="styled-input wide">
                  <textarea required className="input-field"></textarea>
                  <label className="label">Message</label>
                </div>
                <div className="col-span-2">
                  <div className="btn-lrg submit-btn">Send Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ContactForm;
