"use client"
import Image from "next/image";
import { LuHouse } from "react-icons/lu";
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

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatDateTime(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-between w-full h-min bg-gray-100">
            <Image
                className="w-16 h-16 m-4"
                src="/rail.png"
                alt="Next.js logo"
                width={80}
                height={80}
                priority
            />
            <div>
                <div className="accesibilites px-4 flex w-full justify-center text-sm">
                    <div className="m-2 px-2">{time}</div>
                    <div className="m-2 px-2 border rounded">A <span className="text-sm">-</span></div>
                    <div className="m-2 px-2 border rounded">A</div>
                    <div className="m-2 px-2 border rounded">A <span className="text-sm">+</span></div>
                    <div className="m-2 px-2">हिन्दी/English</div>
                </div>
                <div className="links flex">
                    <ul className="list-none flex justify-center w-full text-sm p-2">
                        <li><a className="p-2 pt-0 flex justify-center items-center" href="#"><LuHouse /></a></li>
                        <li><a className="p-2" href="#">TRAINS</a></li>
                        <li><a className="p-2" href="#">MEALS</a></li>
                        <li><a className="p-2" href="#">LOYALTY</a></li>
                        <li><a className="p-2" href="#">E-Wallet</a></li>
                        <li><a className="p-2" href="#">OTHER SERVICES</a></li>
                        <li><a className="p-2" href="#">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
            <Image
                className="w-16 h-16 m-4"
                src="/image.png"
                alt="Next.js logo"
                width={80}
                height={80}
                priority
            />
        </div>
    )
}