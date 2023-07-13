import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);
    const Layout = Component.Layout || EmptyLayout;
    const router = useRouter();

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === "undefined") {
        return <></>;
    }

    const isAboutPage = router.pathname === "/about" || router.pathname === "/bootcamp/bootcampLandingPage";

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
                {isAboutPage && (
                    <link
                        rel="stylesheet"
                        href="/images/css/style.css"
                    />
                )}
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
