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


export const freelanceData = [
  {
    id: 1,
    year: 2020,
    name: 'The Gallery Hotel',
    heading: 'Gallery Hotel Website',
    description: "The Gallery is a stylish boutique hotel in Greenport, NY. I designed a brand new site from scratch, moving from an antiquated, templated version, to a more modern design, giving the site a reflection and feel of the hotel’s esthetic. Additionally, I created a guest and visitor database through Google's Firebase integration.",
    role: "React/Next.js Developer, UX/UI Designer",
    stack: ['React', 'Next.js', 'Styled-Components', 'Google Cloud Platform', 'Google Firebase'],
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
    employerUrl: null,
    url: 'https://kontiki-gp.com/',
    path:'kontiki',
    images: {
      featured: ktFeatured,
      carousel: [ktC1, ktC2, ktC3, ktC4, ktC5, ktC6, ktC7, ktC8],
    }
  },
]