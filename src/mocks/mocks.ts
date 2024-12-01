import { Card } from '../interfaces/Card';
import { Contact } from '../interfaces/Contact';
import { Transaction } from '../interfaces/Transaction';

export const MYCARDS_API_DELAY = 0;
export const MYCARDS_FAILS = false;

export const cardsList: Card[] = [
  {
    cardholderName: 'Eddy Cusuma',
    cardNumber: '3778567890121234',
    balance: 5756,
    validDate: '12/20',
    theme: 'dark',
  },
  {
    cardholderName: 'Eddy Cusuma',
    cardNumber: '3778567890121234',
    balance: 5756,
    validDate: '12/20',
    theme: 'light',
  },
  // NOTE: addapted to show multiple cards. Uncomment to test:
  // {
  //   cardholderName: 'Eddy Cusuma',
  //   cardNumber: '3778567890121234',
  //   balance: 5756,
  //   validDate: '12/20',
  //   theme: 'dark',
  // },
  // {
  //   cardholderName: 'Eddy Cusuma',
  //   cardNumber: '3778567890121234',
  //   balance: 5756,
  //   validDate: '12/20',
  //   theme: 'light',
  // },
];

export const TRANSACTIONS_ARROWS = false;

export const transactions: Transaction[] = [
  {
    description: 'Deposit from my Card',
    date: '2021-01-28',
    amount: -850,
    method: 'card',
  },
  {
    description: 'Deposit PayPal',
    date: '2021-01-25',
    amount: 2500,
    method: 'paypal',
  },
  {
    description: 'Monthly Rent',
    date: '2021-01-21',
    amount: 5400,
    method: 'other',
  },
  // NOTE: addapted to show multiple cards. Uncomment to test:
  // {
  //   description: 'Deposit PayPal',
  //   date: '2021-01-25',
  //   amount: 2500,
  //   method: 'paypal',
  // },
  // {
  //   description: 'Monthly Rent',
  //   date: '2021-01-21',
  //   amount: 5400,
  //   method: 'other',
  // },
];

export const contactsList: Contact[] = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    profilePicture: 'https://i.pravatar.cc/100?img=1',
    selected: true,
  },
  {
    name: 'Randy Press',
    role: 'Director',
    profilePicture: 'https://i.pravatar.cc/100?img=5',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=10',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=8',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=7',
    selected: false,
  },
];
