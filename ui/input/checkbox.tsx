import { ReactNode } from 'react';

interface CheckboxOption {
    id: string;
    name: string;
    label: string;
    description: string;
    defaultChecked?: boolean;
}
  
interface CheckboxProps {
    legend: ReactNode;
    options: CheckboxOption[];
}
{/**
    const data = {
    legend: "Preferences",
        options: [
        {
            id: "notifications",
            name: "notifications",
            label: "Enable Notifications",
            description: "Receive updates via email.",
            defaultChecked: true,
        },
        {
            id: "dark-mode",
            name: "darkMode",
            label: "Dark Mode",
            description: "Use a darker theme for better readability at night.",
        },
        {
            id: "beta-features",
            name: "betaFeatures",
            label: "Enable Beta Features",
            description: "Get early access to experimental features.",
        },
        ],
    };
 */}
 // <Checkbox {...data} />
export default function Checkbox({ legend, options }: CheckboxProps) {
    return (
      <fieldset>
        <legend className="sr-only">{legend}</legend>
        <div className="space-y-5">
          {options.map(({ id, name, label, description, defaultChecked }) => (
            <div key={id} className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id={id}
                    name={name}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    aria-describedby={`${id}-description`}
                    className="col-start-1 row-start-1 appearance-none rounded border border-zinc-300 bg-white checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:checked:bg-zinc-100 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-zinc-950/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-[:checked]:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-[:indeterminate]:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-sm/6">
                <label htmlFor={id} className="font-medium text-zinc-900">
                  {label}
                </label>
                <p id={`${id}-description`} className="text-zinc-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    );
}
  