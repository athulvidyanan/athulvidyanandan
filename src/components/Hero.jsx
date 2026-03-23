import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                            Athul
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
                        Data Analyst | Big Data Engineer | Content Creator
                    </h2>

                    <p className="text-gray-500 max-w-lg mb-8 text-lg">
                        I transform complex data into actionable insights and build scalable data architectures to drive business value.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 font-medium group"
                        >
                            View Projects
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-all duration-300 font-medium"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Hero Visual/Graphic Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center items-center"
                >
                    <div className="w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center relative bg-gradient-to-tr from-purple-900/20 to-transparent backdrop-blur-3xl shadow-2xl">
                        {/* Animated floating elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-20 h-20 bg-violet-600/30 rounded-2xl blur-xl"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 w-24 h-24 bg-purple-600/30 rounded-full blur-xl"
                        />

                        {/* Profile Image */}
                        <div className="w-72 h-72 rounded-full border-2 border-purple-500/30 overflow-hidden bg-black/50 backdrop-blur-sm flex items-center justify-center">
                            <img src="/profile.jpg" alt="Athul" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
