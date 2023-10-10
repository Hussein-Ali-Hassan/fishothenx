"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Slider({ images }: { images: string[] }) {
  const scrollDivRef = useRef(null);

  return (
    <div className="relative">
      <div
        ref={scrollDivRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar relative"
      >
        <div className="flex space-x-3 flex-nowrap">
          {images.map((image) => (
            <Card key={image} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ image }: { image: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={classNames(
        "overflow-hidden w-[270px] lg:w-[300px] rounded-xl"
      )}
    >
      <Image
        width={500}
        height={500}
        src={String(image)}
        alt={image}
        className={classNames(
          "bg-gray-400 w-full aspect-square hover:scale-105 duration-300 ease-in-out object-cover rounded-xl",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => {
          setLoading(false);
        }}
      />
    </div>
  );
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
