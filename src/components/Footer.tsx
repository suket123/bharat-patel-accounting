import Link from "next/link";
import { Calculator } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-8">
                            <div className="bg-primary p-2.5 rounded-xl text-white">
                                <Calculator size={28} />
                            </div>
                            <div>
                                <span className="text-2xl font-black tracking-tighter block leading-none text-slate-900"> Bharat Patel </span>
                                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-black block mt-1"> Accountant </span>
                            </div>
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-10 text-lg font-medium leading-relaxed">
                            Trusted professional accounting and tax services for individuals and corporations.
                            Proudly serving the Scarborough community for over 10 years.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-sm text-slate-900 mb-8">Navigation</h4>
                        <ul className="space-y-5 text-slate-500 font-bold text-sm">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Bharat</Link></li>
                            <li><Link href="#documents" className="hover:text-primary transition-colors">Tax Checklist</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-sm text-slate-900 mb-8">Info</h4>
                        <ul className="space-y-5 text-slate-500 font-bold text-sm">
                            <li><Link href="tel:647-995-7907" className="hover:text-primary transition-colors">647-995-7907</Link></li>
                            <li><Link href="mailto:bpatel.acct@gmail.com" className="hover:text-primary transition-colors">bpatel.acct@gmail.com</Link></li>
                            <li><span className="text-slate-400">Scarborough, ON</span></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-400 text-sm font-bold tracking-wide">
                        © {new Date().getFullYear()} BHARAT PATEL ACCOUNTING. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">CRA</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
