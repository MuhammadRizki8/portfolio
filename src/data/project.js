import lenderup from '../assets/projects/lenderup.png';
import minatku from '../assets/projects/minatku.png';
import sma13 from '../assets/projects/sma13.png';
import donasi from '../assets/projects/donasi.png';

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
    name: 'LenderUp',
    img: lenderup,
    description: 'A peer-to-peer (P2P) lending mobile application that connects borrowers and lenders to conduct transactions. This application focuses on funding MSMEs to advance the middle to lower economy.',
    link: 'https://github.com/MuhammadRizki8/LenderUp',
    roles: ['Backend Developer', 'UI/UX Research', 'Flutter Developer'],
    techStack: ['Flutter', 'FastAPI', 'SQLite', 'Figma'],
  },
  {
    name: 'Donasi Mahasiswa',
    img: donasi,
    description: '"Peduli Mahasiswa" student donation website application using WordPress and TriPay payment gateway',
    link: 'https://github.com/MuhammadRizki8/Website-Donasi-Peduli-Mahasiswa',
    roles: ['Wordpress Developer'],
    techStack: ['Wordpress', 'Payment Gateway', 'Woocommerce'],
  },
  {
    name: 'Website Profile of SMA 13 Bandung',
    img: sma13,
    description: 'high school profile website in Bandung, West Java using php framework, Laravel.',
    link: 'https://github.com/MuhammadRizki8/laravel-school-profile',
    roles: ['Web Developer'],
    techStack: ['Laravel', 'MySQL'],
  },
];

export { projects };
