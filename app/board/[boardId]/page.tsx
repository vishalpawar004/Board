'use client';

import { use } from 'react';
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";
import { useEffect } from "react";

interface BoardIdPageProps {
    params: Promise<{ boardId: string }> | { boardId: string };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
    // unwrap params if it's a Promise
    const resolvedParams = use(params as Promise<{ boardId: string }>);

    useEffect(() => {
        document.title = `Board - Miro Clone`;
    }, []);

    return (
        <Room roomId={resolvedParams.boardId} fallback={<Loading />}>
            <Canvas boardId={resolvedParams.boardId} />
        </Room>
    );
};

export default BoardIdPage;
