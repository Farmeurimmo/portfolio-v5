import Link from "next/link";

export function Navbar() {
    return (
        <>
            <nav className="flex flex-row justify-evenly items-center w-full p-2 border-b-gray-50 border-b-[1px]">
                <div className="flex flex-row items-center gap-4">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" loading={"lazy"} alt="Logo"
                         className="h-8 w-8 rounded-full"/>
                    <Link className="text-xl font-bold hover:text-orange-500" href={"/"}>Farmeurimmo</Link>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Link href={"#"} className="text-lg font-bold hover:text-orange-500">Home</Link>
                    <Link href={"#"} className="text-lg font-bold hover:text-orange-500">Projects</Link>
                    <Link href={"#"} className="text-lg font-bold hover:text-orange-500">Blog</Link>
                    <Link href={"#"} className={"text-lg font-bold hover:text-orange-500"}>Contact</Link>
                </div>
            </nav>
        </>
    )
}