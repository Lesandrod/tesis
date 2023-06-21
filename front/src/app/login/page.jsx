import { Landingnavbar } from "@/components/Landingnavbar"
export default function UnauthenticatedPage() {

    return (
        <div className="login">
            <div className="hero">
                <Landingnavbar />
   
                <section className="hero1 mt-8">
                    <h1 className="welcome">ExpresaTec</h1>
                    <h2 className="welcome2">Porque las emociones de los niños <br /> <b id="no">NO</b>  tienen limites</h2>
                    <br />
                    <button className="buttoninfo ">Comenzar</button>
                </section>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F4F2F2" fill-opacity="1" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,282.7C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>


            </div>

        </div>



    )
}