"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function page() {
  const images = [
    {
      id: 1,
      original:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      original:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="h-screen">
      <div className="min-h-[20vh] bg-purple-600 flex items-center justify-center">
        <h1>Detail</h1>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-10 px-10">
        <div className="bg-red-500 col-span-2">
          <div>
            <Carousel
              showThumbs={true}
              renderThumbs={() =>
                images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.original}
                    alt="piece"
                    width={50}
                    height={50}
                  />
                ))
              }
            >
              <div className="h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww"
                  alt="Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover object-center"
                />
                <p className="legend">Legend 1</p>
              </div>
              <div className="h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww"
                  alt="Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p className="legend">Legend 2</p>
              </div>
              <div className="h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww"
                  alt="Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="bg-green-500">
          <h1>there</h1>
        </div>
      </div>
    </div>
  );
}

export default page;
