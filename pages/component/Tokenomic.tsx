import { motion } from "framer-motion";

export default function Tokenomic() {
  return (
    <div className="h-full pb-10 relative z-10" id="token">
      <img
        className="absolute -z-10 opacity-50 w-screen h-full"
        src="/beans_Bg4.jpg"
        alt=""
      />

      <div className="flex justify-center pt-10">
        <p className="text-5xl font-semibold">Tokenomics</p>
      </div>

      <div className="flex flex-col justify-evenly mt-28">
        <div className="flex justify-evenly max-[900px]:flex-col max-[900px]:px-[88px]">
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-4 px-[70px] mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
          >
            <p className="mb-4 text-3xl max-[1000px]:text-2xl pt-6 max-[900px]:pt-0">
              Total Supply
            </p>
            <p className="text-2xl max-[1000px]:text-xl">100,000,000 Beanz</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl mb-10"
          >
            <p className="mb-4 text-3xl max-[1000px]:text-2xl w-96 max-[900px]:w-full">
              Team
            </p>
            <p className="text-2xl max-[1000px]:text-xl">
              5% (Locked for 12 Months)
            </p>
          </motion.div>
        </div>

        <div className="flex justify-evenly max-[900px]:flex-col max-[900px]:px-[88px]">
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-4 rounded-3xl shadow-2xl mb-10 max-[900px]:p-10"
          >
            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl max-[900px]:pt-0">
              Allocation
            </p>
            <p className="text-2xl max-[1000px]:text-xl">5,000,000 Beanz</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">
              Vesting Period
            </p>
            <p className="text-2xl max-[1000px]:text-xl">12 months</p>

            <p className="pt-10 text-3xl max-[1000px]:text-2xl">Purpose</p>
            <p className="text-2xl pb-10 w-96 max-[900px]:w-full max-[1000px]:text-xl">
              Aligning the team&apos;s interests with the long-term success of
              the project, fostering commitment and dedication.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 px-4 rounded-3xl shadow-2xl mb-10"
          >
            <p className="mb-4 mt-10 text-3xl max-[1000px]:text-2xl">Public</p>
            <p className="text-2xl max-[1000px]:text-xl">85%</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">
              Allocation
            </p>
            <p className="text-2xl max-[1000px]:text-xl">85,000,000 Beanz</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">Purpose</p>
            <p className="text-2xl pb-10 w-96 max-[900px]:w-full max-[1000px]:text-xl">
              85% of the Beanz Supply will be available for the buy and sell.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col justify-evenly mt-6">
        <div className="flex justify-evenly max-[900px]:flex-col max-[900px]:px-[88px]">
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 px-4 mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
          >
            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl max-[900px]:pt-0">
              Airdrop
            </p>
            <p className="text-2xl max-[1000px]:text-xl">5%</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">
              Allocation
            </p>
            <p className="text-2xl max-[1000px]:text-xl">5,000,000 Beanz</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">Purpose</p>
            <p className="text-2xl pb-10 w-96 max-[900px]:w-full max-[1000px]:text-xl">
              It will be airdrop to our earlier supporters who completed the
              tasks by inviting friends , and retweeting tweets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 px-4 rounded-3xl shadow-2xl mb-10"
          >
            <p className="mb-4 mt-10 text-3xl max-[1000px]:text-2xl">
              Marketing
            </p>
            <p className="text-2xl max-[1000px]:text-xl">5%</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">
              Allocation
            </p>
            <p className="text-2xl max-[1000px]:text-xl">5,000,000 Beanz</p>

            <p className="mb-4 pt-10 text-3xl max-[1000px]:text-2xl">Purpose</p>
            <p className="text-2xl pb-10 w-96 max-[900px]:w-full max-[1000px]:text-xl">
              Funding strategic marketing campaigns, partnerships, and
              initiatives to increase visibility, awareness, and adoption of
              Beanz within the broader crypto community.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
