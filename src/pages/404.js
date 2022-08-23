import Link from "next/link";

function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <a className="text-indigo-400 mt-4">Back to Home</a>
            </Link>
        </div>
    );
}

export default Custom404;
