import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);
    const Layout = Component.Layout || EmptyLayout;

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === "undefined") {
        return <></>;
    } else
        return (
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    />
                </Head>
                <Component {...pageProps} />
            </Layout>
        );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
