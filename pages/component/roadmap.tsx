import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <div className="h-full pb-10 relative" id="roadmap">
      <img
        className="absolute -z-10 opacity-50 w-screen h-full"
        src="/beans_Bg2.jpg"
        alt=""
      />

      <div className="flex justify-center pt-10">
        <p className="text-5xl font-semibold">Roadmap</p>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-xl text-center px-6">
          Introducing $Beanz: The Coin of Animated Antics, Dreams, and
          Unforgettable Schemes
        </p>
      </div>

      <div className="flex justify-end mt-20 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-8 rounded-3xl mr-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:mr-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 1 : Community Building
          </p>
          <div>
            <p className="mb-2 text-center">
              Embarking on the Beanz journey begins with fostering a vibrant and
              engaged community. Join our growing network of enthusiasts,
              developers, and investors who share a common vision for the future
              of decentralized finance. Through collaborative efforts and shared
              passion, we aim to build a community that thrives on innovation,
              inclusivity, and the collective pursuit of financial empowerment.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl ml-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:ml-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 2 : Social Presence:
          </p>
          <div>
            <p className="mb-2 text-center">
              Connect with Beanz across our social media platforms to stay
              informed, engage in discussions, and be part of the conversation
              shaping the future of digital finance. Follow us on Twitter, join
              our Telegram community, and subscribe to our newsletters for
              real-time updates, insights, and exciting announcements. Social
              presence is not just about information; it&apos;s about building a
              global network that shares in the Beanz vision.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl mr-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:mr-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 3 : Marketing
          </p>
          <div>
            <p className="mb-2 text-center">
              Experience the Beanz brand through strategic and impactful
              marketing campaigns. Our marketing efforts are not just about
              visibility; they are a testament to our commitment to
              transparency, innovation, and community engagement. From
              compelling content to targeted outreach, our marketing initiatives
              aim to showcase the unique value proposition of Beanz to a global
              audience.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl ml-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:ml-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 4 : Token Launch
          </p>
          <div>
            <p className="mb-2 text-center">
              The launch of Beanz is a milestone in the journey towards a
              decentralized future. Secure, transparent, and community-driven,
              the Beanz token launch marks the beginning of a new era in digital
              finance. Join us as we set the stage for a revolutionary token
              that prioritizes efficiency, security, and versatility.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end mt-20 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "-20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-8 rounded-3xl mr-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:mr-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 5 : CoinMarketCap/Coingecko Listing
          </p>
          <div>
            <p className="mb-2 text-center">
              Elevate the visibility of Beanz on leading cryptocurrency
              platforms. The listing on CoinMarketCap and Coingecko is not just
              a recognition of our token&apos;s legitimacy but a gateway for a
              broader audience to discover and engage with Beanz. This step
              reinforces our commitment to transparency and accessibility within
              the broader crypto community.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl ml-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:ml-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 6 : 10k Holders: Exchange Listing
          </p>
          <div>
            <p className="mb-2 text-center">
              As the Beanz community grows to 10,000 strong holders, we&apos;re
              gearing up for the next major step. A strategic exchange listing
              is on the horizon, providing liquidity, accessibility, and
              exposure to a wider audience. This listing is not just a
              transactional event; it&apos;s a testament to the confidence that the
              broader crypto ecosystem has in the potential of Beanz.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl mr-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:mr-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 7 : Collabs/Partnerships
          </p>
          <div>
            <p className="mb-2 text-center">
              Collaboration is at the heart of innovation. Beanz is actively
              seeking partnerships and collaborations with like-minded projects,
              influencers, and organizations that align with our values and
              vision. These collaborations are designed to amplify our impact,
              foster innovation, and create new opportunities for the Beanz
              community.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl ml-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:ml-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 8 : Official Merch
          </p>
          <div>
            <p className="mb-2 text-center">
              Wear the Beanz brand with pride. Our official merchandise embodies
              the spirit of innovation, community, and financial empowerment.
              Each piece is a symbol of your commitment to the Beanz vision, a
              tangible representation of a community united by a shared belief
              in the future of decentralized finance.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-end mt-14 max-[750px]:justify-center">
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="bg-white bg-opacity-70 p-6 rounded-3xl mr-48 w-1/3 max-[1200px]:w-1/2 max-[750px]:mr-0 max-[750px]:w-3/4"
        >
          <p className="mb-4 font-bold text-xl underline">
            Phase 9 : App Launch Where Everything will be bought through $Beanz
          </p>
          <div>
            <p className="mb-2 text-center">
              Experience the future of digital transactions with the Beanz app.
              A user-friendly interface, secure transactions, and a seamless
              integration of Beanz as the primary mode of payment. From products
              to services, the Beanz app is set to become the go-to platform
              where everything is bought through the power of $Beanz, unlocking
              a new era of convenience in the digital economy.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-28">
        <div className="border-t-4 w-3/4 center mb-20 border-black"></div>
      </div>

      <div className=" flex justify-center">
        <p className="text-lg text-center px-6">
          Everything is set and ready to go! Will you join the wave?
        </p>
      </div>
    </div>
  );
}
