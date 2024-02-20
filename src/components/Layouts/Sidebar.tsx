import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Contents from './Contents';

const Sidebar = () => {
  const pathname = usePathname();
  const current = pathname.split('/')[2];

  return (
    <nav className="absolute w-65 translate-x-0 transition-transform duration-300 ease-in-out xl:left-[calc((100vw-1248px)/2)]">
      <div className="z-40 box-border flex h-screen w-full flex-col border-r border-custom-grey pt-8">
        <menu>
          {Contents?.map((item, i) => {
            const isActive = current === item.key.toLowerCase();
            return (
              <li
                className="box-border list-none text-ellipsis whitespace-nowrap text-purple"
                key={i}
              >
                <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] font-semibold">
                  <Link
                    href={item.link}
                    className={`${
                      isActive ? 'text-purple' : 'text-[#707388]'
                    } relative mx-[1.125rem] my-1 flex h-[3rem] w-[60%] items-center justify-items-start gap-2 gap-y-3 overflow-visible text-wrap rounded-full px-3 text-center  duration-300 hover:w-[90%] hover:bg-white hover:shadow-md`}
                  >
                    <FontAwesomeIcon className={`h-6 w-6`} icon={item.icon} />
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
