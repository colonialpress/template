import Card from "@/ui/card";
import { 
  Input,
  InputDisabled,
  InputNoLabel,
  InputHint,
  InputEmail,
  InputWebsite
} from "@/ui/input/input";
import Select from "@/ui/input/select";
import TextBox from "@/ui/input/text";
import Checkbox from "@/ui/input/checkbox";
import Radio from "@/ui/input/radio";
import Toggle from "@/ui/input/toggle";

const checkbox = {
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

const radio = {
  title: "Notification Preferences",
  description: "Choose how you would like to receive notifications.",
    options: [
      { id: "email", title: "Email" },
      { id: "sms", title: "SMS" },
      { id: "push", title: "Push Notification" },
  ],
  defaultSelected: "email",
};

export default function Page() {
  const countries = ['United States', 'Canada', 'Mexico'];
  return (
    <main>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Input</strong></h1>
          <Input 
          id="name" 
          label="Full Name" 
          placeholder="Enter your name" 
          aria="Full Name Input" 
          />
          <InputDisabled 
          id="username" 
          label="Username" 
          placeholder="Your username" 
          value="john_doe" 
          aria="Username Input" 
          />
          <InputNoLabel 
          id="search" 
          placeholder="Search for something..." 
          aria="Search Input" 
          />
          <InputHint 
          id="email" 
          label="Email Address" 
          hint="Optional" 
          placeholder="Enter your email" 
          aria="Email Input" 
          />
          <InputEmail 
          id="email" 
          label="Email Address" 
          placeholder="Enter your email" 
          aria="Email Input" 
          />
          <InputWebsite 
          id="website" 
          label="Website URL" 
          placeholder="yourwebsite.com" 
          aria="Website Input" 
          />
        </div>
      </Card>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Text</strong></h1>
          <TextBox 
          id="message" 
          label="Your Message" 
          placeholder="Type your message here..." 
          rows={4} 
          value="Hello, this is a default text!" 
          aria="Message Input" 
          />
        </div>
      </Card>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Select</strong></h1>
          <Select 
          id="country" 
          label="Select a Country" 
          value="Canada" 
          aria="Country Selection" 
          options={countries} 
          />
        </div>
      </Card>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Checkbox</strong></h1>
          <Checkbox {...checkbox} />
        </div>
      </Card>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Radio</strong></h1>
          <Radio {...radio} />
        </div>
      </Card>
      <br />
      <Card>
        <div className="space-y-4">
          <h1><strong>Toggle</strong></h1>
          <Toggle label="Enable Notifications" description="Receive updates via email." />
        </div>
      </Card>
      <br />
    </main>
  )
}