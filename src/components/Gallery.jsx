import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    { id: 1, src: "assets/images/gallery/pic1.jpg" },
    { id: 2, src: "assets/images/gallery/pic2.jpg" },
    { id: 3, src: "assets/images/gallery/pic3.jpg" },
    { id: 4, src: "assets/images/gallery/pic4.jpg" },
    { id: 5, src: "assets/images/gallery/pic5.jpg" },
    { id: 6, src: "assets/images/gallery/pic6.jpg" },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    const selectedImage = images.find(img => img.id === selectedId);

    return (
        <motion.div
            className="w-full h-full p-8 bg-slate-900 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-light text-center mb-12 text-purple-300 glow-text">Analysis of Happiness</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-20">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            layoutId={`card-${img.id}`}
                            onClick={() => setSelectedId(img.id)}
                            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-white/5 bg-black/50"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
                        >
                            <img
                                src={img.src}
                                alt="Gallery"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => { e.target.src = `https://placehold.co/400x400/101010/FFF?text=Pic+${img.id}`; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-sm font-medium text-white">Click to view</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-slate-800 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={selectedImage.src}
                                    alt="Full view"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = `https://placehold.co/800x600/101010/FFF?text=Pic+${selectedId}`; }}
                                />
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            {/* Descriptions Removed as requested */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
