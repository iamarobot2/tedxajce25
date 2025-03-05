"use client";
import React from "react";
import { PinContainer } from "./3dPin";
import Image from "next/image";

export default function AnimatedPinDemo() {
  return (
    <div className="flex items-center justify-center w-[90%] py-6 md:max-w-full mx-auto overflow-hidden">
      <PinContainer
        title="Amal Jyothi College of Engineering"
        href="https://maps.app.goo.gl/xUb2KYgjsxgEmy3y5"
      >
        <div className="flex items-center justify-center basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem]  ">

          <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src="/Map.png"
              alt="Map of Amal Jyothi College of Engineering"
              className="w-full h-full object-cover rounded-md"
              layout="responsive"
              width={640}
              height={480}
              loading="lazy"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
