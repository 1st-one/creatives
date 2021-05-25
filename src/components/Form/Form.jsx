import React, { useEffect, useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [stateData, setStateData] = useState(true);

    const onChangeHandler = e => {
        const place = e.target.placeholder;
        const result = place.toLowerCase();
        setFormData({
            ...formData,
            [result]: e.target.value,
        })
    };

    const submitHandler = e => {
        if (e.target.className === 'form__btn' || 'form__btn active') {
            const arr = [];
            for (let key in formData) {
                arr.push(formData[key]);
            };

            if (arr.includes("")) {
                setStateData(false);
                
            } else if (!arr.includes("")) {
                setStateData(true);
            }
        }
    };


    return (
        <div className="form">
            <div className="form__data">
                <input className="form__data-name"
                    type="text"
                    value={formData.name}
                    placeholder="Name"
                    onChange={(e) => onChangeHandler(e)} />
                <input className="form__data-email"
                    type="text"
                    value={formData.email}
                    placeholder="Email"
                    onChange={(e) => onChangeHandler(e)} />
                <input className="form__data-phone"
                    type="text"
                    value={formData.phone}
                    placeholder="Phone"
                    onChange={(e) => onChangeHandler(e)} />
            </div>
            <textarea className="form__message"
                placeholder="Message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={(e) => onChangeHandler(e)}
            ></textarea>
            <button className={stateData ? "form__btn" : "form__btn active"}
                onClick={(e) => submitHandler(e)}
            >submit</button>
        </div>
    );
};

export default Form;