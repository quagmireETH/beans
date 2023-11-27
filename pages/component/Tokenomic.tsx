import { motion } from "framer-motion";

export default function Tokenomic() {
  return (
    <div className="h-full pb-10 relative z-10" id="token">
      <img
        className="absolute z-0 opacity-50 w-screen h-full"
        src="/beans_Bg4.jpg"
        alt=""
      />

      <div className="flex justify-center pt-10">
        <p className="text-5xl font-semibold">Tokenomics</p>
      </div>

      <div className="flex flex-col justify-evenly mt-28">
        <div className="flex justify-evenly max-[900px]:flex-col max-[900px]:px-[88px]">
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-4 px-[70px] mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
          >
            <p className="mb-4 text-3xl max-[1000px]:text-2xl pt-12 max-[900px]:pt-0">
              Total Supply
            </p>
            <p className="text-2xl max-[1000px]:text-xl">
              100,000,000,000 $PINK
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl mb-10"
          >
            <p className="mb-4 text-3xl max-[1000px]:text-2xl w-96 max-[900px]:w-full">
              Amount of $PINK token that will be distributed between the Public
            </p>
            <p className="text-2xl max-[1000px]:text-xl">80%</p>
          </motion.div>
        </div>

        <div className="flex justify-evenly max-[900px]:flex-col max-[900px]:px-[88px]">
          <motion.div
            initial={{ opacity: 0, x: "-20%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-4 rounded-3xl shadow-2xl mb-10 max-[900px]:p-10"
          >
            <p className="mb-4 pt-20 text-3xl max-[1000px]:text-2xl max-[900px]:pt-0">
              {" "}
              $PINK token for the TEAM
            </p>
            <p className="text-2xl max-[1000px]:text-xl">10%</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-20%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl mb-10"
          >
            <p className="mb-4 text-3xl max-[1000px]:text-2xl w-96 max-[900px]:w-full">
              The initial coin supply was set aside for exchanges, which will be
              used to provide liquidity / facilitate trading of $PINK.
            </p>
            <p className="text-2xl max-[1000px]:text-xl">10%</p>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="text-center bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl"
        >
          <p className="mb-4 text-3xl max-[1000px]:text-2xl">
            Amount of pourcentage on both buys and sells
          </p>
          <p className="text-2xl max-[1000px]:text-xl">0%</p>
        </motion.div>
      </div>
    </div>
  );
}
