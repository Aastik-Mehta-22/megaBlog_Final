import React from "react";
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c635daa7-d187-4a3c-ad10-fdcc5dabd72f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully to Aastik 😊!",
                icon: "success"
              });
        
        }
      };

  return (
        <section className='contact'>
            <form onSubmit={onSubmit} className="form1">
                <h2>Contact Form</h2>
                <div className="input-box"> 
                    <label>Full Name</label>
                    
                    <input type="text" className="field" placeholder='Enter Your Name' name='name' required/>
                </div>
                <div className="input-box"> 
                    <label>Email</label>
                    <input type="email" className="field" placeholder='Enter Your email' name='email' required/>
                </div>
                <div className="input-box"> 
                    <label>Your Message</label>
                    <textarea name="message" id="" className="field mess" placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit' id='btncontactus' className="bg-blue-400">Send Message</button>
            </form>
        </section>
  )
}

export default Contact