"use client";

import { motion } from "framer-motion";
import { User, Building2, BarChart3, ReceiptText } from "lucide-react";

const services = [
    {
        title: "Personal Tax Returns (T1)",
        description: "Comprehensive tax preparation for individuals, ensuring maximum refunds and full CRA compliance. We handle all slips, credits, and deductions.",
        icon: <User className="text-primary" size={32} />,
    },
    {
        title: "Corporate Tax Returns (T2)",
        description: "Expert tax filing for Canadian corporations. We optimize your business tax position and ensure timely filing to avoid penalties.",
        icon: <Building2 className="text-primary" size={32} />,
    },
    {
        title: "Financial Consulting",
        description: "Year-round guidance to help you make informed financial decisions and stay prepared for the upcoming tax season.",
        icon: <BarChart3 className="text-primary" size={32} />,
    },
    {
        title: "CRA Correspondence",
        description: "Professional representation and assistance in responding to CRA inquiries, audits, or clarification requests.",
        icon: <ReceiptText className="text-primary" size={32} />,
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block">What We Offer</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-tight">Professional Services</h2>
                    <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8" />
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                        Tailored accounting solutions designed to meet the unique financial needs of individuals and corporations in Canada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 group"
                        >
                            <div className="mb-8 p-5 bg-white w-fit rounded-[1.5rem] shadow-sm group-hover:bg-primary transition-colors duration-500">
                                <div className="group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-5 text-slate-900 tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 text-base leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
