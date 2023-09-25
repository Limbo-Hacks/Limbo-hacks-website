import ccad_logo from './Assets/ccad-logo.jpeg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import davidson from './Assets/sponsorsLogos/davidson.jpg';
import forest from './Assets/sponsorsLogos/forest-systems.png';
import git from './Assets/sponsorsLogos/github.png';
import hurthub from './Assets/sponsorsLogos/hurthub.jpg';
import launch from './Assets/sponsorsLogos/launch.png';
import mlh from './Assets/sponsorsLogos/mlhlogo.png';
import proctorfree from './Assets/sponsorsLogos/proctorfree.jpeg';
import quoin from './Assets/sponsorsLogos/quoin.png';
import techdom from './Assets/sponsorsLogos/radixlogo.png';
import stack from './Assets/sponsorsLogos/stackoverflow.png';
import niya from './Assets/teami/Niya.jpg';
import sky from './Assets/teami/Sky.jpg';
import alp from './Assets/teami/alp.jpg';
import lorraine from './Assets/teami/lorraine.jpg';
import sunny from './Assets/teami/sunny.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Hack@Davidson',
  Typed_effect: [
    'Over 2,000 worth of prizes',
    '48 hours of creation',
    'No coding needed'
  ],
  SHORT_DESCRIPTION:
    'Join us between February 2nd-4th 2024 for 48 hours of creation, innovation, & fun!',
  IMG_SRC: boy,
  DISCORD_LINK: 'https://discord.gg/jStqwW4Ys8',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSeiZrFXX8HXdHiJmbFfq30vrAYCNkGTZi_WznwryH0YF1EnNQ/viewform?usp=sf_link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/hack_davidson/',
  discord: 'https://discord.gg/jStqwW4Ys8',
  linkedin: 'https://www.linkedin.com/company/hackatdavidson/',
  devpost: 'https://hackdavidson.devpost.com/',
  email: 'mailto:hack@davidson.edu',
  SPONSOR_US_EMAIL:
    'https://drive.google.com/file/d/1b0bCTHFRiKwNLjBHwaJfDBuNe6Grds3-/view?ts=65109f35',
  mail: 'hack@davidson.edu'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hack @ Davidson?',
  LONG_DESCRIPTION:
    'Hack@Davidson is the first student-run, non-profit hackathon at Davidson College organized by the Hack@Davidson club (formerly Competitive Coding at Davidson (C-CAD)). We are excited to host Hack@Davidson in the Davidson area to connect hackers, mentors, and sponsors from all around the globe. In the span of 48 hours, the best and brightest students from the NC area will create, code, and collaborate to build the projects of their dreams. We want you to be a part of this incredible experience!',
  LOGO: ccad_logo
};

const FOOTER = {
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best Finance Hack',
      content:
        'Build or pitch a finance project you are passionate about. We will provide you with real financial data you could implement into your solution! (Only for Undergraduate Students)(Sponsored by FinSiteful and Forest Systems)'
    },
    {
      icon: <i className=" second fas fa-4x fa-trophy"></i>,
      type: 'Best No-Code Hack',
      content:
        'At a hackathon and not a coder? No sweat! Show us you know how to build a product by designing a hypothetical product or service and show us your product market fit.'
    },
    {
      icon: <i className=" third fas fa-4x fa-trophy"></i>,
      type: 'Best Use Of AI/Machine Learning',
      content:
        'AI is taking over the world! Show us how ChatGPT3 or any another public AI model can do be utilized or use your own models to amaze us!!'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fas fa-4x fa-trophy"></i>,
      type: 'Best Tech for Good',
      content:
        'Build a project that takes into account cultural, societal, and human factors that will shape its use. Projects could include those that use technology to address social issues, improve accessibility, or promote empathy and understanding among different groups.'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best First Time',
      content:
        'Is this your first time competing in a hackathon? Well, this category is for you! To qualify, Hack@Davidson should be the first hackathon of everyone in your team.'
    },
    {
      icon: <i className=" fifth fas fa-4x fa-trophy"></i>,
      type: 'Most Unique',
      content: 'Build any project that is out of the box, and just different!'
    }
  ]
  // [
  //   //Array 3
  //   {
  //     icon: <i className="fas fa-4x fa-trophy"></i>,
  //     type: 'TBD',
  //     content: ''
  //   },
  //   {
  //     icon: <i className="fas fas fa-4x fa-trophy "></i>,
  //     type: 'More prizes',
  //     content: 'More prizes will be revealed later'
  //   }
  // ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Niya',
      role: 'President  ',
      github: 'https://github.com/niya-ma-1/',
      linkedin: 'https://www.linkedin.com/in/niya-ma/',
      img: niya
    },
    {
      name: 'Emilio',
      role: 'Treasurer  ',
      github: '',
      linkedin: '',
      img: ''
    },
    {
      name: 'Olsen',
      role: 'Founder & Advisor  ',
      github: 'https://github.com/olsenbudanur',
      linkedin: 'https://www.linkedin.com/in/olsenbudanur/',
      img: 'https://i.imgur.com/3zoARcK.png'
    }
  ],
  [
    //Array 2
    {
      name: 'Sunny',
      role: 'Marketing Lead  ',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sunny-baek-62bbb925b/',
      img: sunny
    },
    {
      name: 'Sky',
      role: 'Sponsorship Lead  ',
      github: 'https://github.com/skyyylaw',
      linkedin: 'https://linkedin.com/in/skyluo24',
      img: sky
    },
    {
      name: 'Lorraine',
      role: 'Logistics Lead  ',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lorraine-xu-87a755243/',
      img: lorraine
    },
    {
      name: 'Alp',
      role: 'Web Designer  ',
      github: 'https://github.com/alpnix',
      linkedin: 'https://linkedin.com/in/alpniksarli/',
      img: alp
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: forest}, {src: hurthub}, {src: proctorfree}], //Array 1
  [{src: davidson}, {src: launch}, {src: quoin}], //Array 2
  [{src: mlh}, {src: stack}, {src: techdom}], //Array 3
  [{src: git}]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'Do I have to know how to program/code?',
        content:
          'No!! Hack@Davidson welcomes people from all background to compete in our no-code categories where no code is requited, or even allowed!'
      },
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is event where "hackers" will collaborate on creating a functioning software and hardware or coming up with a bright idea by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content: 'Hack@Davidson is open to everyone!'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (hack@davidson.edu or nima@davidson.edu) we would happy to help you.'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! Participants will recieveing Hack@Davidson swag (T-shirts, stickers, etc.!).'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 3 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ]
  ]
];

export {
  FOOTER,
  MIDDLE_SECTION,
  Prizeinfo,
  SOCIALS,
  TOP_SECTION,
  TeamInfo,
  calenderStartingDate,
  frequentlyAskedQuestions,
  schedule,
  sponsorLogos
};
