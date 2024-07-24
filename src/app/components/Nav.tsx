"use client";

import Link from 'next/link';
import Image from 'next/image'
import { CiMenuBurger } from 'react-icons/ci';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, SunIcon, MoonIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useScroll from '../hooks/useScroll';
import logo from '../logo.png';


const navigation = [
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Achievements', href: '#achievements', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
function Nav() {
    const mainItems = navigation.slice(0, 3);
  const moreItems = navigation.slice(3);
  const scrollY = useScroll();

    return (
    
    <Disclosure as="nav" className={classNames(scrollY > 300 ? 'bg-gray-800' : 'bg-transparent ', 'fixed lg:absolute w-[100vw]')}>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 bg-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <a href="/" className=" text-blue-400 font-[Times] text-lg">
            <Image
              src={logo}
              className='h-10 w-10'
              alt="Udit"
            />
    </a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
              <button>{true ? <MoonIcon /> : <SunIcon />}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-700 hover:text-gray-800',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
    );
    }

export default Nav;
