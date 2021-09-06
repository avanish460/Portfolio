import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Avanish Dubey',
  subtitle: 'Frontend Developer and OpenSource enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1fAiVqDoD2lj4xQpnBJinPopozpls3R4h/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'calculator.png',
    title: 'Calculator',
    info: 'Using HTML, Bootstrap, and JavaScript, I created a Calculator web app that takes three inputs, including two operands and one operator.',
    info2: '',
    url: 'https://avanish460.github.io/Calculator/',
    repo: 'https://github.com/avanish460/Calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'house.jpg',
    title: 'BamBam Block',
    info: 'Using HTML, CSS. I created a welcome page for the BamBam block startup.',
    info2: '',
    url: 'https://avanish460.github.io/bambam_block/',
    repo: 'https://github.com/avanish460/bambam_block', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'clock.jpg',
    title: 'Analog clock',
    info: 'By using HTML, CSS, and Javascript. I created an Analog clock. You can see your time on this.',
    info2: '',
    url: ' https://avanish460.github.io/AnalogClock/',
    repo: 'https://github.com/avanish460/AnalogClock', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'designs.jpg',
    title: 'Some Designs',
    info: 'I have created some designs, including logos, posters, and some youtube thumbnails and videos.',
    info2: '',
    url: 'https://drive.google.com/drive/folders/1WXdiFWyrJ5jj9Zz3jyal1Pbagsh-q6xb?usp=sharing',
    repo: 'https://drive.google.com/drive/folders/1WXdiFWyrJ5jj9Zz3jyal1Pbagsh-q6xb?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dubeyavanish166@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Avanish69977581',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/avanish-dubey-122208/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/avanish460',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
