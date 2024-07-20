import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual backend communication
    setOutput('Backend code generation in progress...');
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">GPT Engineer for Backend</h1>
        <p className="text-gray-600">Generate backend code with AI</p>
      </header>

      <main className="flex-grow flex flex-col md:flex-row gap-8">
        <section className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                Prompt
              </label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your backend requirements..."
                className="w-full h-40"
              />
            </div>
            <Button type="submit" className="w-full">Generate Backend Code</Button>
          </form>
        </section>

        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Generated Code</h2>
          <div className="bg-white p-4 rounded-md shadow">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </section>
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2023 GPT Engineer for Backend. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;