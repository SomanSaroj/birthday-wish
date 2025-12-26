import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <div className="relative w-64 h-64 mb-8">
                {/* Spinner Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10">
                    <img
                        src="assets/images/hero/loading.jpg"
                        alt="Loading..."
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://placehold.co/400x400/101010/FFF?text=Loading..."; }}
                    />
                </div>
            </div>

            <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl font-light text-purple-200 tracking-widest uppercase"
            >
                Loading Memories...
            </motion.h2>
        </motion.div>
    );
};

export default Loading;
