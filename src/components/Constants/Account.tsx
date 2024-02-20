import {
  faCreditCardAlt,
  faFileLines,
} from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface AccountsInterface {
  label: String;
  link: any;
  icon: any;
  key: String;
}

const Accounts: AccountsInterface[] = [
  {
    label: 'Account',
    link: '/c/account-settings/account',
    icon: faGear,
    key: 'Account',
  },
  {
    label: 'Payment methods',
    link: '/c/account-settings/payment-buy',
    icon: faCreditCardAlt,
    key: 'Payment',
  },
  { label: 'Proof of reserves', link: '/', icon: faFileLines, key: 'Proof' },
];

export default Accounts;
