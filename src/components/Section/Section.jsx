import React from 'react';
import Headline from '@/components/Headline/Headline';
import Feature from '@/components/Feature/Feature';
import Blog from '@/components/Blog/Blog';
import Team from '@/components/Team/Team';
import Form from '@/components/Form/Form';

const Section = ({ num }) => {
    const content = (num) => {
        switch (num) {
            case 'w':
                return <Feature />;
            case 'b':
                return <Blog />;
            case 't': 
                return <Team />;
            case 'c':
                return <Form />;
            default:
                return null;
        };
    };

    return (
        <section className={`section ${num}`}>
            <div className="container">
                <Headline num={num}/>
                {content(num)}
            </div>
        </section>
    );
};

export default Section;