import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen } from 'lucide-react';

const Story = () => {
    return (
        <motion.div
            className="w-full h-full bg-slate-950 text-white flex flex-col md:flex-row items-center justify-center p-6 gap-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* 1. L2 Image Section (Now First) */}
            <div className="flex-1 max-w-md w-full bg-[#fffcf5] text-slate-800 p-2 rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_2rem]"></div>
                <img
                    src="assets/documents/l2.jpeg"
                    alt="Letter 2"
                    className="w-full h-full object-contain max-h-[60vh]"
                    onError={(e) => { e.target.src = "https://placehold.co/400x500?text=Letter+2"; }}
                />
            </div>

            {/* 2. Letter and Story Buttons Section (Now Second) */}
            <div className="flex-1 max-w-md w-full bg-purple-900/20 border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
                <BookOpen size={48} className="text-purple-300 mb-4" />
                <h2 className="text-2xl font-light text-purple-100 mb-2">Our Story & Letters</h2>
                <p className="text-gray-400 mb-6">Unfolding the chapters...</p>

                <div className="flex flex-col gap-4 w-full">
                    <a
                        href="assets/documents/Letter.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white hover:bg-gray-200 text-purple-900 font-bold rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                        <FileText size={18} /> Read Letter
                    </a>

                    <a
                        href="assets/documents/Janma.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                    >
                        <FileText size={18} /> Read Janma (Story)
                    </a>
                </div>
            </div>

        </motion.div>
    );
};

export default Story;
