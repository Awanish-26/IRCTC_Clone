export default function TrainSearch() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Search</p>
                    <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Find your train with a cleaner, mobile-friendly flow.</h1>
                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                        This screen is currently a polished entry point so the app still feels intentional on every device while booking features are expanded.
                    </p>
                </div>

                <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-sm lg:grid-cols-1">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        Back to home
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                    >
                        Continue exploring
                    </a>
                </div>
            </div>
        </main>
    )
}