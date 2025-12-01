import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Root = () => {
  return (
    <>
      <Button asChild>
        <Link to="/about">To about</Link>
      </Button>

      {import.meta.env.MODE === "development" && (
        <TanStackRouterDevtools position="bottom-left" />
      )}
    </>
  );
};
