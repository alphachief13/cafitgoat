"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { videosData } from "@/data/main-content";
import BlurText from "./BlurText";
import { Play, PlayCircle } from "lucide-react";

type Video = {
  videoThumb: string;
  videoLink: string;
  videoName: string;
};

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const categories: { title: string; data: Video[] }[] = [
    {
      title: "Gameplay with commentary",
      data: videosData.gameplayWithCommentary,
    },
    {
      title: "Gameplay without commentary",
      data: videosData.gameplayWithoutCommentary,
    },
    { title: "Memes", data: videosData.memes },
    { title: "Clip compilation", data: videosData.clipCompilation },
    { title: "Acting / ARG / Story", data: videosData.acting },
    { title: "Shorts", data: videosData.shorts },
  ];

  return (
    <div className="space-y-16 p-6">
      {categories.map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <BlurText
            text={category.title}
            delay={250}
            animateBy="words"
            direction="bottom"
            className="text-3xl font-bold mb-6 text-white tracking-tight"
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {category.data.map((video, j) => {
              const videoId =
                new URL(video.videoLink).searchParams.get("v") ||
                video.videoLink.split("/").pop();

              return (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-2xl overflow-hidden shadow-lg bg-[#1a1a1a] text-white cursor-pointer group relative"
                  onClick={() => setActiveVideo(videoId ?? null)}
                >
                  <img
                    src={video.videoThumb}
                    alt={video.videoName}
                    className="w-full h-48 object-cover transition group-hover:opacity-80"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-lg line-clamp-2">
                      {video.videoName}
                    </p>
                  </div>
                  {/* Overlay play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-3">
                      <PlayCircle />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Modal com animação */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[90%] md:w-[70%] lg:w-[55%] relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <button
                className="absolute -top-10 right-0 text-white text-3xl hover:scale-110 transition"
                onClick={() => setActiveVideo(null)}
              >
                ✖
              </button>
              <iframe
                className="w-full aspect-video rounded-xl shadow-2xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
