import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@pkg/ui/components/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="font-bold text-3xl">Welcome Home!!!</h1>
      <Button>Start!</Button>
    </div>
  );
}
