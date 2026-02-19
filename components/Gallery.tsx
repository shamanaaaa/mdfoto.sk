"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import clsx from "clsx";

export interface GalleryImage {
  src: string;
  alt: string;
  thumbSrc?: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [index, setIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width ?? 1200,
    height: img.height ?? 800,
  }));

  const colClass = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-2 sm:columns-3 lg:columns-4",
  }[columns];

  return (
    <>
      <div className={clsx(colClass, "gap-3 space-y-3")}>
        {visibleImages.map((image, i) => (
          <div
            key={i}
            className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <div className="relative">
              <Image
                src={image.thumbSrc ?? image.src.replace("/images/", "/images-thumbs/")}
                alt={image.alt}
                width={600}
                height={800}
                quality={70}
                loading={i < 3 ? "eager" : "lazy"}
                unoptimized
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            className="btn-outline"
            onClick={() => setVisibleCount((count) => Math.min(count + 9, images.length))}
          >
            Načítať ďalšie fotky
          </button>
        </div>
      ) : null}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Zoom, Counter]}
        zoom={{ maxZoomPixelRatio: 3 }}
        styles={{
          container: { backgroundColor: "rgba(17, 17, 17, 0.97)" },
        }}
      />
    </>
  );
}
