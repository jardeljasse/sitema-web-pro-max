"use client"
import Navbar from "@/components/Navbar";
import TabLesson from "@/components/TabLesson";
import { useEffect } from "react";


export default function page() {

    useEffect(()=>{

        let listVideo = document.querySelectorAll(".video-item");
        let mainVideo = document.querySelectorAll(".main-video video");
        let title = document.querySelectorAll(".vid-title");

        listVideo.forEach( video => {
            video.onclick = () => {
                listVideo.forEach( vid => vid.classList.remove("active-vid-item"));
                video.classList.add("active-vid-item");

                
                if (video.classList.contains("active-vid-item")) {
                    let src = video.children[0].getAttribute('src');
                    mainVideo.src = src;
                    let text = video.children[1].innerHTML;
                    title = text.innerHTML;
                    alert(title);
                }else{
                    console.error('The selected video element is not a valid HTMLElement or is null');
                }
            }
        });
    },[])

    return (
        <>
            <Navbar />

            <section className="bg-skin-cl700">
                {/* <main className="container-video h-full container aspect-ratio pt-[5rem]   "> */}
                <main className="container-video h-full md:flex md:space-x-6 container aspect-ratio pt-[5rem]   ">
                    
                    {/* <h1>Streaming</h1> */}
                    <div className="main-video w-full basis-[70%]">
                        <div className="video aspect-w-16 aspect-h-9">
                            <video autoPlay={false} controls>
                                <source src="/videos/azagaia.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3>01. Sistema Protestante</h3>
                <TabLesson />
                        </div>
                    </div>
                    <div className="video-list">
                        <div className="video-item active-vid-item">
                            <video autoPlay={false} controls>                            
                                <source src="/videos/azagaia.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3 className="vid-title">01. Sistema Protestante</h3>
                        </div>
                        <div className="video-item">
                            <video autoPlay={false} controls>
                                <source src="/videos/form.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3 className="vid-title">02. Google forms</h3>
                        </div>
                        <div className="video-item">
                            <video autoPlay={false} controls>
                                <source src="/videos/azagaia.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3 className="vid-title">01. Sistema Protestante</h3>
                        </div>
                        <div className="video-item">
                            <video autoPlay={false} controls>
                                <source src="/videos/azagaia.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3 className="vid-title">01. Sistema Protestante</h3>
                        </div>
                        <div className="video-item">
                            <video autoPlay={false} controls>
                                <source src="/videos/azagaia.mp4" type="video/mp4" />
                                Seu navegador não é combatível com este video
                            </video>
                            <h3 className="vid-title">01. Sistema Protestante</h3>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
