import Header from './Header';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex w-full justify-center bg-bgcolor">
      <div className="fixed top-0 z-50 box-border border-b border-solid border-custom-grey">
        <Header />
        <MobileHeader />
        <Sidebar />
      </div>
      <div className="flex w-full justify-center">
        <div
          id="content"
          className="col-span-8 mt-[3.5rem] flex min-h-[calc(100vh-3.75rem)] w-full md:pl-42 xl:pl-[calc((100vw-1312px)/2+16.25rem+2rem+0rem)]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
