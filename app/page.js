"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Locate,
  LocateFixed,
  MapPin,
  MapPinCheck,
  MapPinCheckIcon,
  MapPinCheckInside,
  MapPinHouse,
  Menu,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4 items-center border-b p-4">
        <Sheet>
          <SheetTrigger>
            {/* <Button variant="outline" size="icon" className="shrink-0 "> */}
            <Menu className="h-5 w-5" />
            {/* <span className="sr-only">Toggle navigation menu</span> */}
            {/* </Button> */}
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>New Products</li>
            <li>Featured Products</li>
            <li>Categories</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[90%]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className=" h-[250px]">
                  <Card className="h-full bg-[url('https://images.unsplash.com/photo-1723667399594-989a080fe302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8')] bg-cover bg-no-repeat bg-center">
                    <CardContent className="h-full w-full flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="group overflow-hidden rounded-xl">
            <div className="w-full overflow-hidden h-[200px] rounded-xl">
              <Link href="/detail/1">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1724795422733-def1b552061b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="nextui"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="group-hover:transform group-hover:scale-125 group-hover:rounded-xl group-hover:h-[200px] duration-500 w-full h-[200px] object-cover object-center rounded-xl"
                />
              </Link>
            </div>
            {/* <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader> */}
            {/* <CardContent>
              <p>Card Content</p>
            </CardContent> */}
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
            <div className="px-1 mt-2">
              <h3>New Mini HD</h3>
              <h3 className="text-xl">UGX 30,000</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex gap-1 items-center py-2">
                <MapPinCheck size={16} />
                <p className="text-sm">Kampala, Uganda</p>
              </div>

              <div className="pb-3">
                <Badge variant="outline">Badge</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
