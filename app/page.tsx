import Image from "next/image";
import Terrain from "../Components/background/background";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Animation Container */}
      <div className="fixed inset-0 z-100">
        <Terrain />
      </div>

      {/* Content Container */}
      {/* <div className="relative p-10 z-10 ">
        <div className="flex flex-col items-center justify-center px-5 sm:px overflow-hidden mx-auto">
          <div className="drop-shadow-4xl max-w-7xl w-full">
            <h1 className="text-white"> Hello there!</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}
