"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeadingAnimation {
  text?: string;
  description?: string;
  title?: string;
}

const HeadingAnimation: React.FC<HeadingAnimation> = ({
  text,
  description,
  title,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-auto py-4 bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        variants={itemVariants}
      >
        {text}
      </motion.h2>
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-gray-900 bg-white p-2 mb-8"
        variants={itemVariants}
      >
        {description}
      </motion.h1>
      <motion.p
        className="text-2xl md:text-4xl font-semibold text-gray-300"
        variants={itemVariants}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default HeadingAnimation;
