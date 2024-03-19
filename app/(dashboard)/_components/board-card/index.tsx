"use client";

import Link from "next/link";
import Image from "next/image";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  _id: string;
  title: string;
  authorName: string;
  authorId: string;
  _creationTime: number;
  imgUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  _id,
  title,
  authorId,
  authorName,
  _creationTime,
  imgUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(_creationTime, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${_id}`}>
      <div className="group aspect-[100/128] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imgUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/128] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
