"use client";
import React from "react";
import { motion, Variants, CustomValueType } from "framer-motion";

interface HeadingTextProps {
  text: string;
  subheading?: string;
  slideDirection?: "left" | "right";
}

const containerVariants: Variants = {
  hidden: (slideDirection: string) => ({
    opacity: 0,
    x: slideDirection === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const HeadingText: React.FC<HeadingTextProps> = ({
  text,
  subheading,
  slideDirection = "left",
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={slideDirection}
      className="bg-gray-600 py-3 ml-10  rounded-l-xl  md:ml-[300px] mr[-20] mb-6 shadow-md"
    >
      <div className="relative  mx-auto items-center max-w-3xl">
        <motion.h1
          variants={containerVariants}
          custom={slideDirection}
          className="flex gap-2 md:gap-8 items-center mx-2 text-lg md:text-4xl font-bold text-white text-center mb-4"
        >
          {" "}
          <div className="hidden md:block">
            {" "}
            <BookmarkIcon />
          </div>
          <div className="block md:hidden">
            {" "}
            <BookmarkIconSmall />
          </div>
          {text}
        </motion.h1>
        {subheading && (
          <motion.p
            variants={containerVariants}
            custom={slideDirection}
            className="text-sm md:text-xl text-white text-center mt-2 mx-2 px-2 md:px-4 md:py-2 bg-gray-900 rounded-lg shadow-md"
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default HeadingText;

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    transform="rotate(45)"
  >
    <path
      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
      style={{ fill: "#ff0000" }}
    />
  </svg>
);

const BookmarkIconSmall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
      style={{ fill: "#ff0000" }}
    />
  </svg>
);
