import React from 'react';
import img  from '@img/requirements/device2.png';

const Requirements = () => {
    return (
        <div className="requirements">
            <div className="container">
                <div className="requirements__item">
                    <div className="requirements__item-title">akita inu dog</div>
                    <div className="requirements__item-text">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </div>
                    <div className="requirements__item-require">
                        <div className="design">fully responsive design</div>
                        <div className="code">high quality code</div>
                        <div className="layout">different headers {'&'} layout</div>
                    </div>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Requirements;