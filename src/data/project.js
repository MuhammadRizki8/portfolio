import project from '../assets/projects/project.svg';
import minatku from '../assets/projects/minatku.png';

const projects = [
  {
    name: 'Minatku App',
    img: minatku,
    description: 'MinatKu is a career and college-prep application created to fulfill the capstone project in the Bangkit programme. The application can provide suitable career path suggestions for users using AI.',
    link: 'https://github.com/minatku',
    roles: ['Backend Developer', 'Cloud Engineer'],
    techStack: ['Python', 'FastAPI', 'GCP', 'TensorFlow', 'Android'],
  },
  {
    name: 'Lorem Ipsum',
    img: project,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    link: 'https://github.com',
    roles: ['Backend Developer: Implemented server-side logic and APIs.', 'Project Manager: Coordinated the project timeline and tasks.'],
    techStack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
  },
];

export { projects };
