import { motion } from "framer-motion";
import { FC } from "react";
import { Props } from "./type";

const LoadingSpinner: FC<Props> = ({ className }: Props) => (
  <div className={`${className} flex items-center justify-center w-full py-5`}>
    <motion.div
      animate="end"
      className="flex justify-around h-20 w-15"
      initial="start"
      variants={{
        start: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        end: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {new Array(3).fill(null).map((item: null, index: number) => (
        <motion.span
          key={index}
          className="block h-5 bg-slate-500 rounded-full w-5 mx-2"
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          variants={{
            start: {
              y: "50%",
            },
            end: {
              y: "150%",
            },
          }}
        />
      ))}
    </motion.div>
  </div>
);

export default LoadingSpinner;
