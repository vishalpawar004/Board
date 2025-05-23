'use client';

import { useQuery } from "convex/react";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";
import { useSearchParams } from "next/navigation";

interface BoardListProps {
  orgId: string;
}

export const BoardList = ({ orgId }: BoardListProps) => {
  const searchParams = useSearchParams();

  const favorites = searchParams.get("favorites") || "";
  const search = searchParams.get("search") || "";

  const data = useQuery(api.boards.get, {
    orgId,
    favorites,
    search,
  });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-2xl">
          {favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          {[...Array(9)].map((_, index) => (
            <BoardCard.Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!data.length && search) return <EmptySearch />;
  if (!data.length && favorites) return <EmptyFavorites />;
  if (!data.length) return <EmptyBoards />;

  return (
    <div>
      <h2 className="text-2xl">
        {favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
