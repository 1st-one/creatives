import React from 'react';
import img from '@img/article/1.png';
import img2 from '@img/article/2.png';

const Article = () => {
    return (
        <div className="article">
            <div className="article__col">
                <div className="article__col-item">
                    <div className="article__col-item-content">
                        <div className="data">
                            Jan 4.2016 | in Culture
                        </div>
                        <div className="title">
                            akita inu dog
                        </div>
                        <div className="text">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.<br />
                            <br />
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur
                        </div>
                    </div>
                </div>
                <div className="article__col-item">
                    <img src={img} alt="" />
                </div>
            </div>

            <div className="article__col second">
                <div className="article__col-item">
                    <img src={img2} alt="" />
                </div>
                <div className="article__col-item">
                    <div className="article__col-item-content">
                        <div className="data">
                            Jan 4.2016 | in Culture
                        </div>
                        <div className="title">
                            akita inu dog
                        </div>
                        <div className="text">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.<br />
                            <br />
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Article;