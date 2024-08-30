"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import ImageGallery from "react-image-gallery";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageCircle, MessageCircleMore } from "lucide-react";

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

  const image = [
    {
      original:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
      thumbnail:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      original:
        "https://images.unsplash.com/photo-1724795422733-def1b552061b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      thumbnail:
        "https://images.unsplash.com/photo-1724795422733-def1b552061b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="h-screen">
      <div className="min-h-[20vh] bg-purple-600 flex items-center justify-center">
        <h1>Detail</h1>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-10 px-10">
        <div className="col-span-2">
          <ImageGallery items={image} />
        </div>
        <div className="bg-green-500 px-5">
          <div className="flex gap-4 items-center bg-slate-300 p-2 mt-2">
            <Image
              src={
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww"
              }
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[80px] h-[80px] object-cover object-center rounded-full"
            />
            <div>
              <h3>John Collins</h3>
              <p>Coll Fashions</p>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-slate-300 p-2 mt-2 justify-between">
            <Button>
              <PhoneCall className="mr-2 h-4 w-4" /> Call
            </Button>

            <Button>
              <MessageCircleMore className="mr-2 h-4 w-4" /> Whatsapp
            </Button>
          </div>

          <div className="bg-slate-300 p-2 mt-2">
            <h1 className="text-xl">About Seller</h1>
            <div>
              <p>Number of listings: 5</p>
              <p>Number of reviews: 5</p>
              <p>Location: Kampala</p>
              <p>Member Since: 30-Aug-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
