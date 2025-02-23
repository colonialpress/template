import { ReactNode } from 'react';

type RadioListOptions = {
    id: string;
    title: string;
};
  
interface RadioListProps {
    title: ReactNode;
    description: ReactNode;
    options: RadioListOptions[];
    defaultSelected?: string;
}
{/**
    const data = {
    title: "Notification Preferences",
    description: "Choose how you would like to receive notifications.",
        options: [
        { id: "email", title: "Email" },
        { id: "sms", title: "SMS" },
        { id: "push", title: "Push Notification" },
        ],
        defaultSelected: "email",
    };
 */}
 // <RadioList {...data} />
export default function RadioList({ title, description, options, defaultSelected = '' }: RadioListProps) {
    return (
      <fieldset>
        <legend className="text-sm/6 font-semibold text-zinc-900">{title}</legend>
        <p className="mt-1 text-sm/6 text-zinc-600">{description}</p>
        <div className="mt-6 space-y-6">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                defaultChecked={option.id === defaultSelected}
                id={option.id}
                name="notification-method"
                type="radio"
                className="relative size-4 appearance-none rounded-full border border-zinc-300 bg-white 
                           before:absolute before:inset-1 before:rounded-full before:bg-white 
                           checked:border-primary-600 checked:bg-primary-600 
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                           focus-visible:outline-primary-600 disabled:border-zinc-300 disabled:bg-zinc-100 
                           disabled:before:bg-zinc-400 forced-colors:appearance-auto forced-colors:before:hidden 
                           [&:not(:checked)]:before:hidden"
              />
              <label htmlFor={option.id} className="ml-3 block text-sm/6 font-medium text-zinc-900">
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    );
}
  