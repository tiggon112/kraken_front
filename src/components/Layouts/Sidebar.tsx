import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Contents from '../Constants/Contents';

const Sidebar = () => {
  const pathname = usePathname();
  const current = pathname?.split('/')[2];

  return (
    <nav className="absolute hidden w-36 translate-x-0 transition-transform duration-300 ease-in-out md:block xl:left-[calc((100vw-1248px)/2)] xl:w-65">
      <div className="z-40 box-border flex h-screen w-full flex-col border-r border-custom-grey pt-8">
        <menu className="flex flex-col items-center gap-y-4 xl:items-start">
          {Contents?.map((item, i) => {
            const isActive = current === item.key.toLowerCase();
            return (
              <li
                className="box-border w-full list-none text-ellipsis whitespace-nowrap text-purple"
                key={i}
              >
                <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] font-semibold">
                  <Link
                    href={item.link}
                    className={`${
                      isActive ? 'text-purple' : 'text-[#707388]'
                    } relative flex flex-col items-center justify-start gap-x-3 gap-y-1 overflow-visible text-wrap rounded-full px-3 py-2 text-center duration-300 hover:text-purple xl:w-[60%] xl:flex-row  xl:gap-y-2 hover:xl:w-[90%] hover:xl:bg-white hover:xl:shadow-md`}
                  >
                    <FontAwesomeIcon className={`h-6 w-6 `} icon={item.icon} />
                    {item.label}
                  </Link>
                </span>
              </li>
            );
          })}
        </menu>
      </div>
    </nav>
  );
};

export default Sidebar;
