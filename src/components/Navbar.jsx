export async function Navbar() {
    return (
        <>
            <nav className="flex flex-row justify-evenly items-center w-full p-2 border-b-gray-50 border-b-[1px]">
                <div className="flex flex-row items-center gap-4">
                    <img src="https://cdn.farmeurimmo.fr/img/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full"/>
                    <a className="text-xl font-bold hover:text-orange-500" href={"/"}>Farmeurimmo</a>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <a href="#" className="text-lg font-bold hover:text-orange-500">Home</a>
                    <a href="#" className="text-lg font-bold hover:text-orange-500">About</a>
                    <a href="#" className="text-lg font-bold hover:text-orange-500">Contact</a>
                </div>
            </nav>
        </>
    )
}