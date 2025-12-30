"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/hero-image.png";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
            {/* Soft Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-xs font-black tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                            30+ Years of Professional Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-slate-900">
                            Expert Canadian <br />
                            <span className="text-primary">Tax Services</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Navigate the complexities of Canadian taxes with confidence.
                            Specializing in Personal (T1) and Corporate (T2) tax returns
                            delivered with precision and care.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#contact"
                                className="group w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
                            >
                                Book a Consultation
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#services"
                                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg border-2 border-slate-100 hover:bg-slate-50 transition-all text-center text-slate-700"
                            >
                                View Services
                            </Link>
                        </div>

                        <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 size={20} className="text-primary" />
                                CRA Compliant
                            </div>
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 size={20} className="text-primary" />
                                Error-Free
                            </div>
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 size={20} className="text-primary" />
                                Maximum Returns
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="flex-1 relative w-full lg:max-w-xl"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,64,175,0.2)] border-[16px] border-white ring-1 ring-slate-100">
                        <Image
                            src={heroImage}
                            alt="Bharat Patel Professional Accounting Services"
                            className="w-full h-auto object-cover aspect-[4/5]"
                            priority
                        />
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-slate-50 flex items-center gap-5">
                        <div className="text-5xl font-black text-primary">30+</div>
                        <div className="text-[11px] uppercase tracking-[0.25em] font-black text-slate-400 leading-tight">
                            Years of<br />Excellence
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="absolute -top-8 -right-8 bg-accent text-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:flex flex-col items-center justify-center min-w-[140px]">
                        <div className="text-sm font-black uppercase tracking-widest mb-1">CRA</div>
                        <div className="text-[10px] font-bold opacity-80 uppercase tracking-widest text-center">Certified<br />Expert</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
