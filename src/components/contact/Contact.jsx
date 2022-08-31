import React from "react";
import contact from "../../images/contact-me.svg"

const Contact = () => {
    return (
        <section className="contact section container" id="contact">
            <h2 className="section__title">I'd love to hear from you</h2>
            <div className="contact__container">
                <div className="contact__info">
                    <p>phone</p>
                    <h3>+381 64 546 94 31</h3>
                    <p>email</p>
                    <h3>vladimir.monarov@yahoo.com</h3>
                    <p>address</p>
                    <h3>Kralja Petra I 28 Novi Sad</h3>
                </div>
                <div className="contact__image">
                    <img src={contact} alt="contact icon" className="contact__img"/>
                </div>
            </div>
        </section>
    )
}

export default Contact;