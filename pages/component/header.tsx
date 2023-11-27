import ScrollButton from "./ScrollButton";
import Navbar from "./BurgerNav";

export default function Header() {
  return (
    <div className="flex justify-evenly w-full pt-7  max-[1000px]:justify-between">
      <div className="flex justify-evenly w-3/4  max-[1000px]:hidden">
        <ScrollButton targetId="Info">
          <p className="cursor-pointer text-lg underline active:text-[rgb(214,214,214)] max-[1000px]:hidden">
            About
          </p>
        </ScrollButton>
        <ScrollButton targetId="swap">
          <p className="cursor-pointer text-lg underline active:text-[rgb(214,214,214)] max-[1000px]:hidden">
            How to get $Beanz
          </p>
        </ScrollButton>
        <ScrollButton targetId="token">
          <p className="cursor-pointer text-lg underline active:text-[rgb(214,214,214)] max-[1000px]:hidden">
            Tokenomics
          </p>
        </ScrollButton>
        <ScrollButton targetId="roadmap">
          <p className="cursor-pointer text-lg underline active:text-[rgb(214,214,214)] max-[1000px]:hidden">
            Roadmap
          </p>
        </ScrollButton>
      </div>
      <div className="pl-6">
        <Navbar />
      </div>
      <div className="flex justify-center w-1/3 max-[500px]:w-2/4">
        <a href="">
          <div>
            <p className="cursor-pointer text-lg border-2 rounded-2xl px-6 py-1 hover:bg-[#93803C] active:bg-[#93803C]">
              Buy Now!
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
