import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loading from './components/Loading';
import Dialogue from './components/Dialogue';
import Gallery from './components/Gallery';
import Dance from './components/Dance';
import Story from './components/Story';
import FriendsVideo from './components/FriendsVideo';
import Finale from './components/Finale';
import Navigation from './components/Navigation';

const pages = [
    'loading',
    'dialogue_intro',
    'dialogue_extended',
    'gallery',
    'dance',
    'story',
    'friends_video',
    'finale'
];

function App() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = pages[currentPageIndex];

    useEffect(() => {
        // Handling Loading Screen logic
        if (currentPage === 'loading') {
            const timer = setTimeout(() => {
                handleNext();
            }, 3500); // 3s loading + buffer
            return () => clearTimeout(timer);
        }
    }, [currentPage]);

    const handleNext = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    return (
        <div className="w-full h-screen bg-slate-900 text-white overflow-hidden relative font-sans">

            {/* 
        Laptop/Desktop Restriction Overlay 
        Visible only on screens smaller than 'lg' (1024px)
      */}
            <div className="lg:hidden fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💻</span>
                </div>
                <h1 className="text-2xl font-bold text-red-500 mb-4">Laptop/Desktop Only</h1>
                <p className="text-gray-300 max-w-xs mx-auto">
                    This experience is designed for a larger screen. Please open this app on a Laptop or Desktop for the best experience.
                </p>
            </div>

            {/* Main Content - Hidden on small screens */}
            <div className="w-full h-full hidden lg:block">
                <AnimatePresence mode="wait">
                    {currentPage === 'loading' && (
                        <Loading key="loading" />
                    )}

                    {currentPage === 'dialogue_intro' && (
                        <Dialogue key="dialogue_intro" phase="intro" />
                    )}

                    {currentPage === 'dialogue_extended' && (
                        <Dialogue key="dialogue_extended" phase="extended" />
                    )}

                    {currentPage === 'gallery' && (
                        <Gallery key="gallery" />
                    )}

                    {currentPage === 'dance' && (
                        <Dance key="dance" />
                    )}

                    {currentPage === 'story' && (
                        <Story key="story" />
                    )}

                    {currentPage === 'friends_video' && (
                        <FriendsVideo key="friends_video" />
                    )}

                    {currentPage === 'finale' && (
                        <Finale key="finale" />
                    )}
                </AnimatePresence>

                {/* Navigation Buttons (only show if not loading and not finale) */}
                {currentPage !== 'loading' && currentPage !== 'finale' && (
                    <Navigation onNext={handleNext} onPrev={handlePrev} showNext={currentPageIndex < pages.length - 1} showPrev={currentPageIndex > 1} />
                )}
            </div>
        </div>
    );
}

export default App;
