// gallery hotel
import ghFeatured from '../public/images/freelance_images/gallery-hotel/featured.jpg';
import ghC1 from '../public/images/freelance_images/gallery-hotel/1_c.png';
import ghC2 from '../public/images/freelance_images/gallery-hotel/2_c.png';
import ghC3 from '../public/images/freelance_images/gallery-hotel/3_c.png';
import ghC4 from '../public/images/freelance_images/gallery-hotel/4_c.png';
import ghC5 from '../public/images/freelance_images/gallery-hotel/5_c.png';
import ghC6 from '../public/images/freelance_images/gallery-hotel/6_c.png';
import ghC7 from '../public/images/freelance_images/gallery-hotel/7_c.png';
import ghC8 from '../public/images/freelance_images/gallery-hotel/8_c.png';
// kon tiki
import ktFeatured from '../public/images/freelance_images/kontiki/featured.jpg';
import ktC1 from '../public/images/freelance_images/kontiki/1_c.jpg';
import ktC2 from '../public/images/freelance_images/kontiki/2_c.jpg';
import ktC3 from '../public/images/freelance_images/kontiki/3_c.jpg';
import ktC4 from '../public/images/freelance_images/kontiki/4_c.jpg';
import ktC5 from '../public/images/freelance_images/kontiki/5_c.jpg';
import ktC6 from '../public/images/freelance_images/kontiki/6_c.jpg';
import ktC7 from '../public/images/freelance_images/kontiki/7_c.jpg';
import ktC8 from '../public/images/freelance_images/kontiki/8_c.jpg';
// antibody club
import acFeatured from '../public/images/freelance_images/antibody/featured.jpg';
import acC1 from '../public/images/freelance_images/antibody/1_c.jpg';
import acC2 from '../public/images/freelance_images/antibody/2_c.jpg';
import acC3 from '../public/images/freelance_images/antibody/3_c.jpg';
import acC4 from '../public/images/freelance_images/antibody/4_c.jpg';
import acC5 from '../public/images/freelance_images/antibody/5_c.jpg';
import acC6 from '../public/images/freelance_images/antibody/6_c.jpg';
import acC7 from '../public/images/freelance_images/antibody/7_c.jpg';
import acC8 from '../public/images/freelance_images/antibody/8_c.jpg';
// off grid
import ogFeatured from '../public/images/freelance_images/offgrid/featured.jpg';
import ogC1 from '../public/images/freelance_images/offgrid/1_c.jpg';
import ogC2 from '../public/images/freelance_images/offgrid/2_c.jpg';
import ogC3 from '../public/images/freelance_images/offgrid/3_c.jpg';
import ogC4 from '../public/images/freelance_images/offgrid/4_c.jpg';
import ogC5 from '../public/images/freelance_images/offgrid/5_c.jpg';
import ogC6 from '../public/images/freelance_images/offgrid/6_c.jpg';
import ogC7 from '../public/images/freelance_images/offgrid/7_c.jpg';
import ogC8 from '../public/images/freelance_images/offgrid/8_c.jpg';


export const freelanceData = [
  {
    id: 1,
    year: 2019,
    name: 'The Gallery Hotel',
    heading: 'Gallery Hotel Website',
    description: "The Gallery is a stylish boutique hotel in Greenport, NY. I designed a brand new site from scratch, moving from an antiquated, templated version, to a more modern design, giving the site a reflection and feel of the hotel’s esthetic. Additionally, I created a guest and visitor database through Google's Firebase integration.",
    role: "React/Next.js Developer, UX/UI Designer",
    stack: ['React', 'Next.js', 'Styled-Components', 'Google Cloud Platform', 'Google Firebase'],
    employer: null,
    employerUrl: null,
    url: 'https://galleryhotelny.com/',
    path:'galleryhotel',
    images: {
      featured: ghFeatured,
      carousel: [ghC1, ghC2, ghC3, ghC4, ghC5, ghC6, ghC7, ghC8],
    }
  },
  {
    id: 2,
    year: 2020,
    name: 'Kon-Tiki',
    heading: 'Kon-Tiki App and Site',
    description: "Kon-Tiki is a one of a kind restaurant and bar in Greenport, NY. They asked for a simple, mobile friendly website that was custom made to their needs. My approach to this design was mobile-first and minimalistic. The core of this project however, lies on the back end Admin Dashboard App. They needed an Admin control center to manage their guest reservations and menus. For this, I created an Express server and utilized MongoDB to manage the Admin authentication, the guest reservations system, and menu databases.",
    role: "React/Next.js and Node Developer",
    stack: ['Next.js', 'React', 'Styled-Components', 'Node/Express', 'MongoDB'],
    employer: null,
    employerUrl: null,
    url: 'https://kontiki-gp.com/',
    path:'kontiki',
    images: {
      featured: ktFeatured,
      carousel: [ktC1, ktC2, ktC3, ktC4, ktC5, ktC6, ktC7, ktC8],
    }
  },
  {
    id: 3,
    year: 2020,
    name: 'Antib0dy Club',
    heading: 'Antib0dy Club',
    description: "As a venue and public space, Antibody Club exists to support local organizations through art and music in a 3D environment. As their single React Developer, I was brought in to code the App's onboarding microsite, translating designs into life, and adding custom navigation and animation functionality. I also integrated a user authentication system, and back end Api communication features with the use of custom coded React Hooks.",
    role: "React Developer, Front End Developer",
    stack: ['React', 'React Router', 'Styled-Components', 'Axios'],
    employer: "The Umbrella",
    employerUrl: "https://www.theumbrella.nyc/",
    url: 'https://antib0dy.club/',
    path:'antibodyclub',
    images: {
      featured: acFeatured,
      carousel: [acC1, acC2, acC3, acC4, acC5, acC6, acC7, acC8],
    }
  },
  {
    id: 4,
    year: 2020,
    name: 'OffGrid',
    heading: 'OffGrid',
    description: "OffGrid offers online communications through 3D environments and chat rooms. As their single React Developer, I was brought in to code the App's onboarding microsite, translating designs into life, and adding custom functionality. I integrated a user authentication system, with Auth0 and back end Api communication features with the use of custom coded React Hooks.",
    role: "React Developer, Front End Developer",
    stack: ['React', 'React Router', 'Styled-Components', 'Axios', 'Auth0', 'Goolge SDK', 'Facebook SDK'],
    employer: "The Umbrella",
    employerUrl: "https://www.theumbrella.nyc/",
    url: 'https://alejandro-sabogal.com/portfolio/offgrid',
    path:'offgrid',
    images: {
      featured: ogFeatured,
      carousel: [ogC1, ogC2, ogC3, ogC4, ogC5, ogC6, ogC7, ogC8],
    }
  },
]