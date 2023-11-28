import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollButton from "./ScrollButton";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open }: MobileNavProps) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 left-0 h-screen w-[45%] z-20 bg-[#AA9C51] transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-16 p-5">
        <a className="my-4 border-b border-[#5B060D] w-full">
          <ScrollButton targetId="Info">
            <p className="text-xl mb-4">About</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#5B060D] w-full">
          <ScrollButton targetId="swap">
            <p className="text-xl mb-4">How to get $Beanz</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#5B060D] w-full">
          <ScrollButton targetId="token">
            <p className="text-xl mb-4">Tokenomics</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#5B060D] w-full">
          <ScrollButton targetId="roadmap">
            <p className="text-xl mb-4">Roadmap</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#5B060D] w-full">
          <ScrollButton targetId="Airdrop">
            <p className="text-xl mb-4">Airdrop</p>
          </ScrollButton>
        </a>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[1000px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-10 h-6 mr-10 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-black rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-black rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
