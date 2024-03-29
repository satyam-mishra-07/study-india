import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const ContactForm = () => {
  const {user, getUser, isLoggedIn } = useAuth();

  useEffect(() => {
    getUser();
  },[]);

  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [user1, setUser1] = useState(true);

  if (user1 && user) {
    setContact({
      username: user.name,
      email: user.email,
      phone: user.phone,
      message: "",
    });
    console.log("userData", user);
    setUser1(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    const url = `http://localhost:3000/api/form/contact`
    try {
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
      });
      console.log(response);
      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        setContact({
          username: user.name,
          email: user.email,
          phone: user.phone,
          message: "",
        });
      }else{
        toast.error(res_data.message);
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className='w-full h-screen'>
        <div className="min-h-screen flex w-full justify-center items-center">
          <div className="container mx-auto w-1/2">
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold">Contact Us</h1>
              <h4 className="text-gray-400 text-lg">We'd love to hear from you!</h4>
            </div>
            <div className="mt-8">
              <form action='' onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="styled-input wide">
                  <input type="text" required className="input-field" name='name' value={contact.name} onChange={handleInput}/>
                  <label className="label">Name</label> 
                </div>
                <div className="styled-input">
                  <input type="text" required className="input-field" name='email' value={contact.email} onChange={handleInput} />
                  <label className="label">Email</label> 
                </div>
                <div className="styled-input">
                  <input type="text" required className="input-field" name='phone' value={contact.phone} onChange={handleInput} />
                  <label className="label">Phone Number</label> 
                </div>
                <div className="styled-input wide">
                  <textarea required className="input-field" name='message' value={contact.message} onChange={handleInput}></textarea>
                  <label className="label">Message</label>
                </div>
                <div className="col-span-2">
                  <button type='submit' className="btn-lrg submit-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ContactForm;
