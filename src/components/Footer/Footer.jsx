import React from 'react';
import img from '@img/footer.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={img} alt="" />

            <div className="footer__data">
                <div className="container">
                    <div className="footer__data-year">
                        © 2016 PSDfreebies.com – All Right Reserved
                    </div>
                    <div className="footer__data-author">
                        Design by: PSDFreebies.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;