"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

export default function Footer() {
    const [commitHash, setCommitHash] = useState('');

    useEffect(() => {
        const fetchCommitHash = async () => {
            const response = await fetch("https://api.github.com/repos/Farmeurimmo/portfolio-v5/commits/master");
            const data = await response.json();
            setCommitHash(data.sha.slice(0, 7));
        };

        fetchCommitHash();
    }, []);

    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover" href="#">Development</Link>
                    <Link className="link link-hover" href="#">System administration</Link>
                    <Link className="link link-hover" href="#">Third party software installation</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover" href="#">Privacy policy</Link>
                    <Link className="link link-hover" href="#">Cookie policy</Link>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" loading={"lazy"} alt="Logo"
                         className="h-12 w-12 rounded-full"/>
                    <p className={"font-bold"}>
                        Farmeurimmo
                        <br/>
                        Developper since 2018.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://github.com/Farmeurimmo/portfolio-v5" className="link link-hover">Source
                            code</Link>
                        <Link href={`https://github.com/Farmeurimmo/portfolio-v5/commit/${commitHash}`}
                              className="link link-hover text-amber-600">{commitHash}</Link>
                    </div>
                </nav>
            </footer>
        </>
    );
}