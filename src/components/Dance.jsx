import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const videos = [
    { id: 1, src: "/assets/videos/dance/V1.mp4", title: "Rhythm of Joy" },
    { id: 2, src: "/assets/videos/dance/V2.mp4", title: "Elegance in Motion" },
];

const Dance = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -100) {
            nextCard();
        } else if (info.offset.x > 100) {
            prevCard();
        }
    };

    return (
        <motion.div
            className="w-full h-full bg-slate-950 text-white flex flex-col items-center justify-center p-4 overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-3xl md:text-5xl font-light text-purple-300 glow-text text-center mb-8 z-10">Grace & Rhythm</h2>

            <div className="relative w-full max-w-md aspect-[9/16] md:aspect-video flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {videos.map((video, index) => {
                        if (index !== currentIndex) return null;

                        return (
                            <motion.div
                                key={video.id}
                                className="absolute w-full h-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                                initial={{ opacity: 0, x: 300, scale: 0.9, rotate: 10 }}
                                animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, x: -300, scale: 0.9, rotate: -10 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                whileTap={{ cursor: "grabbing" }}
                                style={{ cursor: "grab", zIndex: 10 }}
                            >
                                {/* Memory Optimization: Only render video if it's the current card */}
                                {index === currentIndex && (
                                    <video
                                        controls
                                        className="w-full h-full object-cover"
                                        playsInline
                                        preload="auto"
                                        poster="/assets/images/hero/dance_poster.jpg"
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
                                    <h3 className="text-lg font-medium text-white">{video.title}</h3>
                                    <p className="text-xs text-gray-400">Swipe for next video</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Swipe Indicators */}
            <div className="mt-8 flex gap-2 z-10">
                {videos.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-purple-500 w-8' : 'bg-white/20'}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-20 md:hidden text-gray-500 text-sm animate-pulse flex items-center gap-2">
                Swipe to navigate <ArrowRight size={14} />
            </div>

        </motion.div>
    );
};

export default Dance;
