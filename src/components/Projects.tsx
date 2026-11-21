import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'TO-DO_UPDATED.v2',
    description: 'A full-featured to-do application with task categories, due dates, and progress tracking.',
    status: 'Completed',
    githubLink: 'https://github.com/SachinCoder11/TO-DO-WEB-APP.v2-updated-',
    projectLink: 'https://to-do-web-app-v2-updated.vercel.app/'
  },
  {
 
    title: 'Travle-Nexus',
    description: 'TravelNexus is a travel application with a backend powered by phpMyAdmin. It stores transaction details in a database, ensuring efficient management of bookings and user interactions',
    status: 'Completed',
    githubLink: 'https://github.com/SachinCoder11/Travle-nexus',
    projectLink: 'https://github.com/SachinCoder11/Travle-nexus/blob/main/README.md'
  },
  {
 
    title: 'Currency Converter',
    description: 'Convert between multiple currencies using real-time exchange rates  Designed with a responsive UI for easy international conversions',
    status: 'Completed',
    githubLink: 'https://github.com/SachinCoder11/Currency-Converter',
    projectLink: 'https://currency-converter-u956.vercel.app/'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A modern version of the classic game with smooth UI and animationsPlay against friends',
    status: 'Completed',
    githubLink: 'https://github.com/SachinCoder11/TICK_TAK_TOE--GAME',
    projectLink: 'https://tick-tak-toe-game.vercel.app/'
  },
  {
    title: 'Stop-Watch',
    description: 'Track time accurately with start, stop, reset, and lap features.Built with a sleek interface for performance and usability',
    status: 'Completed',
    githubLink: 'https://github.com/SachinCoder11/STOP-WATCH',
    projectLink: 'https://stop-watch-bp9d.vercel.app/'
  },
  {
    title: 'Music App',
    description: 'Streaming music player with playlist creation, artist discovery, and visualizations.',
    status: 'Under Development',
    githubLink: '#',
    projectLink: '#'
  },
  {
    title: 'Flex-Tube',
    description: 'Streaming platform with content categories, user profiles, and recommendation system.',
    status: 'Under Developement',
    githubLink: '#',
    projectLink: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">My</span> Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              status={project.status as "Completed" | "Under Development" | "Coming Soon"}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
