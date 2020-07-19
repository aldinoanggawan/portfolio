import C19Stats from '../img/C19Stats.png'
import ExpenseTracker from '../img/ExpenseTracker.png'
import EzPark from '../img/EzPark.png'
import InstagramClone from '../img/InstagramClone.png'
import Jdecoration from '../img/Jdecoration.png'

export const skills = {
  1: {
    id: 1,
    image: InstagramClone,
    link: {
      github: 'https://github.com/aldinoanggawan/nextagram-2',
      sandbox: 'https://codesandbox.io/s/github/aldinoanggawan/nextagram-2',
      live: 'https://fakeig.netlify.app/',
    },
    tag: [
      {
        id: 1,
        text: 'React',
      },
      {
        id: 2,
        text: 'Redux',
      },
      {
        id: 3,
        text: 'PWA',
      },
      {
        id: 4,
        text: 'Flask',
      },
      {
        id: 5,
        text: 'PSQL',
      },
      {
        id: 6,
        text: 'REST API',
      },
      {
        id: 7,
        text: 'AWS S3',
      },
    ],
    text:
      'A web-app that allows user to post photos, comments and likes with their account, just like instagram.',
    title: 'Instagram Clone',
  },
  2: {
    id: 2,
    image: Jdecoration,
    link: {
      github: 'https://github.com/aldinoanggawan/j-decoration',
      sandbox: 'https://codesandbox.io/s/github/aldinoanggawan/j-decoration',
      live: 'https://jdecoration.netlify.app/',
    },
    tag: [
      {
        id: 1,
        text: 'React',
      },
      {
        id: 2,
        text: 'Redux',
      },
      {
        id: 3,
        text: 'Airtable',
      },
    ],
    text:
      'A personal web-app project for a decoration service that shows varieties of decoration packages. Airtable is being used to store the data so that the customer can edit it easily.',
    title: 'J Decoration',
  },
  3: {
    id: 3,
    image: ExpenseTracker,
    link: {
      github: 'https://github.com/aldinoanggawan/expense-tracker-redux',
      sandbox: 'https://codesandbox.io/s/github/aldinoanggawan/expense-tracker-redux',
      live: 'https://expense-tracker-redux.netlify.app/',
    },
    tag: [
      {
        id: 1,
        text: 'React',
      },
      {
        id: 2,
        text: 'Redux',
      },
      {
        id: 3,
        text: 'Flask',
      },
      {
        id: 4,
        text: 'PSQL',
      },
      {
        id: 5,
        text: 'REST API',
      },
      {
        id: 6,
        text: 'CRUD',
      },
    ],
    text:
      'A CRUD expense tracker web-app that shows transactions and calculates the balance based on the income / expense submitted.',
    title: 'Expense Tracker',
  },
  4: {
    id: 4,
    image: C19Stats,
    link: {
      github: 'https://github.com/aldinoanggawan/corona-check',
      sandbox: 'https://codesandbox.io/s/github/aldinoanggawan/corona-check',
      live: 'https://c19-stats.netlify.app/',
    },
    tag: [
      {
        id: 1,
        text: 'React',
      },
    ],
    text:
      'A simple React app that shows Covid-19 statistics around the world based on the country chosen.',
    title: 'C - 19 Stats',
  },
  5: {
    id: 5,
    image: EzPark,
    link: {
      github: 'https://github.com/aldinoanggawan/EzPark-react-app',
      sandbox: 'https://codesandbox.io/s/github/aldinoanggawan/EzPark-react-app',
      live: 'https://ezpark-malledition.netlify.app/',
    },
    tag: [
      {
        id: 1,
        text: 'React',
      },
      {
        id: 2,
        text: 'Flask',
      },
      {
        id: 3,
        text: 'PSQL',
      },
      {
        id: 4,
        text: 'REST API',
      },
      {
        id: 5,
        text: 'CRUD',
      },
      {
        id: 6,
        text: 'Raspberry Pi',
      },
    ],
    text:
      'A bootcamp group final project of parking simulation web-app that shows available parking spots, gives directions and save the parking chosen as history. The web-app is connected to a Raspberry Pi to keep track of the parking spots.',
    title: 'EzPark',
  },
}
