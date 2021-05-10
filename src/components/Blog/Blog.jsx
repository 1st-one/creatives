import React from 'react';
import img1 from '@img/blog/1.png';
import img2 from '@img/blog/2.png';
import img3 from '@img/blog/3.png';

const Blog = () => {
    return (
            <div className="blog">
                <div className="blog__title">
                    We love clean design and advanced digital solutions.
                </div>
                <div className="blog__table">
                    <div className="blog__table-item">
                        <img src={img1} alt="" />
                        <div className="blog__table-item-title">fresh summer capaign</div>
                        <div className="blog__table-item-content">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </div>
                    </div>
                    <div className="blog__table-item">
                        <img src={img2} alt="" />
                        <div className="blog__table-item-title">fresh summer capaign</div>
                        <div className="blog__table-item-content">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </div>
                    </div>
                    <div className="blog__table-item">
                        <img src={img3} alt="" />
                        <div className="blog__table-item-title">fresh summer capaign</div>
                        <div className="blog__table-item-content">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </div>
                    </div>
                    <div className="blog__table-item">
                        <img src={img1} alt="" />
                        <div className="blog__table-item-title">fresh summer capaign</div>
                        <div className="blog__table-item-content">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;