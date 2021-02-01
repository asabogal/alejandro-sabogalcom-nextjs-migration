import cryptoHome from '../Images/project_images/cryptofolio/home.png';
import intervalHome from '../Images/project_images/interval/home.png';
import recordboxHome from '../Images/project_images/recordbox/home.png';
import uefaHome from '../Images/project_images/uefa/home.png';
import djchartsHome from '../Images/project_images/djcharts/home.png';

import cryptoFeatured from '../Images/project_images/cryptofolio/featured.png';
import intervalFeatured from '../Images/project_images/interval/featured.png';
import recordboxFeatured from '../Images/project_images/recordbox/featured.png';
import uefaFeatured from '../Images/project_images/uefa/featured.png';
import djchartsFeatured from '../Images/project_images/djcharts/featured.png';

import cryptoDevices from '../Images/project_images/cryptofolio/devices.png';
import recordboxDevices from '../Images/project_images/recordbox/devices.png';
import intervalDevices from '../Images/project_images/interval/devices.png';
import uefaDevices from '../Images/project_images/uefa/devices.png';
import djchartsDevices from '../Images/project_images/djcharts/devices.png';

export const projectData = [
  {
    id: 1,
    year: 2018,
    name: 'DJ Charts',
    heading: 'Your favorite music records shared with the DJ Charts App',
    description: 'Designed for DJs, this is CRUD (Create, Read, Update and Delete) web app helps authenticated users display and share their top 10 monthly charts. Visitors do not need to be logged in to view the chart and record database, however, a user must be logged in and authenticated in order to edit and/or delete his/her chart/records.',
    stack: ['Sinatra', 'Ruby', 'HTML', 'CSS'],
    tools: ['Sqlite3', 'ActiveRecord', 'Bcrypt'],
    repoLink: 'https://github.com/asabogal/dj-charts-sinatra-app',
    url: 'https://www.youtube.com/watch?v=nwtz3w8ToMg',
    path:'djcharts',
    images: {
      home: djchartsHome,
      featured: djchartsFeatured,
      devices: djchartsDevices
    }
  },
  {
    id: 2,
    year: 2018,
    name: 'UEFA-Schedules',
    heading: 'Follow your team and never miss a match with UEFA Schedules',
    description: 'Designed with speed and practicality in mind, this API fetches previous, future, and up-to-the-minute European soccer league data from external sources, and serialized through Rails service objects. Data is rendered to users via JavaScript/AJAX.',
    stack: ['JavaScript', 'Ruby on Rails API'],
    tools: ['JQuery', 'Bootstrap','Postman', 'Postgres', 'Faraday', 'Heroku'],
    repoLink: "https://github.com/asabogal/UEFA-schedules",
    url: 'http://www.uefa-schedules.com',
    path: 'uefa-schedules',
    images: {
      home: uefaHome,
      featured: uefaFeatured,
      devices: uefaDevices
    }

  },
  {
    id: 3,
    year: 2018,
    name: 'Recordbox Reviews',
    heading: 'Music is to be shared! Organize it and share it with Recordbox Reviews',
    description: 'Rails Full Stack application, uses MVC design patterns and RESTful architecture to help authenticated users keep track of their vinyl record collection.',
    stack: ['Ruby on Rails'],
    tools: ['Bootstrap', 'CCS Grid', 'Bcrypt', 'Facebook SDK', 'Google Cloud', 'Postgres', 'Heroku'],
    repoLink: "https://github.com/asabogal/recordbox-reviews",
    url: 'http://www.recordbox-reviews.com',
    path: 'recordbox-reviews',
    images: {
      home: recordboxHome,
      featured: recordboxFeatured,
      devices: recordboxDevices
    }
  },
  {
    id: 4,
    year: 2019,
    name: 'Interval Training Timer',
    heading: 'Keep active and stay fit with the Interval Training Timer app',
    description: 'Mobile ready app for on-the-go, high intensity workouts. A companion training timer with customizable workout database presets. User interaction with Redux state management.',
    stack: ['React', 'Ruby on Rails API'],
    tools: ['Redux', 'Redux Thunk', 'Reactstrap', 'Postgres', 'Heroku'],
    repoLink: "https://github.com/asabogal/interval-training-timer",
    url: 'http://www.interval-training-timer.com',
    path: 'interval-training-timer',
    images: {
      home: intervalHome,
      featured: intervalFeatured,
      devices: intervalDevices
    }
  },
  {
    id: 5,
    year: 2019,
    name: 'Cryptofolio Tracker',
    heading: 'Track your favorite crypto-coins with the Cryptofolio Tracker',
    description: 'User authenticated, cryptocurrency portfolio manager. Fetches real-time and historical data using async/await and back-end serializers. User friendly experience with Styled Components. State management through React Context API.',
    stack: ['React', 'JavaScript', 'Ruby on Rails API'],
    tools: ['React Context', 'Styled Components', 'React High Charts', 'Postgres', 'Bcrypt', 'CryptoCompare API', 'Heroku'],
    repoLink: 'https://github.com/asabogal/cryptofolio-production',
    url: 'http://www.cryptofolio-tracker.com',
    path: 'cryptofolio',
    images: {
      home: cryptoHome,
      featured: cryptoFeatured,
      devices: cryptoDevices
    }
  }
]
