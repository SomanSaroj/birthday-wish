import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users } from 'lucide-react';

const Finale = () => {
    const [showCredits, setShowCredits] = useState(false);

    return (
        <motion.div
            className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#05020a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Lamps (Wind Effect) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Generate multiple lamps randomly positioned */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-500 blur-xl opacity-40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                        }}
                        animate={{
                            x: [0, 20, -20, 0],
                            y: [0, -10, 10, 0],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 0.9, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="z-10 text-center space-y-8 max-w-4xl p-6">

                {/* Dialogue */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-3xl font-serif text-yellow-100 italic glow-text"
                >
                    "Light is not just about brightness... <br />
                    It's about the warmth it brings to the heart."
                </motion.p>

                {/* Blasting Crackers Text */}
                <div className="relative">
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 200 }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-[0_0_25px_rgba(234,88,12,0.8)] mb-4"
                    >
                        HAPPY BIRTHDAY!
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="text-6xl md:text-8xl italic text-white tracking-widest glow-text"
                        style={{ fontFamily: '"Georgia", "Times New Roman", serif', fontStyle: 'italic', textShadow: '0 0 30px rgba(168,85,247,0.6)' }}
                    >
                        SASIKALA
                    </motion.h2>
                </div>

                {/* C2 Image REMOVED per user request */}

                {/* Credits Button */}
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4 }}
                    onClick={() => setShowCredits(true)}
                    className="mt-12 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-300 hover:bg-white/20 transition-all flex items-center gap-2 mx-auto"
                >
                    <Users size={18} /> View Credits
                </motion.button>

            </div>

            {/* Credits Modal */}
            <AnimatePresence>
                {showCredits && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowCredits(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-black/80 border border-white/10 rounded-2xl p-8 max-w-lg w-full text-center relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowCredits(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-light text-purple-300 mb-8 tracking-widest uppercase">Cast & Crew</h3>

                            <div className="space-y-4 text-gray-300">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Story</span>
                                    <span className="font-medium">Soman</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Screenplay & Writing</span>
                                    <span className="font-medium">Manasa</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Dubbing</span>
                                    <span className="font-medium">Khamurun</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Cinematographer</span>
                                    <span className="font-medium">Kankshitha</span>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <span className="text-purple-400">Directed by</span>
                                    <span className="font-bold text-lg text-white">Y Soman Saroj</span>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Finale;
