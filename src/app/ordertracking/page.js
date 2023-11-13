'use client';
import {TrackingOrder} from "src/components";
import "/src/app/login/auth.css";
import styles from "/src/styles/style";
import {Footer, Navbar} from "@/components";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {auth} from "@/firebase";

const Page = () => {

    const router = useRouter();

    // Send user to login if not signed in
    useEffect(() => auth.onAuthStateChanged(async user => {
        if (!user) {
            router.push('/login');
        }
    }), []);

    return (
        <div className="App bg-primary">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} z-[20]`}>
                    <Navbar/>
                </div>
            </div>
            {/* gradient start */}
            <div
                className="absolute z-[0] opacity-45 w-[60%] h-[60%] -bottom-[140%] top-0 -left-[10%] rounded-full blue__gradient"/>


            {/* gradient end */}
            <div className="flex justify-between px-16">
                <TrackingOrder/>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>

    )
}

export default Page;