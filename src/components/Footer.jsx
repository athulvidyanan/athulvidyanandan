import React from 'react';
import { GitBranch, Briefcase, Camera, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black/80 border-t border-white/10 py-12 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-2">
                        Athul<span className="text-purple-500">.</span>
                    </a>
                    <p className="text-gray-400 text-sm text-center md:text-left max-w-sm">
                        Data Analyst & Big Data Engineer building modern, scalable data solutions.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/athulvidyanan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                        <GitBranch size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/athul-vidyanandan-45953728a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                        <Briefcase size={20} />
                    </a>
                    <a href="https://www.instagram.com/unfilteredatul/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300">
                        <Camera size={20} />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Athul. All rights reserved.
                </p>

                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                    Back to top <ArrowUp size={16} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
