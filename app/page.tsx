import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";
import React, {useState} from 'react';

export default function Home() {
  return (
    <main>
      <div className="flex justify-between h-20 bg-gray-950 items-center p-4">
          <IoReorderThree className="h-10 w-10"></IoReorderThree>
          <div className="text-center text-2xl">
            Sentenac Léandre
          </div>
          <Image
              src="/profil.png"
              alt="Profil"
              width={30}
              height={30}
            />
      </div>
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 rounded-lg border-white w-52 h-52 text-center items-center">
            1
          </div>
          <div className="border-2 rounded-lg border-white w-52 h-52 text-center items-center">
            2
          </div>
          <div className="border-2 rounded-lg border-white w-52 h-52 text-center items-center">
            3
          </div>
          <div className="border-2 rounded-lg border-white w-52 h-52 text-center items-center">
            4
          </div>
          <div className="border-2 rounded-lg border-white w-52 h-52 text-center items-center">
            5
          </div>
        </div>
        
      </div>
    </main>
  );
}
