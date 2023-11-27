import { motion } from "framer-motion";

export default function Swap() {
  return (
    <div
      className="flex flex-col justify-center h-full relative"
      id="swap"
    >
      <img
        className="absolute -z-10 w-screen h-full opacity-50"
        src="/beans_Bg3.jpg"
        alt=""
      />

      <div className="flex justify-center pt-10">
        <p className="text-5xl font-semibold  text-center">
          How to get $Beanz
        </p>
      </div>

      <div className="flex justify-center item-center mb-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="w-3/4 flex items-center border-4 border-black rounded-3xl shadow-xl p-4"
        >
          <div className="flex items-center ml-3 mr-10 max-[1000px]:hidden">
            <img className="w-72" src="/MetaMask.png" alt="" />
          </div>
          <div>
            <div>
              <p className="text-3xl font-bold ">Create a Wallet</p>
            </div>
            <div>
              <p className="text-2xl mt-2 ">
                You can download a metamask wallet or any other type of your
                choice from the app store or google play store for free. Desktop
                users, download the google chrome extension by going to
                metamask.io or again any other wallet of your choice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center item-center my-14">
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="w-3/4 flex items-center border-4 border-black rounded-3xl shadow-xl p-4"
        >
          <div className="flex items-center ml-10 mr-16 max-[1000px]:hidden">
            <img className="w-44" src="/eth.png" alt="" />
          </div>
          <div>
            <div>
              <p className="text-3xl font-bold ">Get some eth</p>
            </div>
            <div>
              <p className="text-2xl mt-2 ">
                Now get Some ETH by buying them or swapping stablecoin into eth
                to be able to switch to $PINK. If you don&apos;t have any ETH,
                you can buy directly on metamask, transfer from another wallet,
                buy on another exchange or ask to a friend to send you some and
                send it to your wallet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center item-center my-14">
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="w-3/4 flex items-center border-4 border-black rounded-3xl shadow-xl p-4"
        >
          <div className="flex items-center ml-8 mr-12 max-[1000px]:hidden">
            <img className="w-72" src="/uniswap.webp" alt="" />
          </div>
          <div>
            <div>
              <p className="text-3xl font-bold ">Go to Uniswap</p>
            </div>
            <div>
              <p className="text-2xl mt-2 ">
                Now go connect your wallet into to Uniswap.{" "}
                <span className="font-bold">
                  {" "}
                  Be sure to always use a burner!{" "}
                </span>
                Go to app.uniswap.org in google chrome or on the browser inside
                your Metamask app. Connect your wallet. Paste the $PINK token
                address into Uniswap, select PINK, and confirm. When Metamask
                prompts you for a wallet signature, you can sign, but always
                double check.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center item-center my-14">
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="w-3/4 flex items-center border-4 border-black rounded-3xl shadow-xl p-4"
        >
          <div className="flex items-center ml-4 mr-6 max-[1000px]:hidden">
            <img className="w-60 rounded-full" src="/pink.png" alt="" />
          </div>
          <div>
            <div>
              <p className="text-3xl font-bold ">
                Swap your ETH for $PINK
              </p>
            </div>
            <div>
              <p className="text-2xl mt-2 ">
                Now switch your ETH for $PINK. We have ZERO taxes so you
                don&apos;t need to worry about buying with a specific slippage,
                although you may need to use slippage during times of market
                volatility.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
