import Link from "next/link"

const links = [
    {
        text:"Home",
        href:"/"
    },
    {
        text: "Ayuda",
        href:"/ayuda"
    },
    {
        text: "Juegos",
        href:"/juegos"
    }
    
]

export function Navigation() {

    return (
        <header>
            <nav>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul>
                        {
                        links.map((link)=>(
                            <li>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
