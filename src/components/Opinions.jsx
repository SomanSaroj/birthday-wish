import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Play } from 'lucide-react';

const Opinions = () => {
    return (
        <motion.div
            className="w-full h-full bg-slate-950 text-white overflow-y-auto p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-5xl mx-auto space-y-16 pb-20">

                {/* Header */}
                <div className="text-center space-y-4 pt-10">
                    <h2 className="text-3xl md:text-5xl font-light text-purple-300 glow-text">Words from the Heart</h2>
                    <p className="text-gray-400 italic">"Because you mean the world to us..."</p>
                </div>

                {/* Dance Videos Section */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-serif border-b border-purple-500/30 pb-2 inline-block">Grooves & Moves</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-800 rounded-xl overflow-hidden aspect-video shadow-lg border border-white/5 relative group">
                            {/* Placeholder for video */}
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster="/assets/images/hero/dance_poster.jpg"
                            >
                                <source src="/assets/videos/dance/dance1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="bg-zinc-800 rounded-xl overflow-hidden aspect-video shadow-lg border border-white/5 relative group">
                            <video
                                controls
                                className="w-full h-full object-cover"
                            >
                                <source src="/assets/videos/dance/dance2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                {/* Opinions/Wishes Section */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-serif border-b border-purple-500/30 pb-2 inline-block">Friends' Wishes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-zinc-900 rounded-xl p-4 border border-white/5 flex flex-col gap-4">
                                <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden relative">
                                    <video
                                        controls
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={`/assets/videos/friends/wish${i}.mp4`} type="video/mp4" />
                                    </video>
                                </div>
                                <p className="text-center text-sm text-gray-400">Friend #{i}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Story/Letter Section */}
                <section className="flex flex-col items-center justify-center space-y-6 bg-purple-900/20 rounded-3xl p-10 border border-purple-500/20">
                    <FileText size={48} className="text-purple-300" />
                    <h3 className="text-2xl font-light text-center">A Little Story for You</h3>
                    <p className="text-gray-300 text-center max-w-md">
                        I wrote something special. A story about us, about you, and about everything that matters.
                    </p>
                    <a
                        href="/assets/documents/story.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
                    >
                        Read the Story
                    </a>
                </section>

            </div>
        </motion.div>
    );
};

export default Opinions;
