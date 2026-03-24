import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Database } from 'lucide-react';

const Projects = () => {
    const projectList = [
        {
            title: "AI Resume Screener",
            description: "Designed and developed an AI-powered resume screening system that analyzes candidate resumes using NLP techniques to match job requirements. The system automates shortlisting by extracting key skills, experience, and qualifications, improving recruitment efficiency and decision-making.",
            techStack: ["AWS Glue", "Python", "Redshift", "S3"],
            githubLink: "https://github.com/athulvidyanan/AI-Resume-Screener",
            liveLink: "#"
        },
        {
            title: "Technical Analysis Automation System",
            description: "Built an automated system that applies traditional technical analysis strategies to financial data, eliminating manual calculations. The system processes market indicators and generates actionable insights, improving accuracy and efficiency in trading decision-making.",
            techStack: ["React", "Python", "SQL", "Tableau"],
            githubLink: "",
            liveLink: "#"
        },
        {
            title: "Student Record Manager",
            description: "Developed a student record management system to efficiently store, manage, and retrieve student data. The application enables CRUD operations, ensuring organized data handling and improved accessibility for academic management.",
            techStack: ["Python", "scikit-learn", "Pandas", "Jupyter"],
            githubLink: "https://github.com/athulvidyanan/StudentRecordManager",
            liveLink: "#"
        },
        {
            title: "Automated Reporting Bot",
            description: "Created a Slack bot that automatically queries the data warehouse, generates data visualization charts, and posts daily summaries.",
            techStack: ["Python", "AWS Lambda", "Slack API", "SQL"],
            githubLink: "#",
            liveLink: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-300"></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                                        <Database size={24} className="group-hover:text-purple-300" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.githubLink} className="text-gray-400 hover:text-white transition-colors">
                                            <GitBranch size={20} />
                                        </a>
                                        {project.liveLink && (
                                            <a href={project.liveLink} className="text-gray-400 hover:text-purple-400 transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
