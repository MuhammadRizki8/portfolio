import lenderup from '../assets/projects/lenderup.png';
import minatku from '../assets/projects/minatku.png';
import sma13 from '../assets/projects/sma13.png';
import donasi from '../assets/projects/donasi.png';
import dss from '../assets/projects/dss.png';
import creditRisk from '../assets/projects/creditRisk.png';

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
  {
    name: 'Decision Support System Website',
    img: dss,
    description: 'Web application that assists in decision making using the Weighted Product method. This method is used to evaluate alternatives based on several criteria that have their respective weights.',
    link: 'https://github.com/MuhammadRizki8/weighted-product-decision-system-laravel',
    roles: ['Web Developer'],
    techStack: ['Laravel', 'MySQL'],
  },
  {
    name: 'Credit Risk Prediction',
    img: creditRisk,
    description:
      'developed a machine learning model to predict the likelihood of loan default. The primary goal was to assist lending institutions in making informed decisions when evaluating loan applications. The project included the following steps:Data Preprocessing, Feature Engineering, Model Development, Model Evaluation',
    link: 'https://github.com/MuhammadRizki8/Credit-Risk-Prediction',
    roles: ['Data Scientist'],
    techStack: ['Scikit-Learn', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
];

export { projects };
