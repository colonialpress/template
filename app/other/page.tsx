import Card from "@/ui/card";
import { DescriptionList, DescriptionListStriped } from "@/ui/descriptionList";

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

const stripedData = {
  title: "Striped Project Details",
  description: "Key information about the striped project.",
    list: [
      { title: "Striped Project Name", description: "Next.js App Development" },
      { title: "Striped Status", description: "In Progress" },
      { title: "Striped Deadline", description: "March 15, 2025" },
      { title: "Striped Client", description: "Tech Solutions Inc." },
  ],
};

export default function Page() {
  return (
    <main>
      <br />
      <Card>
        <DescriptionList {...data} />
      </Card>
      <br />
      <Card>
        <DescriptionListStriped {...stripedData} />
      </Card>
      <br />
    </main>
  )
}