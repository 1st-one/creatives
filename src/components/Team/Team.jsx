import React from 'react';
import img1 from '@img/team/1.png';
import img2 from '@img/team/2.png';
import img3 from '@img/team/3.png';
import img4 from '@img/team/4.png';

const Team = () => {
    return (
        <div className="team">
            <div className="team__title">
                Sales long tail influencer pitch release niche market.
            </div>
            <div className="team__table">
                <div className="team__table-item">
                    <img src={img1} alt="" />
                    <div className="team__table-item-content">
                        <div className="name">john snow</div>
                        <div className="prof">CEO</div>
                    </div>
                </div>

                <div className="team__table-item">
                    <img src={img2} alt="" />
                    <div className="team__table-item-content">
                        <div className="name">tony stark</div>
                        <div className="prof">Photographer</div>
                    </div>
                </div>

                <div className="team__table-item">
                    <img src={img3} alt="" />
                    <div className="team__table-item-content">
                        <div className="name">john dou</div>
                        <div className="prof">WebDesigner</div>
                    </div>
                </div>

                <div className="team__table-item">
                    <img src={img4} alt="" />
                    <div className="team__table-item-content">
                        <div className="name">lady sansa</div>
                        <div className="prof">Photographer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;