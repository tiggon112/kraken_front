import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ARoundedPurple } from '../Buttons/ARoundedPurple';
import Account from '../Constants/Account';
import Contents from '../Constants/Contents';
import Support from '../Constants/Support';

const MobileHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState(true);
  const pathname = usePathname();
  const current = pathname?.split('/')[2];

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (ref.current) {
        if (!ref.current.contains(event.target)) {
          setHide(true);
        }
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className="relative z-50 font-normal text-[#707388]">
      <nav className="relative top-0 z-40 box-border flex h-[3rem] w-screen justify-between bg-white p-2 md:hidden">
        <FontAwesomeIcon
          className={`h-6 w-6 cursor-pointer p-1 text-[#707388]`}
          icon={faBars}
          onClick={() => {
            setHide(false);
          }}
        />
        <svg
          height="33"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[35px] transition-transform duration-200 ease-out hover:scale-105"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.45752 15.9178V21.2878C0.45752 22.2766 1.24721 23.0768 2.21829 23.0768C3.1904 23.0768 3.98384 22.2766 3.98384 21.2878V15.9178C3.98384 14.9275 4.76944 14.1259 5.74564 14.1259C6.71843 14.1259 7.50744 14.9275 7.50744 15.9178V21.2878C7.50744 22.2766 8.29712 23.0768 9.26923 23.0768C10.2448 23.0768 11.0341 22.2766 11.0341 21.2878V15.9178C11.0341 14.9275 11.8231 14.1259 12.7956 14.1259C13.7721 14.1259 14.5618 14.9275 14.5618 15.9178V21.2878C14.5618 22.2766 15.3511 23.0768 16.3222 23.0768C17.2943 23.0768 18.084 22.2766 18.084 21.2878V15.9178C18.084 14.9275 18.8734 14.1259 19.8496 14.1259C20.822 14.1259 21.6114 14.9275 21.6114 15.9178V21.2878C21.6114 22.2766 22.401 23.0768 23.3759 23.0768C24.3483 23.0768 25.1377 22.2766 25.1377 21.2878V15.9178C25.1377 8.99655 19.6116 3.38452 12.7956 3.38452C5.97988 3.38452 0.45752 8.99655 0.45752 15.9178Z"
            fill="#5848D5"
          ></path>
        </svg>
        <div></div>
      </nav>
      <div
        className={`fixed top-0 z-50 h-full w-full duration-500 ${
          hide ? 'left-[-4099px]' : 'left-0'
        }`}
      >
        <div
          className={`h-screen w-65 bg-white p-5 shadow-md duration-500 ${
            hide ? '-left-65' : 'left-0'
          }`}
          ref={ref}
        >
          <div className="flex w-full justify-between">
            <svg
              height="30"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[30px] transition-transform duration-200 ease-out hover:scale-105"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.45752 15.9178V21.2878C0.45752 22.2766 1.24721 23.0768 2.21829 23.0768C3.1904 23.0768 3.98384 22.2766 3.98384 21.2878V15.9178C3.98384 14.9275 4.76944 14.1259 5.74564 14.1259C6.71843 14.1259 7.50744 14.9275 7.50744 15.9178V21.2878C7.50744 22.2766 8.29712 23.0768 9.26923 23.0768C10.2448 23.0768 11.0341 22.2766 11.0341 21.2878V15.9178C11.0341 14.9275 11.8231 14.1259 12.7956 14.1259C13.7721 14.1259 14.5618 14.9275 14.5618 15.9178V21.2878C14.5618 22.2766 15.3511 23.0768 16.3222 23.0768C17.2943 23.0768 18.084 22.2766 18.084 21.2878V15.9178C18.084 14.9275 18.8734 14.1259 19.8496 14.1259C20.822 14.1259 21.6114 14.9275 21.6114 15.9178V21.2878C21.6114 22.2766 22.401 23.0768 23.3759 23.0768C24.3483 23.0768 25.1377 22.2766 25.1377 21.2878V15.9178C25.1377 8.99655 19.6116 3.38452 12.7956 3.38452C5.97988 3.38452 0.45752 8.99655 0.45752 15.9178Z"
                fill="#5848D5"
              ></path>
            </svg>
            <FontAwesomeIcon
              className={`h-5 w-5 cursor-pointer rounded-full bg-grey/10 p-2 text-[#707388]`}
              icon={faXmark}
              onClick={() => {
                setHide(true);
              }}
            />
          </div>
          <div className="flex flex-col gap-4 divide-y-2 divide-grey/50">
            <div>
              <div className="flex flex-col gap-3 pt-2">
                {Contents?.map((item, i) => {
                  const isActive = current === item.key.toLowerCase();
                  return (
                    <li
                      className="box-border list-none text-ellipsis whitespace-nowrap text-purple"
                      key={i}
                    >
                      <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] ">
                        <Link
                          href={item.link}
                          className={`${
                            isActive ? 'text-purple' : 'text-black'
                          } relative my-1 flex flex-row  items-center justify-start gap-x-3 gap-y-2 overflow-visible text-wrap rounded-full  text-center duration-300  hover:bg-white hover:text-purple`}
                        >
                          <FontAwesomeIcon
                            className={`h-5 w-5 text-purple`}
                            icon={item.icon}
                          />
                          {item.label}
                        </Link>
                      </span>
                    </li>
                  );
                })}
              </div>
              <div className="mt-3">
                <ARoundedPurple className="p-2" text="Buy Crypto" />
              </div>
            </div>
            <div className="pt-2">
              <span className="text-sm">Account</span>
              <div className="flex flex-col gap-3 pt-2">
                {Account?.map((item, i) => {
                  const isActive = current === item.key.toLowerCase();
                  return (
                    <li
                      className="box-border list-none text-ellipsis whitespace-nowrap text-purple"
                      key={i}
                    >
                      <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] ">
                        <Link
                          href={item.link}
                          className={`${
                            isActive ? 'text-purple' : 'text-black'
                          } relative my-1 flex flex-row  items-center justify-start gap-x-3 gap-y-2 overflow-visible text-wrap rounded-full  text-center duration-300  hover:bg-white hover:text-purple`}
                        >
                          <FontAwesomeIcon
                            className={`h-5 w-5 text-purple`}
                            icon={item.icon}
                          />
                          {item.label}
                        </Link>
                      </span>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="pt-2">
              <span className="text-sm">Support</span>
              <div className="flex flex-col gap-3 pt-2">
                {Support?.map((item, i) => {
                  const isActive = current === item.key.toLowerCase();
                  return (
                    <li
                      className="box-border list-none text-ellipsis whitespace-nowrap text-purple"
                      key={i}
                    >
                      <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] ">
                        <Link
                          href={item.link}
                          className={`${
                            isActive ? 'text-purple' : 'text-black'
                          } relative my-1 flex flex-row  items-center justify-start gap-x-3 gap-y-2 overflow-visible text-wrap rounded-full  text-center duration-300  hover:bg-white hover:text-purple`}
                        >
                          <FontAwesomeIcon
                            className={`h-5 w-5 text-purple`}
                            icon={item.icon}
                          />
                          {item.label}
                        </Link>
                      </span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
