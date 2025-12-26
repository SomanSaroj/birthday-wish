import React from 'react';
import { motion } from 'framer-motion';

const FriendsVideo = () => {
    return (
        <motion.div
            className="w-full h-full bg-black text-white flex flex-col items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-purple-300 glow-text mb-2">A Special Message</h2>
                <p className="text-gray-400 italic">"Voices that matter..."</p>
            </div>

            <div className="max-w-4xl w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-white/10 relative">
                <video
                    controls
                    className="w-full h-full object-cover"
                    preload="auto"
                    playsInline
                >
                    {/* Using spl1.mp4 as requested */}
                    <source src="assets/videos/friends/spl1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </motion.div>
    );
};

export default FriendsVideo;
