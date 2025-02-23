import { ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

interface SelectProps {
    id: string;
    label: ReactNode;
    value: string;
    aria: string;
    options: string[];
}
// const countries = ['United States', 'Canada', 'Mexico'];
// <Select id="country" label="Select a Country" value="Canada" aria="Country Selection" options={countries} />
export default function Select({ id, label, value, aria, options }: SelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          id={id}
          name={id}
          defaultValue={value}
          aria-label={aria}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-zinc-500 sm:size-4"
        />
      </div>
    </div>
  );
}