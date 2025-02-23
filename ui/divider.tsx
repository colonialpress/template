import { ReactNode } from 'react';

interface DividerLabelProps {
  label: ReactNode;
}
// <DividerLabel label="Content goes here" />
export function DividerLabel({ label }: DividerLabelProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-zinc-500">{label}</span>
      </div>
    </div>
  );
}

interface DividerIconProps {
  icon: ReactNode;
}
// <DividerIcon icon={<PlusIcon className="size-5 text-zinc-500" />} />
export function DividerIcon({ icon }: DividerIconProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-zinc-500">{icon}</span>
      </div>
    </div>
  );
}

interface DividerTitleProps {
    title: ReactNode;
}
// <DividerTitle title="Title" />
export function DividerTitle({ title }: DividerTitleProps) {
    return (
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold text-zinc-900">{title}</span>
        </div>
      </div>
    )
}
interface DividerButtonProps {
    icon: ReactNode;
    text: ReactNode;
}
// <DividerButton icon={<PlusIcon aria-hidden="true" className="-ml-1 -mr-0.5 size-5 text-zinc-400" />} text="Button" />
export function DividerButton({ icon, text }: DividerButtonProps) {
return (
    <div className="relative">
    <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-300" />
    </div>
    <div className="relative flex justify-center">
        <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
        >
        {icon}
        {text}
        </button>
    </div>
    </div>
)
}
  