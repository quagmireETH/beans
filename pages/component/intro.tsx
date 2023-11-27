import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="h-full pb-10 relative z-10 bg-[rgb(253,221,236)]" id="Info">
      <img
        className="absolute -z-10 w-screen h-full opacity-50"
        src="/beans_Bg.jpg"
        alt=""
      />

      <div className="flex justify-center mb-16 pt-20 max-[500px]:hidden">
        <div className="flex justify-evenly w-1/2 shadow-2xl bg-[#c8c8c8] p-4 rounded-full max-[900px]:w-3/4 max-[580px]:w-5/6">
          <a href="">
            <img
              className="w-14 cursor-not-allowed opacity-50"
              src="/uniswap.webp"
              alt=""
            />
          </a>
          <a href="https://t.me/BeanzCoin">
            <img className="w-14" src="/telegram.png" alt="" />
          </a>
          <a href="">
            <img
              className="w-14 cursor-not-allowed opacity-50"
              src="/dextool.png"
              alt=""
            />
          </a>
          <a href="https://twitter.com/beans_coin">
            <img className="w-14" src="/twitter.png" alt="" />
          </a>
          <img
            className="w-14 cursor-not-allowed opacity-50"
            src="/gecko.webp"
            alt=""
          />
          <a href="">
            <img
              className="w-14 cursor-not-allowed opacity-50"
              src="CoinMarketCap.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="flex justify-center mb-16 pt-20 min-[501px]:hidden max-[500px]:flex">
        <div className="flex-col justify-evenly w-1/2 shadow-2xl p-4 rounded-full max-[900px]:w-3/4 max-[580px]:w-5/6 min-[501px]:hidden max-[500px]:flex">
          <div className="flex justify-evenly">
            <a href="">
              <img
                className="w-14 mr-10 cursor-not-allowed opacity-50"
                src="/uniswap.webp"
                alt=""
              />
            </a>
            <a href="https://t.me/BeanzCoin">
              <img className="w-14" src="/telegram.png" alt="" />
            </a>
            <a href="">
              <img
                className="w-14 ml-10 cursor-not-allowed opacity-50"
                src="/dextool.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-evenly mt-4">
            <a href="https://twitter.com/beans_coin">
              <img className="w-14 ml-10" src="/twitter.png" alt="" />
            </a>
            <img
              className="w-14 cursor-not-allowed opacity-50"
              src="/gecko.webp"
              alt=""
            />
            <a href="">
              <img
                className="w-14 mr-10 cursor-not-allowed opacity-50"
                src="CoinMarketCap.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-5xl font-semibold text-center">About $Beanz</p>
      </div>

      <div className="flex justify-center mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-3/4"
        >
          <p className="text-center text-xl">
            Welcome to the dynamic realm of digital finance—welcome to Beanz.{" "}
            <br />
            <br /> As a trailblazing beacon of innovation in the expansive
            blockchain space, Beanz transcends conventional definitions,
            emerging not merely as a token but as a transformative and
            revolutionary force that is fundamentally reshaping the intricate
            landscape of decentralized finance (DeFi) <br />
            <br />
            In possession of a discerning total supply of 100 million Beanz, our
            visionary outlook extends far beyond the realm of routine
            transactions.
            <br />
            <br />
            At its core, Beanz is a catalyst for change, embodying a profound
            mission to empower individuals and entire communities alike,
            offering them the unprecedented ability to seize control of their
            financial destinies and embark on a journey toward unparalleled
            financial autonomy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
