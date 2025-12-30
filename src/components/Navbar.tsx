"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calculator } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Documents", href: "#documents" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-md" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-accent transition-colors">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <span className="text-xl font-bold tracking-tight block leading-tight text-slate-900"> Bharat Patel </span>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold block"> Accountant </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-accent transition-all hover:shadow-lg active:scale-95"
                    >
                        Get Help Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl py-8 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-bold text-slate-800"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-6 py-4 rounded-2xl text-center font-bold mt-4 shadow-lg shadow-primary/20"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
}
