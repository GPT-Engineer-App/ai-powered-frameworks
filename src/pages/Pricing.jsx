import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Basic"
          price="$49"
          description="Perfect for small projects and individual developers"
          features={[
            "GPT-4 Integration",
            "5 GitHub Repositories",
            "1,000 Code Generations/month",
            "Community Support",
          ]}
        />
        <PricingCard
          title="Pro"
          price="$99"
          description="Ideal for growing teams and businesses"
          features={[
            "GPT-4 Integration",
            "Unlimited GitHub Repositories",
            "10,000 Code Generations/month",
            "Priority Support",
            "Advanced Code Analytics",
          ]}
          highlighted={true}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="Tailored solutions for large organizations"
          features={[
            "GPT-4 Integration",
            "Unlimited GitHub Repositories",
            "Unlimited Code Generations",
            "24/7 Dedicated Support",
            "Advanced Code Analytics",
            "Custom Integrations",
            "On-premises Deployment Option",
          ]}
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, description, features, highlighted = false }) => (
  <Card className={`flex flex-col ${highlighted ? 'border-purple-500 border-2' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-4xl font-bold mb-6">{price}<span className="text-sm font-normal">/month</span></p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={highlighted ? "default" : "outline"}>
        Choose Plan
      </Button>
    </CardFooter>
  </Card>
);

export default Pricing;