import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
  switch (name) {
    case 'HTML':
      return (
        <img
          src="https://www.svgrepo.com/show/452228/html-5.svg"
          alt="HTML5 Logo"
          className={className}
        />
      );
    case 'CSS':
      return (
        <img
          src="https://www.svgrepo.com/show/373535/css.svg"
          alt="CSS Logo"
          className={className}
        />
      );
    case 'JavaScript':
      return (
        <img
          src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
          alt="JavaScript Logo"
          className={className}
        />
      );
    case 'TailwindCSS':
      return (
        <img
          src="https://www.svgrepo.com/show/374118/tailwind.svg"
          alt="TailwindCSS Logo"
          className={className}
        />
      );
    case 'ReactJS':
      return (
        <img
          src="https://www.svgrepo.com/show/355190/reactjs.svg"
          alt="ReactJS Logo"
          className={className}
        />
      );
    case 'TypeScript':
      return (
        <img
          src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
          alt="TypeScript Logo"
          className={className}
        />
      );
    case 'NodeJS':
      return (
        <img
          src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
          alt="NodeJS Logo"
          className={className}
        />
      );
    case 'ExpressJS':
      return (
        <img
          src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png"
          alt="ExpressJS Logo"
          className={className}
        />
      );
    case 'NextJS':
      return (
        <img
          src="https://www.svgrepo.com/show/342062/next-js.svg"
          alt="NextJS Logo"
          className={className}
        />
      );
    default:
      return null;
  }
};

export default TechIcon;
