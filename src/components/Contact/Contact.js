import React, { useState } from "react";
import './contact.css';
import emailjs, {init} from "emailjs-com";
init("user_QM4E2KLIGwZT090tdYVhl");



const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_2os425l", {
      name,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_hv9yofh", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <form className="contact-form">
      <h2 className="contact-title">Contact</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse e-mail"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default App;