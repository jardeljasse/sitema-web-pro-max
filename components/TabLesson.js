"use client"

import { useEffect } from "react";

export default function TabLesson() {

    
    useEffect(() => {
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

    }, []);

    return (
        <div className="container-tab">
            <div className="tab-box">
                <button className="tab-btn">Transcrição</button>
                <button className="tab-btn">Dúvida</button>
                <button className="tab-btn">Mais</button>                
            </div>
            <div className="content-box">
                <div className="content-item">
                    <h2>Transcrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                    </p>
                </div>


                <div className="content-item">
                    <h2>Dúvida</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                    </p>
                </div>


                <div className="content-item">
                    <h2>Mais</h2>
                    {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                    </p> */}
                </div>
            </div>

        </div>
    )
}
