import {
    FaPlane,
    FaHotel,
    FaUmbrellaBeach,
    FaTrain,
    FaMountain,
    FaFacebookF,
    FaWhatsapp,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane,
    FaPinterestP,
    FaTumblr,
    FaSnapchatGhost,
    FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { LuTrainFront, LuBus } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { TbChartArcs } from "react-icons/tb";

const services = [
    { label: "FLIGHTS", icon: FaPlane },
    { label: "HOTELS", icon: FaHotel },
    { label: "RAIL DRISHTI", icon: TbChartArcs },
    { label: "E-CATERING", icon: MdOutlineDeliveryDining },
    { label: "BUS", icon: LuBus },
    { label: "HOLIDAY PACKAGES", icon: FaUmbrellaBeach },
    { label: "TOURIST TRAIN", icon: LuTrainFront },
    { label: "HILL RAILWAYS", icon: FaMountain },
    { label: "CHARTER TRAIN", icon: FaTrain },
    { label: "GALLERY", icon: GrGallery },
];

const holidayPackages = [
    {
        title: "Maharajas' Express",
        image: "/maharaja.jpg",
        description:
            "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.",
    },
    {
        title: "International Packages",
        image: "/Thailand.jpg",
        description:
            "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
    },
    {
        title: "Domestic Air Packages",
        image: "/banner_train.jpg",
        description:
            "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
    },
    {
        title: "Bharat Gaurav Tourist Train",
        image: "/Bharat_Gaurav.jpg",
        description:
            "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.",
    },
    {
        title: "Rail Tour Packages",
        image: "/Kashmir.jpg",
        description:
            "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.",
    },
];

const socialNetworks = [
    { label: "Facebook", icon: FaFacebookF, className: "bg-[#3b5998]", link: 'https://www.facebook.com/IRCTCofficial/' },
    { label: "WhatsApp", icon: FaWhatsapp, className: "bg-[#25D366]", link: 'https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P' },
    { label: "YouTube", icon: FaYoutube, className: "bg-[#FF0000]", link: 'https://youtube.com/c/IRCTCOFFICIAL' },
    { label: "Instagram", icon: FaInstagram, className: "bg-[#517fa4]", link: 'https://instagram.com/irctc.official?igshid=yyg5byow704l' },
    { label: "LinkedIn", icon: FaLinkedinIn, className: "bg-[#0A66C2]", link: 'https://www.linkedin.com/company/irctcofficial' },
    { label: "Telegram", icon: FaTelegramPlane, className: "bg-[#2AABEE]", link: 'https://t.me/IRCTC_Official' },
    { label: "Pinterest", icon: FaPinterestP, className: "bg-[#BD081C]", link: 'https://in.pinterest.com/irctcofficial/' },
    { label: "Tumblr", icon: FaTumblr, className: "bg-[#36465D]", link: 'https://irctcofficial.tumblr.com/' },
    { label: "Snapchat", icon: FaSnapchatGhost, className: "bg-[#FFFC00] text-black", link: 'https://www.kooapp.com/profile/irctcofficial' },
    { label: "Twitter", icon: FaTwitter, className: "bg-[#1DA1F2]", link: 'https://twitter.com/IRCTCofficial' },
];

export default function Travel() {
    return (
        <div className="bg-slate-50">
            <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Services</p>
                    <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                        Have you not found the right one?
                        <br />
                        Find a service suitable for you here.
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {services.map(({ label, icon: Icon }) => (
                        <div key={label} className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-3xl text-slate-800 transition-colors hover:bg-cyan-500 hover:text-white">
                                <Icon />
                            </div>
                            <p className="mt-3 text-center text-xs font-semibold tracking-wide text-slate-700">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Holiday Part */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-center text-xl font-extrabold uppercase tracking-[0.3em] text-slate-900 md:text-2xl">
                    Holidays
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {holidayPackages.map((packageItem) => (
                        <article
                            key={packageItem.title}
                            className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-52 w-full overflow-hidden sm:h-56">
                                <Image
                                    src={packageItem.image}
                                    alt={packageItem.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 1280px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                            </div>

                            <div className="flex min-h-44 flex-col px-4 py-4">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {packageItem.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {packageItem.description}
                                </p>
                                <a
                                    href="#"
                                    className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wide text-cyan-700 transition-colors hover:text-cyan-900"
                                >
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-white/20 bg-linear-to-r from-[#2f2250] via-[#4d2b7a] to-[#9c4d97] px-4 py-5 text-white sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
                    <p className="text-center text-sm font-semibold md:text-base">
                        Get Connected with us on social networks
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {socialNetworks.map(({ label, icon: Icon, className, link }) => (
                            <a
                                key={label}
                                href={link}
                                aria-label={label}
                                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg text-white shadow-lg ring-1 ring-white/20 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 ${className}`}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}