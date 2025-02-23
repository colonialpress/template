import { ReactNode } from 'react';

type ListItem = {
    title: ReactNode;
    description: ReactNode;
}

interface ListProps {
    title: ReactNode;
    description: ReactNode;
    list: ListItem[];
}
{/*
    const data = {
    title: "Project Details",
    description: "Key information about the project.",
        list: [
        { title: "Project Name", description: "Next.js App Development" },
        { title: "Status", description: "In Progress" },
        { title: "Deadline", description: "March 15, 2025" },
        { title: "Client", description: "Tech Solutions Inc." },
        ],
    };
*/}
// <DescriptionList {...data} />
export function DescriptionList({ title, description, list }: ListProps) {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-zinc-500">{description}</p>
      </div>
      <div className="mt-6 border-t border-zinc-100">
        <dl className="divide-y divide-zinc-100">
            {list.map((item) => (
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-zinc-900">{item.title}</dt>
                    <dd className="mt-1 text-sm/6 text-zinc-700 sm:col-span-2 sm:mt-0">{item.description}</dd>
                </div>
            ))}
        </dl>
      </div>
    </div>
  )
}

{/*
    const data = {
    title: "Project Details",
    description: "Key information about the project.",
        list: [
        { title: "Project Name", description: "Next.js App Development" },
        { title: "Status", description: "In Progress" },
        { title: "Deadline", description: "March 15, 2025" },
        { title: "Client", description: "Tech Solutions Inc." },
        ],
    };
*/}
// <DescriptionListStriped {...data} />
export function DescriptionListStriped({ title, description, list }: ListProps) {
    return (
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base/7 font-semibold text-zinc-900">{title}</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-zinc-500">{description}</p>
        </div>
        <div className="mt-6 border-t border-zinc-100">
            <dl className="divide-y divide-zinc-100">
            {list.map((item, index) => (
                <div
                key={index}
                className={`px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 ${
                    index % 2 === 0 ? "bg-zinc-50" : "bg-white"
                }`}
                >
                <dt className="text-sm/6 font-medium text-zinc-900">{item.title}</dt>
                <dd className="mt-1 text-sm/6 text-zinc-700 sm:col-span-2 sm:mt-0">
                    {item.description}
                </dd>
                </div>
            ))}
            </dl>
        </div>
      </div>
    )
}