import Image from "next/image";

const footerColumns = [
    {
        title: "IRCTC Trains",
        items: [
            "Salient Features",
            "Ticket Cancellation Rules",
            "Foreign Tourist T&C",
            "Group Booking T&C",
            "Travel Insurance Claim Process",
        ],
    },
    {
        title: "How To",
        items: [
            "Register",
            "Book E-ticket (PDF)",
            "Book Tatkal Ticket",
            "Cancel E-ticket",
            "International User Registration Guide",
            "Change Boarding Point",
            "Link Your Aadhaar",
            "File TDR",
        ],
    },
    {
        title: "E-Wallet",
        items: ["About", "IRCTC Co-branded Card Benefits", "IRCTC SBI Loyalty Program"],
    },
    {
        title: "For Newly Migrated Agents",
        items: [
            "Login Manual - from old site to new site",
            "Operating Manual for new e-ticketing website",
            "Operating Manual for Agent Interface Application",
            "Application",
        ],
    },
    {
        title: "Help & Support",
        items: [
            "E-Partner",
            "Book E-Party Food",
            "Cancel E-Party Food",
            "E-Party Cancellation Refund Rules",
            "E-Party FAQs",
            "Terms & Conditions",
        ],
    },
    {
        title: "General Information",
        items: [
            "More Info",
            "FAQs",
            "Terms & Conditions",
            "Travel Insurance T&C",
            "FTR T&C",
            "Scheme for issue of waitlisted E-tickets",
            "Protect against fraudulent emails",
            "General Guidelines for SUVIDHA trains",
        ],
    },
    {
        title: "Important Information",
        items: [
            "Bank Transaction Charges",
            "Women Sr. Citizen Concession",
            "VIKALP Scheme",
            "Travel insurance (incl. of GST)",
            "Browser Settings",
        ],
    },
    {
        title: "IRCTC Official App",
        items: [
            "IRCTC Rail Connect (Android)",
            "IRCTC Rail Connect (iOS)",
            "IRCTC Order Food (Android)",
            "IRCTC Order Food (iOS)",
            "IRCTC Tourism App",
            "IRCTC Air App (Android)",
            "IRCTC Air App (iOS)",
            "IRCTC iMudra (Android)",
        ],
    },
    {
        title: "Advertise with us",
        items: [
            "IRCTC Marketing Statistics",
            "Banner Advertisement",
            "Advertisement Terms & Conditions",
            "Banner Locations on IRCTC",
        ],
    },
    {
        title: "Mobile Zone",
        items: [
            "IRCTC Android App - IRCTC Rail Connect",
            "ClearTrip",
            "Airtel",
            "Amazon India - Shop & Pay",
            "ConfirmTkt",
            "EaseMyTrip Flight, Hotel, Train",
            "Google Pay",
            "Goibibo",
            "MakeMyTrip",
        ],
    },
    {
        title: "IRCTC-iPAY Payment Gateway",
        items: [
            "IRCTC-iPAY (PDF) (VIDEO)",
            "AutoPay",
        ],
    },
    {
        title: "IRCTC Zone",
        items: [
            "Jago यात्री Jago",
            "IRCTC Hotels",
            "IRCTC eCatering",
            "IRCTC Tourism",
            "IRCTC Cruises",
        ],
    },
    {
        title: "Policies",
        items: [
            "Agent Principal Norms",
            "Policies for Ticketing + Reservation",
            "Ticketing + Reservation rules",
            "System Ticketing + Reservation",
        ],
    },
    {
        title: "Dummy Dropdown One",
        items: ["Placeholder item 1", "Placeholder item 2", "Placeholder item 3"],
    },
    {
        title: "Dummy Dropdown Two",
        items: ["Placeholder item 4", "Placeholder item 5", "Placeholder item 6"],
    },
    {
        title: "Dummy Dropdown Three",
        items: ["Placeholder item 7", "Placeholder item 8", "Placeholder item 9"],
    },
];

const extraColumns = [
    {
        title: "Dummy Dropdown One",
        items: ["Placeholder item 1", "Placeholder item 2", "Placeholder item 3"],
    },
    {
        title: "Dummy Dropdown Two",
        items: ["Placeholder item 4", "Placeholder item 5", "Placeholder item 6"],
    },
    {
        title: "Dummy Dropdown Three",
        items: ["Placeholder item 7", "Placeholder item 8", "Placeholder item 9"],
    },
];

function FooterSection({
    title,
    items,
    defaultOpen = true,
}: {
    title: string;
    items: string[];
    defaultOpen?: boolean;
}) {
    return (
        <details className="group" open={defaultOpen}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[12px] font-bold uppercase tracking-wide text-white/95">
                <span>{title}</span>
                <span className="text-sm transition-transform duration-200 group-open:rotate-180">⌄</span>
            </summary>
            <div className="mt-3 space-y-1.5">
                {items.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="block text-[11px] leading-5 text-white/80 transition-colors hover:text-white hover:underline"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </details>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#2c1e55] text-white">
            <div className="mx-auto max-w-350 px-4 py-8 md:px-6 lg:px-8 lg:py-10">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
                    {footerColumns.map((column, index) => (
                        <FooterSection
                            key={column.title}
                            title={column.title}
                            items={column.items}
                            defaultOpen={index < 5}
                        />
                    ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="flex items-center gap-3">
                            <Image src="/image.png" alt="IRCTC" width={54} height={54} className="h-12 w-12 rounded-full bg-white/5 p-1" />
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">Official Railway Partner</p>
                                <p className="text-sm font-bold">IRCTC India</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-white/80">
                            {[
                                "Visa",
                                "MasterCard",
                                "Amex",
                                "RuPay",
                                "Verified by Visa",
                                "SafeKey",
                                "IRCTC",
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="text-center text-[10px] leading-4 text-white/70 lg:text-right">
                            <p>Copyright © 2026 - www.irctc.co.in. All Rights Reserved</p>
                            <p>Designed and Hosted by CRIS</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {extraColumns.map((column, index) => (
                        <FooterSection
                            key={column.title}
                            title={column.title}
                            items={column.items}
                            defaultOpen={index === 0}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}