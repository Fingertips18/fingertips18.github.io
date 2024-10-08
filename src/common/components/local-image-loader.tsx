import { Blurhash } from "react-blurhash";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LocalImageLoaderProps {
  hash: string;
  className?: string;
  src: string;
  alt: string;
}

const LocalImageLoader = ({
  hash,
  className,
  src,
  alt,
}: LocalImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className={cn(
          "transition-opacity duration-500 ease-in-out overflow-hidden absolute",
          className,
          loaded ? "opacity-0" : "opacity-100"
        )}
      >
        <Blurhash hash={hash} width={"100%"} height={"100%"} />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(className, loaded ? "block" : "hidden")}
      />
    </>
  );
};

export { LocalImageLoader };
