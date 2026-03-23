import React, { useState, useEffect } from 'react';
import { Menu, X, GitBranch, Briefcase, Camera } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/70 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter text-white">
                    <span className="text-purple-500">A</span>thul<span className="text-violet-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Socials */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com/athulvidyanan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <GitBranch size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/athul-vidyanandan-45953728a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Briefcase size={20} />
                    </a>
                    <a href="https://www.instagram.com/unfilteredatul/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Camera size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                        <a href="https://github.com/athulvidyanan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <GitBranch size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/athul-vidyanandan-45953728a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Briefcase size={24} />
                        </a>
                        <a href="https://www.instagram.com/unfilteredatul/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Camera size={24} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
