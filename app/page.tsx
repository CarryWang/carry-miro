import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>This is as screen for authenticated users only</p>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
