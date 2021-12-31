import React, { useState } from 'react';
import emailjs from "emailjs-com";
import './contact.css';
import { FaEnvelope, FaMobile } from 'react-icons/fa';

const Result = () => {
    return (
        <p className="confirmation">Votre message a bien était envoyé</p>
    );
};

function Contact(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_0xjgx6j", "template_p4xqfdd", e.target, "user_tbl8K13EAGdr3VW9TT3fd")
            .then(
                (result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        e.target.reset();
        showResult(true);
    };

    setTimeout(() => {
        showResult(false);
    }, 5000);

    return (
        <div className="contact-container">
            <div className="contact-infos">
                <h2 className="contact-title" data-aos="fade-down" data-aos-duration="2000">Vous souhaitez me contacter ?</h2>
                <p data-aos="fade-down" data-aos-duration="2000">Je me ferai un plaisir de vous joindre le plus rapidement possible. A bientôt !</p>
                <div className="span-infos">
                    <div className="phone-infos" data-aos="fade-right" data-aos-duration="2000">
                        <FaMobile size="3rem" color="rgb(255, 186, 1)" />
                        <h3>Téléphone</h3>
                        <strong>06.88.64.59.34</strong>
                    </div>
                    <div className="mail-infos" data-aos="fade-left" data-aos-duration="2000">
                        <FaEnvelope size="3rem" color="rgb(2255, 186, 1)" />
                        <h3>Mail</h3>
                        <strong>isabellepare.dentelle@gmail.com</strong>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="2000">
                <div className="formWord">
                    <h2 className="form-title">Ou en remplissant le formulaire</h2>
                    <br />
                    <input className="input" placeholder="Nom *" type="text" name="name" required />
                    <br />
                    <input className="input" placeholder="Email *" type="email" name="email" required />
                    <br />
                    <input className="input" placeholder="Téléphone" type="phone" name="phone" />
                    <br />
                    <textarea name="message" placeholder="Message *" required></textarea>
                    <br />
                    <button>Envoyer</button>

                    <div className="row">{
                        result ? <Result /> : null}</div>
                </div>
            </form>
        </div>
    );
}

export default Contact;