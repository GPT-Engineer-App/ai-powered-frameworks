import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Github, Code } from "lucide-react";

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Brain className="h-12 w-12 mb-4 text-purple-500" />}
          title="GPT-4 Integration"
          description="Harness the power of OpenAI's GPT-4 model to generate intelligent and context-aware backend code. Our integration ensures that you get high-quality, relevant code suggestions for your projects."
        />
        <FeatureCard
          icon={<Github className="h-12 w-12 mb-4 text-gray-700" />}
          title="GitHub Integration"
          description="Seamlessly connect your GitHub repositories to our platform. Manage your projects, commit changes, and collaborate with your team directly from our intuitive interface."
        />
        <FeatureCard
          icon={<Code className="h-12 w-12 mb-4 text-blue-500" />}
          title="Real Code Generation"
          description="Unlike other platforms that provide placeholders, we generate actual, functional code. Our AI-powered system creates production-ready backend code that you can use immediately in your projects."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex flex-col items-center">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default Features;