"use client";

import {useEffect, useState} from "react";

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
                    <a className="link link-hover">Development</a>
                    <a className="link link-hover">System administration</a>
                    <a className="link link-hover">Third party software installation</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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
                        <a href={"https://github.com/Farmeurimmo/portfolio-v5"} className="link link-hover">Source
                            code</a>

                        <a href={`https://github.com/Farmeurimmo/portfolio-v5/commit/${commitHash}`}
                           className="link link-hover text-amber-600">{commitHash}</a>
                    </div>
                </nav>
            </footer>
        </>
    )
}