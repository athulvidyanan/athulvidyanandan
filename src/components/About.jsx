import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                                <img src="/profile.jpg" alt="Athul working" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Data Professional & Creator</h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a data-driven problem solver who believes in deep analysis as the foundation of everything I do—whether in technology, business, or real-world decision making. With experience in data analytics and cloud technologies, I focus on transforming complex data into meaningful insights that drive impact, building efficient solutions, automating processes, and continuously optimizing performance. Beyond analytics, I bring a creative perspective as a content creator, blending logic with creativity, while actively exploring DevOps, Security Engineering, and AI-driven automation to innovate and scale solutions.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Beyond the tech world, I am a passionate content creator focusing on travel and lifestyle,
                            bringing a creative edge to analytical problems. I also have strong interests in DevOps,
                            Security Engineering, and AI Automation.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <Briefcase className="text-purple-400 mb-3" size={24} />
                                <h4 className="font-medium text-white mb-1">Experience</h4>
                                <p className="text-sm text-gray-500">4+ Years</p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <Award className="text-violet-400 mb-3" size={24} />
                                <h4 className="font-medium text-white mb-1">Certified</h4>
                                <p className="text-sm text-gray-500">AWS Data Engineer</p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <Terminal className="text-purple-400 mb-3" size={24} />
                                <h4 className="font-medium text-white mb-1">Developer</h4>
                                <p className="text-sm text-gray-500">Full Tech Stack</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
