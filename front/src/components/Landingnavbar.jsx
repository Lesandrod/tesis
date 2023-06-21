
export function Landingnavbar() {
    return (
        <header className="">
            <nav class="flex justify-between items-center px-4 py-2">
                <div>
                    <img src="https://i.ibb.co/x6hXCLf/nuestrologo.png" style={{width:45}} alt="" />
                </div>
                <div class="flex items-center mt-3">
                    <div class="mx-4">
                        <button class="underline hover:text-purple-800 font-semibold" style={{textDecoration:'none', color:"white"}}>Sign In</button>
                    </div>
                    <div class="mx-4">
                        <button class="underline hover:text-purple-800 font-semibold" style={{textDecoration:'none',color:"white"}}>Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

