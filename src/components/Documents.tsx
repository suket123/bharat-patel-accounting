"use client";

import { useState } from "react";
import { Check, ClipboardList, Briefcase, GraduationCap } from "lucide-react";

const personalDocs = [
    "Government-issued photo ID",
    "Social Insurance Number (SIN)",
    "T4 slips (Employment income)",
    "T5 slips (Investment income)",
    "T3 slips (Trust income)",
    "RRSP contribution receipts",
    "Tuition slips (T2202)",
    "Medical expense receipts",
    "Childcare expense receipts",
    "Rental income and expense records",
    "Notice of Assessment from last year",
];

const corporateDocs = [
    "Income Statement & Balance Sheet",
    "General ledger / bookkeeping records",
    "Corporate tax installment details",
    "T4/T5 summaries issued by the corp",
    "Shareholder information",
    "CRA correspondence (if any)",
];

const studentDocs = [
    "T2202 - Tuition and Enrolment Certificate",
    "TL11A/B/C - Tuition for studies outside Canada",
    "Student loan interest receipts",
    "Scholarship/Bursary slips (T4A)",
    "Public transit tax credit (if applicable)",
    "Moving expenses (if for school > 40km)",
    "Rent receipts / Property tax (for Ontario Credits)",
    "Part-time employment slips (T4)",
];

export default function Documents() {
    const [activeTab, setActiveTab] = useState<"personal" | "corporate" | "student">("personal");

    const getTitle = () => {
        switch (activeTab) {
            case "personal": return "T1 Required Documents";
            case "corporate": return "T2 Required Documents";
            case "student": return "Documents for Students";
        }
    };

    const getDocs = () => {
        switch (activeTab) {
            case "personal": return personalDocs;
            case "corporate": return corporateDocs;
            case "student": return studentDocs;
        }
    };

    return (
        <section id="documents" className="section-padding bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Tax Checklist</h2>
                        <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-xl">
                            Be prepared for your appointment. Review the list of documents required for us to process your tax return efficiently and accurately.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <button
                                onClick={() => setActiveTab("personal")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "personal"
                                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                                    : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-200"
                                    }`}
                            >
                                <ClipboardList size={20} />
                                Personal
                            </button>
                            <button
                                onClick={() => setActiveTab("corporate")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "corporate"
                                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                                    : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-200"
                                    }`}
                            >
                                <Briefcase size={20} />
                                Corporate
                            </button>
                            <button
                                onClick={() => setActiveTab("student")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "student"
                                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                                    : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-200"
                                    }`}
                            >
                                <GraduationCap size={20} />
                                Students
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 min-h-[500px]">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                {getTitle()}
                            </h3>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                                {getDocs().map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group">
                                        <div className="mt-1 bg-accent/10 p-1 rounded-full group-hover:bg-accent transition-colors">
                                            <Check size={14} className="text-accent group-hover:text-white" />
                                        </div>
                                        <span className="text-slate-600 text-sm md:text-base leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-slate-400 text-sm italic">
                                    * If you are unsure about any document, please contact us prior to your appointment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
