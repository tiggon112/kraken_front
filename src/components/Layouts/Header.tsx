import { ARoundedPurple } from '../Buttons/ARoundedPurple';
import { IconButton } from '../Buttons/IconButton';
import { BlueLogo } from '../Header/BlueLogo';
import { Help } from '../SVG/Help';

const Header = () => (
  <nav className="relative top-0 z-50 box-border flex h-[3.5rem] w-screen justify-center">
    <div className="ml-3 grid h-[3.5rem] w-[75rem] max-w-[75rem] grid-cols-3 items-center align-middle">
      <div className="col-span-1">
        <BlueLogo />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex items-center gap-2">
        <ARoundedPurple
          additionalClassName="h-[2.75rem] p-1"
          text="Buy Crypto"
        />
        <IconButton icon={<Help />} text={''} />
        <span>icon</span>
        <span>icon</span>
      </div>
    </div>
  </nav>
);

export default Header;
