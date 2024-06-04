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
        // -----------------------------------------------------
        const tabs = document.querySelectorAll(".tab-btn");
        const elContentItem = document.querySelectorAll(".content-item");
        // tab.addEventListener("click", handleClick);


        tabs.forEach((tab, i) => {
            tab.addEventListener("click", (e) => {
                tabs.forEach(tab => { tab.classList.remove("active-tab") })
                tab.classList.add("active-tab");
                
                // var line = document.querySelector(".line");
                // line.style.width = e.target.offsetWidth + "px";
                // line.style.left = e.target.offsetWidth + "px";
                
                elContentItem.forEach(content => { content.classList.remove("active-tab") })
                elContentItem[i].classList.add("active-tab");
            }); 
        })

    },[])

    return (
        <>
            <Navbar />

            <section className="bg-skin-cl700 h-[100] m-auto pb-14 spect-ratio">
                {/* <main className="container-video h-full container aspect-ratio pt-[5rem]   "> */}
                <main className="container-video md:flex md:space-x-6  pt-[5rem]">
                    
                    {/* <h1>Streaming</h1> */}
                    <div className="main-video w-full basis-[70%] aspect-ratio">
                        <div className="video aspect-w-16 aspect-h-9">
                            <video autoPlay={false} controls>
                                <source src="https://drive.google.com/file/d/1ycXWi7VoXY-g31_HVAlJVAmygfja0UbD/view?usp=drive_link"/>
                                {/* <source src="/videos/azagaia.mp4" type="video/mp4" /> */}
                                Seu navegador não é combatível com este video
                            </video>
                            <h3>01. Sistema Protestante</h3>
                        </div>
                <TabLesson />
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
                        
                    </div>
                </main>
            </section>
        </>
    )
}
