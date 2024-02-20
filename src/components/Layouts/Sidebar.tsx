import Link from 'next/link';

const Sidebar = () => (
  <nav className="absolute w-65 translate-x-0 transition-transform duration-300 ease-in-out xl:left-[calc((100vw-1248px)/2)]">
    <div className="z-40 box-border flex h-screen w-full flex-col border-r border-custom-grey pt-8">
      <menu>
        <li className="box-border list-none text-ellipsis whitespace-nowrap text-purple">
          <span className="font-[IBM Plex Sans,Helvetica,Arial,sans-serif] font-semibold">
            <Link
              href="/c"
              className="relative mx-[1.125rem] my-1 flex h-[3rem] items-center justify-items-start gap-y-3 overflow-visible text-wrap rounded-full px-3 text-center"
            >
              <svg
                width="40px"
                height="40px"
                className="svg-icon Sidebar_sidebarMenuItemIcon__e120v Sidebar_sidebarMenuItemIcon_primary__xBD5K"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 12.5021C2 11.485 2.44458 10.5272 3.2 9.91697L12.2 2.64628C13.2667 1.78457 14.7333 1.78457 15.8 2.64628L24.8 9.91697C25.5554 10.5272 26 11.485 26 12.5021V22.7686C26 24.5532 24.6569 26 23 26H17V19.5372C17 17.7525 15.6569 16.3057 14 16.3057C12.3431 16.3057 11 17.7525 11 19.5372V26H5C3.34315 26 2 24.5532 2 22.7686V12.5021Z"></path>
              </svg>
              {'Home'}
            </Link>
          </span>
        </li>
      </menu>
    </div>
  </nav>
);

export default Sidebar;
