"use client";

/* eslint-disable @next/next/no-img-element */
import { cards } from "@/app/components/data";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function DetailPage() {
  const { id } = useParams();

  const card = cards.find((c) => c.id === id);

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Card not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header */}

      <div>
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[400px] object-cover md:h-[600px]"
        />
      </div>

      <motion.div
        className="px-4 py-10 md:px-16 lg:px-32 bg-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Photography
        </motion.span>

        <motion.h2
          className="text-xl md:text-2xl font-bold mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {card.description}
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed text-base md:text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          In a post-apocalyptic wasteland, a solitary survivor navigates
          desolation haunted by mutants and ruthless human scavengers. Amidst
          the ruins, they encounter a mysterious wanderer, forging an unlikely
          alliance. Together, they embark on a perilous journey, facing
          harrowing obstacles and betrayals. As they struggle to survive, bonds
          form, revealing shared scars of a shattered world. Amidst chaos and
          despair, glimmers of hope emerge, fueled by resilience and the
          unyielding human spirit. Through sacrifice and perseverance, they
          confront their demons, discovering that true salvation lies not in
          solitude, but in the bonds of companionship forged amidst the ashes of
          civilization.
        </motion.p>
      </motion.div>
    </div>
  );
}
