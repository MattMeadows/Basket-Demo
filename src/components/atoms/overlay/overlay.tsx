import { motion } from "framer-motion";
import { FC } from "react";
import { Props } from "./type";

const Overlay: FC<Props> = ({ onClick, className }: Props) => (
  <motion.div
    {...(onClick ? { onClick } : {})}
    animate={{ opacity: 1 }}
    className={`${className} fixed inset-0 bg-black bg-opacity-40 z-10`}
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    transition={{
      damping: 20,
      duration: 0.4,
      mass: 0.8,
      stiffness: 100,
      type: "spring",
    }}
  />
);

export default Overlay;
