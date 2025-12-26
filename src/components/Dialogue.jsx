import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Dialogue = ({ phase }) => {
    const isIntro = phase === 'intro';

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-900 to-slate-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Content Container */}
            <div className="max-w-4xl w-full flex flex-col items-center gap-8">

                {/* Images Area */}
                <div className="flex gap-4 items-center justify-center w-full">
                    {isIntro ? (
                        // Phase 1: Single Hero Image (hero)
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-white/10">
                            <img
                                src="assets/images/hero/hero.jpg"
                                alt="Hero"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://placehold.co/400x400/202020/FFF?text=Hero"; }}
                            />
                        </div>
                    ) : (
                        // Phase 2: Two Images (C1, C2)
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg border border-white/10"
                            >
                                <img
                                    src="assets/images/hero/C1.jpg"
                                    alt="Scene 1"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = "https://placehold.co/400x400/202020/FFF?text=C1"; }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg border border-white/10"
                            >
                                <img
                                    src="assets/images/hero/C2.jpg"
                                    alt="Scene 2"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = "https://placehold.co/400x400/202020/FFF?text=C2"; }}
                                />
                            </motion.div>
                        </>
                    )}
                </div>

                {/* Text Area */}
                <motion.div
                    className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-2xl relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {isIntro ? (
                        <div className="space-y-4">
                            <p className="text-xl md:text-2xl font-serif italic text-purple-200 leading-relaxed glow-text">
                                "Naaku telsina okaru chepparu... <br />
                                prathi photo venaka oka katha undali ani"
                            </p>
                            <p className="text-sm text-gray-400 font-light text-right">-- By Viraj</p>

                            {/* Click Next Animation */}
                            <motion.div
                                className="absolute -bottom-16 left-0 right-0 flex flex-col items-center pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
                                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                            >
                                <span className="text-xs text-purple-300 uppercase tracking-widest mb-1">Click Next</span>
                                <ChevronRight className="text-purple-300 w-6 h-6 animate-pulse" />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <motion.p
                                className="text-lg md:text-2xl font-light text-gray-200 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                "Kaani ikkada rendu photo la madhyalo oka kathaname kudirindhi"
                            </motion.p>

                            <motion.p
                                className="text-xl md:text-3xl font-serif text-yellow-200 glow-text"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2 }}
                            >
                                "Inka kathanayaki ni chuthamu rarandi"
                            </motion.p>

                            {/* Click Next Popup/Hint */}
                            <motion.div
                                className="mt-6 inline-block bg-purple-600/20 border border-purple-500/50 rounded-full px-4 py-1"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 4, type: "spring" }}
                            >
                                <span className="text-sm text-purple-200 flex items-center gap-2">
                                    Next Phase <ChevronRight size={14} />
                                </span>
                            </motion.div>
                        </div>
                    )}
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Dialogue;
