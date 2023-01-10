import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_9y2tcxs', 
            'template_v89vddb',
             formRef.current, 
             'BCebU5kxcGtnh2P7v'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your journay</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src='https://th.bing.com/th/id/R.87be71bb05fe70796027da0d3623a065?rik=DwcN8%2fAzYmCDxg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9i4%2fo5R%2f9i4o5RkiE.png&ehk=4h84yGBXLiVP%2ffVpTuOp8i0kHi5xS3iCTVlhvUF%2bkdE%3d&risl=&pid=ImgRaw&r=0' alt="" className="c-icon" />
                        085792132517
                    </div>
                    <div className="c-info-item">
                        <img src='https://www.logolynx.com/images/logolynx/1f/1f9a438eaaf4f20885ecd763723479e7.png' alt="" className="c-icon" />
                        arijaya130@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src='https://cdn.onlinewebfonts.com/svg/img_413782.png' alt="" className="c-icon" />
                        Bali, Indonesia
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What are you go to Bali island?</b> If you have any qustion, you can contact me. Always available for guiding to Bali destination.
                </p> 
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button type="submit">Submit</button>
                    {done && " Thank You. I will respond soon..."}
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;