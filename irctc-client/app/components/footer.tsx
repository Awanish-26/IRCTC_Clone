import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { footerCol, footerCol2, footerCol3, footerCol4, footerCol5 } from '@/app/util/data';


function FooterSection({ title, items }: { title: string; items: string[]; defaultOpen?: boolean; }) {
    return (
        <div className="group relative p-1">
            <button
                type="button"
                className="flex w-full cursor-default items-center justify-between rounded-md px-3 py-2 text-left text-[12px] font-bold uppercase tracking-wide text-white/95 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-haspopup="menu"
                aria-expanded="false"
            >
                <span className="pr-3">{title}</span>
                <span className="text-xl leading-none transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
                    <RiArrowDropDownLine />
                </span>
            </button>
            <div className="pointer-events-none absolute left-2 top-full z-20 w-max rounded border border-white/10 bg-[#3a2568] p-1 opacity-0 shadow-2xl shadow-black/30 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="space-y-1">
                    {items.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block rounded-md px-3 py-2 text-[11px] leading-5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#2c1e55] text-white overflow-x-hidden overflow-y-hidden h-screen">
            <div className="mx-auto max-w-350 px-4 py-8 md:px-6 lg:px-16 lg:py-10">
                <div className="flex justify-evenly">
                    <div>
                        {footerCol.map((column) => (
                            <FooterSection
                                key={column.title}
                                title={column.title}
                                items={column.items}
                                defaultOpen={false}
                            />
                        ))}
                    </div>
                    <div>
                        {footerCol2.map((column) => (
                            <FooterSection
                                key={column.title}
                                title={column.title}
                                items={column.items}
                                defaultOpen={false}
                            />
                        ))}
                    </div>
                    <div>
                        {footerCol3.map((column) => (
                            <FooterSection
                                key={column.title}
                                title={column.title}
                                items={column.items}
                                defaultOpen={false}
                            />
                        ))}
                    </div>
                    <div>
                        {footerCol4.map((column) => (
                            <FooterSection
                                key={column.title}
                                title={column.title}
                                items={column.items}
                                defaultOpen={false}
                            />
                        ))}
                    </div>
                    <div>
                        <a className="text-[14px] self-baseline items-center p-2 hover:underline" href="#">Help & Support</a>
                        {footerCol5.map((column) => (
                            <FooterSection
                                key={column.title}
                                title={column.title}
                                items={column.items}
                                defaultOpen={false}
                            />
                        ))}
                    </div>
                </div>

                {/* Last section */}
                <div className="mt-8 border-t border-white/10 pt-6 self-end">
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-white/80">
                            <Image className="w-full h-auto" src="/security.png" alt="Footer Image" width={500} height={50} />
                        </div>

                        <div className="text-center text-[10px] leading-4 text-white/70 lg:text-right">
                            <p>Copyright © 2026 - www.irctc.co.in. All Rights Reserved to Original Site</p>
                            <p>This is clone and build only for educational purposes</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}