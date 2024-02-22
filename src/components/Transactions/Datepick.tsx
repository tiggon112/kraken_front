import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Datepicker, Flowbite } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

type RoundedAProps = {
  label?: string;
};

export default function Datepick(props: RoundedAProps) {
  const [hide, setHide] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

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

  const customTheme: CustomFlowbiteTheme = {
    datepicker: {
      popup: {
        root: {
          base: 'absolute top-10 z-50 block pt-2',
          inline: 'relative top-0 z-auto',
          inner:
            'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
        },
        header: {
          base: '',
          title:
            'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
          selectors: {
            base: 'flex justify-between mb-2',
            button: {
              base: 'text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
              prev: '',
              next: '',
              view: '',
            },
          },
        },
        view: {
          base: 'p-1',
        },
        footer: {
          base: 'flex mt-2 space-x-2 hidden',
          button: {
            base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300',
            today:
              'bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700',
            clear:
              'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
          },
        },
      },
      views: {
        days: {
          header: {
            base: 'grid grid-cols-7 mb-1',
            title:
              'dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400',
          },
          items: {
            base: 'grid w-64 grid-cols-7',
            item: {
              base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ',
              selected: 'bg-violet-200 text-purple hover:bg-violet-300',
              disabled: 'text-gray-500',
            },
          },
        },
        months: {
          items: {
            base: 'grid w-64 grid-cols-4',
            item: {
              base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
              selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
              disabled: 'text-gray-500',
            },
          },
        },
        years: {
          items: {
            base: 'grid w-64 grid-cols-4',
            item: {
              base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
              selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
              disabled: 'text-gray-500',
            },
          },
        },
        decades: {
          items: {
            base: 'grid w-64 grid-cols-4',
            item: {
              base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
              selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
              disabled: 'text-gray-500',
            },
          },
        },
      },
    },
  };

  return (
    <div ref={ref} className="relative">
      <button
        className=" realtive border-1 inline-flex w-full items-center gap-1 text-nowrap rounded-md bg-stone-100 px-2 py-1 text-sm font-medium text-stone-500 hover:bg-stone-200 hover:text-stone-800  focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 md:gap-2 md:px-4 md:py-2"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <span>{props.label}</span>
        {hide ? (
          <ChevronDownIcon
            className="h-4 w-4 md:h-6 md:w-6"
            aria-hidden="true"
          />
        ) : (
          <ChevronUpIcon className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
        )}
      </button>
      <div className={`${hide ? 'hidden' : 'block'} absolute right-0`}>
        <Flowbite theme={{ theme: customTheme }}>
          <Datepicker inline className=" text-red-700" />
        </Flowbite>
      </div>
    </div>
  );
}
