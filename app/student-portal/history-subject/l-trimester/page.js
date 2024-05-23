import Navbar from "@/components/Navbar";


export default function page() {
    return (
        <>
            <Navbar />

            <main className="container-video bg-skin-cl700  pt-[5rem]   ">
                {/* <h1>Streaming</h1> */}

                <div className="main-video">
                    <div className="video aspect-w-16 aspect-h-9">
                        <video autoPlay={false} controls>
                            <source src="/videos/azagaia.mp4" type="video/mp4" />
                            Seu navegador não é combatível com este video
                        </video>
                        <h3>01. Sistema Protestante</h3>
                    </div>
                </div>
                <div className="video-list">
                    <div className="video-item">
                        <video autoPlay={false} controls>
                            <source src="/videos/azagaia.mp4" type="video/mp4" />
                            Seu navegador não é combatível com este video
                        </video>
                        <h3>01. Sistema Protestante</h3>
                    </div>
                    <div className="video-item">
                        <video autoPlay={false} controls>
                            <source src="/videos/azagaia.mp4" type="video/mp4" />
                            Seu navegador não é combatível com este video
                        </video>
                        <h3>02. Mapa cor-de-rosa</h3>
                    </div>
                    <div className="video-item">
                        <video autoPlay={false} controls>
                            <source src="/videos/azagaia.mp4" type="video/mp4" />
                            Seu navegador não é combatível com este video
                        </video>
                        <h3>03. Primeira Guerra Mundial</h3>
                    </div>
                </div>
            </main>
        </>
    )
}
