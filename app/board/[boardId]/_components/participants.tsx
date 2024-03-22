import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <div className=" a absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      participants
    </div>
  );
};

export function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md w-[100px]">
      <Skeleton className="w-full h-full" />
    </div>
  );
}
