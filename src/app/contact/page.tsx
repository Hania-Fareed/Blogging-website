"use client"
import Header from "../components/header";
import React from 'react'
import Swal from 'sweetalert2'

const contact = () => {

    const onSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b2a921ef-606a-45d4-96a1-83dbb0e6e6a4");
    
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
                title: "success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
    
    return (
        <div>
            <Header/>
        <section className="contact02">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your Name' name='name' required />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your Email' name='email' required />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field mess"placeholder='Write your message' required>
                    </textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
        </div>
    )
}

export default contact;