"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  short_description: string;
  image_url: string;
}

export default function CardList() {
  const router = useRouter();
  const [cards, setCards] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://alkye-test-422384984803.us-central1.run.app/myapp/list/")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Failed to fetch cards:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-white">
        <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-gray-300">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth gap-6 px-4 md:flex-row md:overflow-y-visible md:overflow-x-auto md:snap-x md:gap-6 md:px-8 md:h-[100vh]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          onClick={() => router.push(`/details/${card.id}`)}
          className="relative cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl 
             w-full h-[65vh] snap-start md:h-[85vh] md:w-[65vw] md:max-w-[65vw] md:flex-shrink-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.25,
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="w-full h-full md:h-full relative">
            <Image
              src={card.image_url}
              alt={card.title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 600px"
              priority={index === 0}
            />
          </div>

          <motion.div
            className="absolute top-0 left-0 p-6 text-white max-w-full"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 + 0.3,
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <span className="lg:text-lg md:text-xs bg-black text-white px-3 py-1 font-testSohne font-bold rounded-full inline-block mb-2">
              {card.title}
            </span>
            <p className="lg:text-lg md:text-xs leading-snug text-white font-testSohne line-clamp-3 max-w-[90%]">
              {card.short_description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
