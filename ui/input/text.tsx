import { ReactNode } from 'react';


interface TextProps {
    id: string;
    label: ReactNode;
    placeholder: string;
    rows: number;
    value: string;
    aria: string;
}
{/**
  <Text 
    id="message" 
    label="Your Message" 
    placeholder="Type your message here..." 
    rows={4} 
    value="Hello, this is a default text!" 
    aria="Message Input" 
  />
*/}
export default function TextBox({ id, label, placeholder, rows, value, aria }: TextProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm/6 font-medium text-zinc-900">
          {label}
        </label>
        <div className="mt-2">
          <textarea
            id={id}
            name={id}
            rows={rows}
            placeholder={placeholder}
            aria-label={aria}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-zinc-900 outline outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
            defaultValue={value}
          />
        </div>
      </div>
    )
  }
  