import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Capabl</title>
                <meta name="description" content="Capable Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen w-full flex flex-col gap-3 items-center justify-center p-4">
                <img src="/logo.svg" alt="capable logo" className="w-full max-w-xs object-contain" />
                <p className="text-gray-400">Project Initialized</p>
            </main>
        </div>
    );
}
