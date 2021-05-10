import React from 'react';

const Form = () => {
    return (
        <div className="form">
            <div className="form__data">
                <input className="form__data-name" type="text" placeholder="Name"/>
                <input className="form__data-email" type="text" placeholder="Email"/>
                <input className="form__data-phone" type="text" placeholder="Phone"/>
            </div>
            <textarea className="form__message" placeholder="Message" cols="30" rows="10"></textarea>
            <button className="form__btn">submit</button>
        </div>
    );
};

export default Form;