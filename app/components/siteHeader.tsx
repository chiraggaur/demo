"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <motion.div
      className="text-center mb-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="w-full h-full mx-auto mb-2"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* renamed image file to work in deployment  */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={127}
          height={59}
          className="w-[127px] h-[59px] object-contain mx-auto"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-testSohne font-bold mt-2"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        alkye
      </motion.h1>

      <motion.p
        className="text-sm text-gray-500 mt-1"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        The easiest test you will ever do
      </motion.p>
    </motion.div>
  );
}
