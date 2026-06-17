"use client"
import Image from "next/image";
import { LuHouse, LuMenu, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";

function formatDateTime(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return `${day}-${month}-${year} [${time}]`;
}

export default function Navbar() {

    const [time, setTime] = useState(() => formatDateTime(new Date()));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatDateTime(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-3 py-3 sm:px-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center justify-between gap-3 lg:justify-start">
                    <Image
                        className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14"
                        src="/rail.png"
                        alt="IRCTC logo"
                        width={80}
                        height={80}
                        priority
                    />
                    <div className="lg:hidden">
                        <p className="text-2xl text-center font-bold uppercase tracking-[0.24em] bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">IRCTC</p>
                        <p className="text-xs text-slate-500">Travel made simple</p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:bg-slate-100 hover:shadow-md lg:hidden"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
                    >
                        {isMenuOpen ? <LuX className="text-xl transition-transform duration-300" /> : <LuMenu className="text-xl transition-transform duration-300" />}
                    </button>
                </div>

                <div className="flex flex-col gap-2 lg:flex-1 lg:items-center">
                    <div className={`grid transition-all duration-300 ease-in-out lg:grid-rows-[1fr] lg:opacity-100 ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <nav aria-label="Primary" className="w-full overflow-hidden lg:overflow-visible">
                            <div className="flex flex-col gap-3 lg:flex-col">
                                <div className="hidden flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-2 text-[11px] text-slate-600 transition-all duration-300 lg:border-0 lg:bg-transparent lg:justify-center sm:text-xs lg:flex lg:order-first">
                                    <div className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700 transition-all duration-300" suppressHydrationWarning>{time}</div>
                                    <div className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 hover:border-slate-400">A <span className="text-xs">-</span></div>
                                    <div className="rounded-full border border-slate-200 px-3 py-1 font-medium transition-all duration-300 hover:border-slate-400">A</div>
                                    <div className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 hover:border-slate-400">A <span className="text-xs">+</span></div>
                                    <div className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700 transition-all duration-300 hover:bg-slate-200">हिन्दी/English</div>
                                </div>
                                <ul className="flex flex-col gap-1 rounded-3xl border border-slate-200 bg-slate-50 p-2 text-sm font-medium text-slate-700 transition-all duration-300 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0">
                                    <li><a className="flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#"><LuHouse aria-hidden="true" /></a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#services">TRAINS</a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#services">MEALS</a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#services">LOYALTY</a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#services">E-Wallet</a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#services">OTHER SERVICES</a></li>
                                    <li><a className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 hover:scale-105" href="#footer">CONTACT US</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <Image
                    className="hidden h-12 w-12 shrink-0 rounded-full object-contain lg:block lg:h-14 lg:w-14"
                    src="/image.png"
                    alt="IRCTC emblem"
                    width={80}
                    height={80}
                    priority
                />
            </div>
        </header>
    )
}