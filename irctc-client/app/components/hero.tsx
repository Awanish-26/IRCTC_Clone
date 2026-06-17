export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/banner_train.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

            <div className="relative mx-auto flex min-h-[28rem] max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[36rem] lg:px-8">
                <div className="max-w-2xl rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100 sm:text-sm">Plan your journey</p>
                    <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Book smarter, travel lighter, and find the right trip faster.
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-100/90 sm:text-base">
                        Search trains, explore holiday packages, and discover IRCTC services on a layout that stays usable on mobile, tablet, and desktop.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="/search"
                            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                        >
                            Search Trains
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                        >
                            Explore Services
                        </a>
                    </div>

                    <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/15 bg-slate-950/30 px-4 py-3">
                            <p className="font-semibold text-white">Mobile first</p>
                            <p className="mt-1 text-white/75">Responsive controls that wrap cleanly.</p>
                        </div>
                        <div className="rounded-2xl border border-white/15 bg-slate-950/30 px-4 py-3">
                            <p className="font-semibold text-white">Faster navigation</p>
                            <p className="mt-1 text-white/75">Clear calls to action and readable spacing.</p>
                        </div>
                        <div className="rounded-2xl border border-white/15 bg-slate-950/30 px-4 py-3">
                            <p className="font-semibold text-white">Better hierarchy</p>
                            <p className="mt-1 text-white/75">A stronger visual path from hero to services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}