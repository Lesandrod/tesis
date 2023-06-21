import Link from "next/link"

const links = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Ayuda",
        href: "/ayuda"
    },
    {
        text: "Juegos",
        href: "/juegos"
    }

]

export function Navigation() {

    return (
        <header className="mt-4">
            <nav className="flex justify-around items-center">
                <div className="flex justify-between w-full md:w-auto">
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul className="flex gap-10 items-center justify-center">
                        {
                            links.map((link) => (
                                <li>
                                    <Link href={link.href} className="hover:text-purple-800 font-semibold" >
                                        {link.text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex gap-5 items-center">
                    <div>
                        <button className="underline">Sign In</button>
                    </div>
                   
                </div>
            </nav>
        </header>
    )
}
