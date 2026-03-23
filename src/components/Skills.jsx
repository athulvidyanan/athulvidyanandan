import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            icon: <Code className="text-purple-400" size={24} />,
            skills: [
                { name: "Python", level: 90 },
                { name: "C", level: 75 },
                { name: "Java", level: 60 },
                { name: "JavaScript / HTML / CSS", level: 70 }
            ]
        },
        {
            title: "Data",
            icon: <Database className="text-violet-400" size={24} />,
            skills: [
                { name: "SQL", level: 95 },
                { name: "Data Analytics", level: 90 },
                { name: "Data Visualization", level: 85 },
                { name: "Big Data processing", level: 80 }
            ]
        },
        {
            title: "Cloud",
            icon: <Cloud className="text-purple-400" size={24} />,
            skills: [
                { name: "AWS", level: 85 },
                { name: "Cloud Architecture", level: 75 },
                { name: "Data Warehousing", level: 80 },
                { name: "DevOps Basics", level: 65 }
            ]
        },
        {
            title: "Tools & Others",
            icon: <Wrench className="text-violet-400" size={24} />,
            skills: [
                { name: "GitHub / Git", level: 90 },
                { name: "Jupyter / Colab", level: 95 },
                { name: "Video Editing", level: 80 },
                { name: "Security Engineering", level: 60 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-black/50">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className="p-2 bg-black/40 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-sm text-purple-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-black/60 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
