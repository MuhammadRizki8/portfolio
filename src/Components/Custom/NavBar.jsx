import React, { useState, useEffect } from 'react';
import { navBar } from '../../data/title';
import { name } from '../../data/about';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import '../../style/navBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  // Highlight active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
          const id = section.getAttribute('id');
          setActiveNav(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onClickHandler = (element) => {
    setActiveNav(element.name);
    setIsOpen(false); // Close menu on item click in mobile view
  };

  return (
    <nav className="items-center justify-between flex-wrap p-6 py-6 z-10 fixed top-0 w-full bg-[#09132e] shadow-lg">
      <div className="md:w-10/12 w-11/12 mx-auto flex flex-shrink-0 flex-wrap justify-between items-center">
        <div>
          <a
            href="#home"
            onClick={() => {
              setActiveNav('');
            }}
            className="text-[#37BCF8] font-semibold text-lg"
          >
            <span className="name-title">{'< '}</span> {name}
            <span className="name-title">{' />'}</span>
          </a>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 focus:outline-none">
            <img src={menu} className={`h-7 w-7 object-contain transition-transform duration-300 ${isOpen ? 'rotate-90 hidden' : 'rotate-0 block'}`} />
            <img src={close} className={`h-4 w-4 object-contain transition-transform duration-300 ${isOpen ? 'rotate-0 block' : 'rotate-90 hidden'}`} />
          </button>
        </div>
        <div className={`w-full block md:flex md:items-center md:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm md:flex md:flex-grow gap-5">
            {navBar.map(({ name, linkTo }) => (
              <div key={name}>
                <a
                  href={linkTo}
                  className={`${activeNav === name ? 'text-[#37BCF8] font-bold' : 'text-white font-semibold'} hover:text-[#37BCF8] block mt-4 md:inline-block md:mt-0 transition-colors duration-300`}
                  onClick={() => {
                    onClickHandler({ name });
                  }}
                >
                  {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
