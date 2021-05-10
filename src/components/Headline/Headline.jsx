import React from 'react';

const Headline = ({ num }) => {

  const content = (num) => {
    const arrData = [
      {
        letter: 'W',
        title: 'We Are An Awesome Agency',
        num: 'w'
      },
      {
        letter: 'B',
        title: 'let\'s blog',
        num: 'b'
      },
      {
        letter: 'T',
        title: 'our team',
        num: 't'
      },
      {
        letter: 'C',
        title: 'we\'d love to hear about your project.',
        num: 'c'
      }
    ];

    const result = arrData.filter(item => item.num === num)
    return result;
}

  return (
    <div className="section__headline">
      <div className="section__headline-letter">{content(num)[0].letter}</div>
      <div className="section__headline-title">
        {content(num)[0].title}
      </div>
    </div>
  );
};

export default Headline;