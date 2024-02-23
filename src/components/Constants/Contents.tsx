import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightArrowLeft,
  faHome,
  faPercent,
  // faPercent,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

interface ContentInterface {
  label: String;
  link: any;
  icon: any;
  key: String;
}

const Contents: ContentInterface[] = [
  { label: 'Home', link: '/c', icon: faHome, key: '' },
  { label: 'Explore', link: '/c/explore', icon: faSearch, key: 'explore' },
  { label: 'Rewards', link: '/c/rewards', icon: faPercent, key: 'rewards' },
  {
    label: 'Transfer',
    link: '/c/funding/deposit?asset=BTC',
    icon: faArrowRightArrowLeft,
    key: 'funding',
  },
  {
    label: 'Transactions',
    link: '/c/transactions/history',
    icon: faClock,
    key: 'transactions',
  },
];

export default Contents;
