import {
  faCircleQuestion,
  faCircleUser,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ARoundedPurple } from '../Buttons/ARoundedPurple';
import { BlueLogo } from '../Header/BlueLogo';

const Header = () => (
  <nav className="relative top-0 z-50 box-border flex h-[3.5rem] w-screen justify-center">
    <div className="ml-3 grid h-[3.5rem] w-[75rem] max-w-[75rem] grid-cols-3 items-center align-middle">
      <div className="col-span-1">
        <BlueLogo />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex cursor-pointer items-center gap-2">
        <ARoundedPurple
          additionalClassName="h-[2.75rem] p-1"
          text="Buy Crypto"
        />
        <FontAwesomeIcon
          className={`h-6 w-6 rounded-full p-3 text-[#707388] hover:bg-purple/10`}
          icon={faCircleQuestion}
        />
        <FontAwesomeIcon
          className={`h-6 w-6 rounded-full p-3 text-[#707388] hover:bg-purple/10`}
          icon={faCircleUser}
        />
      </div>
    </div>
  </nav>
);

export default Header;
