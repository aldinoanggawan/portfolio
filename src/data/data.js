import ExpenseTracker from '../img/ExpenseTracker.png'
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
      live: '',
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
}
