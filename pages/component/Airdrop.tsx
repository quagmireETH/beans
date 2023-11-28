import React from "react";
import { motion } from "framer-motion";

function Airdrop() {
  return (
    <div className="relative border-t-8 border-black" id="Airdrop">
      <img
        className="absolute -z-10 w-screen h-full opacity-70"
        src="/beans_Bg6.jpg"
        alt=""
      />

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center py-10">
          <p className="text-5xl font-semibold">Free Airdrop</p>
          <p>Eligibility Criteria for Free Airdrop</p>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-center bg-white bg-opacity-70 p-1 mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
          >
            <p className="mb-4 text-xl max-[1000px]:text-2xl pt-6 max-[900px]:pt-0">
              In order to participate in the free airdrop, eligibility is
              exclusively extended to holders within the following communities:
            </p>
            <div className="text-start">
              <li>Bored Ape Yacht Club (BAYC)</li>
              <li>Mutant Ape Yacht Club (MAYC)</li>
              <li>Bored Ape Kennel Club (BAKC)</li>
              <li>Crypto Punks</li>
              <li>Azuki/Beanz</li>
              <li>Pudgy Penguins</li>
              <li>Clone X</li>
              <li>MoonBirds</li>
              <li>Degods/Yoots</li>
              <li>Nakamigos</li>
              <li>Doodles</li>
              <li>Mocaverse</li>
              <li>Cool Cats</li>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center py-10">
          <p className="text-xl font-bold">Airdrop Participation Steps</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative flex flex-col justify-center w-3/4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="text-center bg-white bg-opacity-70 p-4 mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
            >
              <p className="mb-4 text-xl max-[1000px]:text-2xl pt-6 max-[900px]:pt-0">
                Tweet About $Beanz:
              </p>
              <div className="text-center">
                Share a tweet mentioning $Beanz and any relevant details or
                experiences related to the project. Be sure to include relevant
                hashtags and project handles.
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="text-center bg-white bg-opacity-70 p-4 mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
            >
              <p className="mb-4 text-xl max-[1000px]:text-2xl pt-6 max-[900px]:pt-0">
                Like and Retweet Our Tweets:
              </p>
              <div className="text-center">
                Engage with our official tweets by both liking and retweeting
                them. This demonstrates your active participation and support
                for the project.
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="text-center bg-white bg-opacity-70 p-4 mb-10 rounded-3xl shadow-2xl max-[900px]:p-10"
            >
              <p className="mb-4 text-xl max-[1000px]:text-2xl pt-6 max-[900px]:pt-0">
                Join Telegram:
              </p>
              <div className="text-center">
                Upon completion of the above steps, join our{" "}
                <a
                  href="https://t.me/BeanzProof"
                  className="text-blue-500 hover:text-blue-800"
                >
                  official Telegram
                </a>{" "}
                channel to share proof of your participation. This may include
                screenshots of your tweets and retweets.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
