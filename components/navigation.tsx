'use client'
import Link from 'next/link'
import Image from "next/image"
import { useState } from 'react'

import logo from '@/public/logo.png'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline'

const headerMenu = [
  {
    name: 'Option 1',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
  {
    name: 'Option 2',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
  {
    name: 'Option 3',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
  {
    name: 'Option 4',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
  {
    name: 'Option 5',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
  {
    name: 'Option 6',
    description: 'Description about this option...',
    href: '/option',
    icon: PaperClipIcon,
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Colonial Press LLC</span>
            <Image
              alt="Colonial Press Logo"
              src={logo}
              style={{
                width: 'auto',
                height: '12',
              }}
              objectFit="contain" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* MEGA MENU */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" aria-label="Home" className="text-sm/6 font-semibold text-zinc-900">
            Home
          </Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-zinc-900 cursor-pointer outline-transparent">
                  Options
                  {open ? (
                    <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-zinc-400" />
                  ) : (
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-zinc-400" />
                  )}
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
                >
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-zinc-900/5 lg:max-w-3xl">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                      {headerMenu.map((item) => (
                        <Popover.Button key={item.name} as={Link} href={item.href} aria-label={item.name}>
                          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-zinc-50">
                            <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-white">
                              <item.icon
                                aria-hidden="true"
                                className="size-6 text-zinc-600 group-hover:text-primary-600"
                              />
                            </div>
                            <div>
                              <span className="font-semibold text-zinc-900">
                                {item.name}
                              </span>
                              <p className="mt-1 text-zinc-600">{item.description}</p>
                            </div>
                          </div>
                        </Popover.Button>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link href="/form" aria-label="Label" className="text-sm/6 font-semibold text-zinc-900">
            Form
          </Link>
          <Link href="/other" aria-label="Label" className="text-sm/6 font-semibold text-zinc-900">
            Other
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={"tel:+1"} aria-label="Label" className="rounded-full bg-primary-600 px-3.5 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
            Button
          </Link>
        </div>
      </nav>

      {/* MOBILE */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Colonial Press LLC</span>
              <Image
              alt="Colonial Press Logo"
              src={logo}
              style={{
                width: 'auto',
                height: '12',
              }}
              objectFit="contain" 
              className="h-12 w-auto"
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-zinc-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* MOBILE */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-500/10">
              <div className="space-y-2 py-6">
                <Link 
                href="/" 
                aria-label="Home"
                className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50"
                onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50">
                        Options
                        {open ? (
                          <ChevronUpIcon className="size-5 text-zinc-400" />
                        ) : (
                          <ChevronDownIcon className="size-5 text-zinc-400" />
                        )}
                      </DisclosureButton>
                      <DisclosurePanel className="space-y-1">
                        {headerMenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-label={item.name}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/form"
                  aria-label="Label"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Form
                </Link>
                <Link
                  href="/other"
                  aria-label="Label"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Other
                </Link>
              </div>
              <div className="py-6">
                <Link
                href="tel:+1" 
                aria-label="Label"
                className="block rounded-lg py-2 px-3 text-base font-semibold text-zinc-900"
                >
                  Button
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
