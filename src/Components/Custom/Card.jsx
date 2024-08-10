import React from 'react';
import { viewCode } from '../../data/title';
import github from '../../assets/github.png';
import githubActive from '../../assets/github_active.png';
import ButtonWithImage from '../Custom/ButtonWithImage';

function Card({ name, img, description, link, roles, techStack }) {
  return (
    <div className="w-full shadow-lg bg-[#1f2945] p-6 rounded-lg flex flex-col items-center h-[600px] transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-start">
        <img src={img} className="w-full h-1/3 object-contain rounded-t-lg pb-4 transition-transform transform hover:scale-110 duration-300 ease-in-out" alt={`${name} project`} />
        <div className="text-lg font-semibold pb-2 text-[#37BCF8] text-center">{name}</div>
        <div className="w-11/12 h-1/2 overflow-y-auto leading-loose text-sm mx-auto pb-2 text-gray-300 text-justify">{description}</div>
        {roles && (
          <div className="w-11/12 text-sm mx-auto pb-4 text-gray-400 text-left flex flex-wrap items-center">
            <strong className="text-[#37BCF8] mr-2">Roles:</strong>
            <span>
              {roles.map((role, index) => (
                <span key={index}>
                  {role}
                  {index < roles.length - 1 && <span className="mx-1">|</span>}
                </span>
              ))}
            </span>
          </div>
        )}

        {techStack && (
          <div className="w-11/12 text-sm mx-auto pb-4 flex flex-wrap gap-2 justify-start">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage icon={github} activeIcon={githubActive} label={viewCode} imageStyle="w-1/6" className="transition-transform transform hover:scale-105 duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
