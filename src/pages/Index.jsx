import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">GPT Engineer for Backend</h1>
          <p className="text-xl mb-8">Revolutionize your backend development with AI</p>
          <Button asChild size="lg">
            <NavLink to="/dashboard">Get Started</NavLink>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="GPT-4 Integration"
              description="Leverage the power of OpenAI's GPT-4 for intelligent code generation."
            />
            <FeatureCard
              title="GitHub Integration"
              description="Seamlessly connect and manage your GitHub repositories."
            />
            <FeatureCard
              title="Real Code Generation"
              description="Generate actual, functional code, not just placeholders."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="GPT Engineer has revolutionized our backend development process. It's a game-changer!"
              author="Jane Doe, CTO at TechCorp"
            />
            <TestimonialCard
              quote="The code quality and speed of development have improved significantly since we started using GPT Engineer."
              author="John Smith, Lead Developer at InnoSoft"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <p className="italic mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

export default Index;