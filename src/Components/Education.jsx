// src/components/Education.jsx
import React from 'react';
import Timeline from './Custom/Timeline';
import { education } from '../data/experience';

function Education() {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-10" id="education">
      <div className="font-bold text-xl text-[#37BCF8] pb-6">Education</div>
      <div className="w-full py-6">
        {education.map((element, index) => {
          const leftSide = index % 2 === 0;
          const first = index === 0;
          const last = index === education.length - 1;

          return <Timeline key={element.year} year={element.year} organization={element.organization} position={element.position} responsibility={element.responsibility} first={first} last={last} leftSide={leftSide} />;
        })}
      </div>
    </div>
  );
}

export default Education;
