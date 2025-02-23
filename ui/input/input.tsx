import { ReactNode } from 'react';

interface InputProps {
    id: string;
    label: ReactNode;
    placeholder: string;
    aria: string;
}
// https://www.w3schools.com/html/html_form_input_types.asp

// <Input id="name" label="Full Name" placeholder="Enter your name" aria="Full Name Input" />
export function Input({ id, label, placeholder, aria }: InputProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            id={id}
            name={id}
            type="text"
            placeholder={placeholder}
            aria-label={aria}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
          />
        </div>
      </div>
    )
}

interface InputDisabledProps {
    id: string;
    label: ReactNode;
    placeholder: string;
    value: string;
    aria: string;
}
// <InputDisabled id="username" label="Username" placeholder="Your username" value="john_doe" aria="Username Input" />
export function InputDisabled({ id, label, placeholder, value, aria }: InputDisabledProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            defaultValue={value}
            id={id}
            name={id}
            type="text"
            disabled
            placeholder={placeholder}
            aria-label={aria}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-500 disabled:outline-zinc-200 sm:text-sm/6"
          />
        </div>
      </div>
    )
}

interface InputNoLabelProps {
    id: string;
    placeholder: string;
    aria: string;
}
// <InputNoLabel id="search" placeholder="Search for something..." aria="Search Input" />
export function InputNoLabel({ id, placeholder, aria }: InputNoLabelProps) {
    return (
      <div>
        <input
          id={id}
          name={id}
          type="text"
          placeholder={placeholder}
          aria-label={aria}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
        />
      </div>
    )
}

interface InputHintProps {
    id: string;
    label: string;
    hint: string;
    placeholder: string;
    aria: string;
}
// <InputHint id="email" label="Email Address" hint="Optional" placeholder="Enter your email" aria="Email Input" />
export function InputHint({ id, label, hint, placeholder, aria }: InputHintProps) {
    return (
      <div>
        <div className="flex justify-between">
          <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
            {label}
          </label>
          <span id="email-optional" className="text-sm/6 text-zinc-500">
            {hint}
          </span>
        </div>
        <div className="mt-2">
          <input
            id={id}
            name={id}
            type="text"
            placeholder={placeholder}
            aria-label={aria}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
          />
        </div>
      </div>
    )
}

import { EnvelopeIcon } from '@heroicons/react/16/solid'

interface InputEmailProps {
    id: string;
    label: ReactNode;
    placeholder: string;
    aria: string;
}

// <InputEmail id="email" label="Email Address" placeholder="Enter your email" aria="Email Input" />
export function InputEmail({ id, label, placeholder, aria }: InputEmailProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id={id}
          name={id}
          type="email"
          placeholder={placeholder}
          aria-label={aria}
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:pl-9 sm:text-sm/6"
        />
        <EnvelopeIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-zinc-400 sm:size-4"
        />
      </div>
    </div>
  )
}

interface InputWebsiteProps {
    id: string;
    label: ReactNode;
    placeholder: string;
    aria: string;
}
// <InputWebsite id="website" label="Website URL" placeholder="yourwebsite.com" aria="Website Input" />
export function InputWebsite({ id, label, placeholder, aria }: InputWebsiteProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
          {label}
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-zinc-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary-600">
            <div className="shrink-0 select-none text-base text-zinc-500 sm:text-sm/6">https://</div>
            <input
              id={id}
              name={id}
              type="text"
              placeholder={placeholder}
              aria-label={aria}
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    )
}
  