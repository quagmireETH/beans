import Header from "./component/header";
import Intro from "./component/intro";
import Swap from "./component/swap";
import Tokenomic from "./component/Tokenomic";
import Roadmap from "./component/roadmap";
import Airdrop from "./component/Airdrop";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="h-screen relative flex justify-center border-b-8 border-black">
      <img
        className="absolute -z-10 w-screen h-full opacity-70"
        src="/beans_Bg5.jpg"
        alt=""
      />

        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute top-[25%]"
        >
          <div className="flex justify-center">
            <img
              className="rounded-full w-[425px] shadow-2xl max-[450px]:w-72"
              src="/token.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <Intro />
      <Airdrop />
      <Swap />
      <Tokenomic />
      <Roadmap />
    </div>
  );
}
