'use client'

import { useState } from 'react'
import { Description, Field, Label, Switch } from '@headlessui/react'

import { ReactNode } from 'react';
  
interface ToggleProps {
    label: ReactNode;
    description: ReactNode;
}
// <Toggle label="Enable Notifications" description="Receive updates via email." />
export default function Toggle({ label, description }: ToggleProps) {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center justify-between w-full">
      <span className="flex flex-col">
        <Label as="span" passive className="text-sm/6 font-medium text-zinc-900">
          {label}
        </Label>
        <Description as="span" className="text-sm text-zinc-500">
          {description}
        </Description>
      </span>
      <div className="ml-auto">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 data-[checked]:bg-primary-600"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
      </div>
    </Field>
  )
}
