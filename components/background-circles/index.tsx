import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
