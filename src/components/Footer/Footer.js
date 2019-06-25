import React, { Component } from 'react';
import '../../scss/components style/footer-style.scss';
import Decoration from "../Decoration";
import FooterImg from './../../images/footer_bg_img.jpg';

class Footer extends Component {
    render() {
        return(
            <div className="footer" style={{backgroundImage: `linear-gradient(to right, rgba(155,155,155,0) 46%,rgba(155,155,155,0.22) 58%,rgba(165,165,165,1) 100%), url(${FooterImg})`}}>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                      crossOrigin="anonymous"/>
                <div className="contact-block-position">
                    <div className="contact-block">
                        <div className="frame-position">
                            <h3>Skontaktuj się z nami</h3>
                            <Decoration/>
                        </div>
                        <div className="footer-form">
                            <p>FORMULARZ KONTAKTOWY</p>
                            <input type="text" name="footer-form" placeholder="Imie"/>
                            <input type="text" name="footer-form" placeholder="Email"/>
                            <input type="text" name="footer-form" placeholder="Wiadomość"/>
                            <div className="form-button">
                                <button name="footer-form">Wyślij</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-signature container">
                    <div className="p-position">
                        <p>Copyright 2019 <sup> &copy; </sup> by Piotr Gawełda </p>
                    </div>
                    <div className="media-icons">
                        <i className="fab fa-facebook-f "></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;