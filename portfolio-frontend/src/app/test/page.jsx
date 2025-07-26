"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Test() {
  return (
    <div className="fixed inset-0"> {/* Add this wrapper */}
      <BackgroundBeamsWithCollision className="h-screen">
        <div className="absolute z-50 p-8 text-white">
          <h1 className="text-4xl font-bold">Beams Test</h1>
          <p className="text-xl">You should see animated beams below</p>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}