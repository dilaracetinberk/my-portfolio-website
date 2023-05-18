import p1 from '../assets/p1.JPG';
import p2 from '../assets/p2.JPG';
import p3 from '../assets/p3.JPG';
import p4 from '../assets/p4.PNG';
import p5 from '../assets/p5.JPG';
import p6 from '../assets/p6.JPG';
import ss from '../assets/ss.JPG';

const Projects = [
  {
    id: 1,
    name: 'RefuBook Project',
    linkDemo: 'https://refubook-venus.netlify.app/',
    linkCode: 'https://github.com/dilaracetinberk/Refubook-Venus',
    img: p1,
    projectInfo: 'RefuBook is one of the Capstone Projects of the Bootcamp. This website is an online blog platform for refugees. They can share their stories and experiences. The platform aims to foster understanding, empathy, and support for refugees by raising awareness about their journeys and the challenges they face.',
    projectTech: ['JavaScript', 'React', 'Tailwind', 'Redux', 'Firebase']
  },
  {
    id: 2,
    name: 'Star Wars API',
    linkDemo: 'https://final-case-practicum.vercel.app/',
    linkCode: 'https://github.com/dilaracetinberk/final-case-practicum',
    img: ss,
    projectInfo: 'This final case project is a web application designed to showcase starships and their details using the Star Wars API. With this application, users can easily search for starships by name or model and access comprehensive information about each starship. The web application offers a user-friendly interface that allows users to explore a list of starships from the Star Wars universe. By utilizing the Star Wars API, the application dynamically fetches and displays data such as starship names, models, manufacturers, crew size, cargo capacity, and more.',
    projectTech: ['JavaScript', 'React', 'Tailwind', 'Context', 'Router']
  },
  {
    id: 3,
    name: 'Movie Worm Project',
    linkDemo: 'https://movie-worm.netlify.app/',
    linkCode: 'https://github.com/dilaracetinberk/movie-project-movie-worm',
    img: p2,
    projectInfo: 'Movie Worm is a website that leverages data from the TMDB API, ensuring that it remains up to date without the need for hardcoding. By utilizing the TMDB API, the website can dynamically retrieve and display information about movies, including details such as titles, release dates, genres, cast members, and more.',
    projectTech: ['JavaScript', 'HTML', 'Tailwind', 'CSS']
  },
  { id: 4,
    name: 'Hangman Game',
    linkDemo: 'https://lets-hangman.netlify.app/',
    linkCode: 'https://github.com/dilaracetinberk/hangman-game',
    img: p3,
    projectInfo: 'This project is a hangman game that utilizes an API to retrieve a random word. The game involves guessing the letters of the word by selecting from a set of letter buttons.  When the game starts, the application makes a request to the API to fetch a random word. This word is then used as the basis for the hangman game.',
    projectTech: ['JavaScript', 'HTML', 'CSS']
  },
  { id: 5,
    name: 'Meme Generator',
    linkDemo:
      'https://github.com/Recoded-Spark-Turkey-2022/meme-generator-las_jefas',
    linkCode:
      'https://github.com/Recoded-Spark-Turkey-2022/meme-generator-las_jefas',
    img: p4,
    projectInfo: 'The Meme Generator Website project is a React-based web application that allows users to create custom memes using the memeflip API. The website provides an intuitive and user-friendly interface for generating memes with customizable text and styling options. The website is fully responsive, ensuring optimal user experience across different devices.',
    projectTech: ['JavaScript', 'Tailwind', 'React']
  },
  { id: 6,
    name: 'Madlibs Game',
    linkDemo: 'https://madlipsgame.netlify.app/',
    linkCode: 'https://github.com/dilaracetinberk/madlibs-game',
    img: p5,
    projectInfo: 'This project is a Madlibs game app built using HTML, CSS, and JavaScript. The app provides an interactive and entertaining experience where users can create humorous and creative stories by filling in the blanks with their own words. When the user submits the form, JavaScript takes over to process the inputs and generate a Madlibs story. The app replaces the placeholders in the story template with the user\'s input, resulting in a unique and funny narrative. The completed story is then displayed to the user.',
    projectTech: ['JavaScript', 'HTML', 'CSS']
  },
  { id: 7,
    name: 'Portfolio Website',
    linkDemo: 'https://dc-portfolio-website.vercel.app/',
    linkCode: 'https://github.com/dilaracetinberk/my-portfolio-website',
    img: p6,
    projectInfo: 'My Portfolio Website is a personal website designed to showcase my skills, experience, and projects as a developer/designer. The website serves as a central hub for visitors to learn more about me, explore my work, and get in touch.',
    projectTech: ['JavaScript', 'React', 'Tailwind', 'CSS','Router']
  },
];
export default Projects;
