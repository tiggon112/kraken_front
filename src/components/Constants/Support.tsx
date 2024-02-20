import { faLifeRing, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

interface SupportInterface {
  label: String;
  link: any;
  icon: any;
  key: String;
}

const Support: SupportInterface[] = [
  { label: 'Visit kraken support', link: '/', icon: faLifeRing, key: 'Visit' },
  { label: 'Share feedback', link: '/', icon: faPaperPlane, key: 'Share' },
];

export default Support;
