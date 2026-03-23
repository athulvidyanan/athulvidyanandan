import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Data Analyst",
            company: "IBM",
            period: "2020 - Present",
            description: "Led data analytics initiatives, optimized ETL pipelines resulting in 30% faster data processing, and built comprehensive dashboards using Tableau and Python to drive business decisions.",
            skills: ["Python", "SQL", "Tableau", "AWS"]
        },
        {
            title: "Freelance Data Analyst & Creator",
            company: "Self-Employed",
            period: "2019 - Present",
            description: "Delivering freelance data analytics solutions for various clients. Additionally, managing a content creation platform focused on travel and lifestyle, utilizing video editing and design tools.",
            skills: ["Analytics", "Video Editing", "Content Strategy", "Design"]
        }
    ];

    const certifications = [
        {
            name: "AWS Certified Data Engineer",
            issuer: "Amazon Web Services",
            date: "2023"
        },
        {
            name: "IBM Data Science Professional Certificate",
            issuer: "IBM",
            date: "2021"
        }
    ];

    return (
        <section id="experience" className="py-24 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Experience Timeline */}
                <div>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Experience</span>
                        </h2>
                    </div>

                    <div className="space-y-8 relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10 hidden md:block"></div>

                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="relative pl-0 md:pl-16"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[20px] top-6 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] hidden md:block"></div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={14} className="text-purple-400" />
                                            {exp.company}
                                        </span>
                                        <span className="hidden sm:inline text-gray-600">•</span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} className="text-purple-400" />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-black/40 text-purple-300 text-xs rounded-full border border-purple-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Certifications</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <div className="w-6 h-6 bg-purple-400 rounded-sm"></div> {/* Placeholder for certification badge/icon */}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                    <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs text-nowrap">Issued {cert.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
