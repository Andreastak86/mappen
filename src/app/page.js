"use client";

import dynamic from "next/dynamic";

const LafjelletMap = dynamic(() => import("@/components/LafjelletMap"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <main className='min-h-screen flex flex-col items-center justify-center gap-4 p-6 bg-gray-100'>
            <h1 className='text-2xl font-semibold'>Lafjellet GPX Map</h1>
            <div className='w-full max-w-5xl h-[60vh]'>
                <LafjelletMap />
            </div>
        </main>
    );
}

// testing
