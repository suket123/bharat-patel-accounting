"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, MapPinned } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                            Decades of Expertise, <br />
                            Personalized for You
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Bharat Patel offers a wealth of knowledge with over <strong>30 years of accounting experience</strong>.
                            For the past <strong>10 years</strong>, he has specialized in the Canadian tax system,
                            helping thousands of clients in Scarborough and the Greater Toronto Area navigate their
                            financial obligations with ease.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Our firm is built on the pillars of <strong>accuracy, integrity, and client trust</strong>.
                            We don't just file tax returns; we provide strategic advice to minimize your
                            tax liability and ensure full compliance with the Canada Revenue Agency (CRA).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                    <Award className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">Expert Knowledge</h4>
                                    <p className="text-sm text-slate-500">Deep understanding of T1 and T2 tax forms and CRA regulations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                    <ShieldCheck className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">Trusted Advisor</h4>
                                    <p className="text-sm text-slate-500">A track record of 10+ years serving the Canadian community.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-premium border border-slate-100 flex flex-col justify-between"
                        >
                            <div className="text-4xl font-extrabold text-primary mb-2">30+</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">
                                Years of Total Experience
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-accent text-white p-8 rounded-3xl shadow-premium flex flex-col justify-between"
                        >
                            <div className="text-4xl font-extrabold mb-2">10+</div>
                            <div className="text-xs font-bold opacity-80 uppercase tracking-widest leading-tight">
                                Years in Canada
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="col-span-2 bg-primary text-white p-8 rounded-3xl shadow-premium flex items-center justify-between"
                        >
                            <div>
                                <div className="text-2xl font-bold mb-1">Scarborough, ON</div>
                                <div className="text-sm opacity-80 font-medium">Serving the GTA with pride</div>
                            </div>
                            <MapPinned size={40} className="opacity-30" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
