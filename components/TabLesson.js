"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TabLesson() {

    const [isLoading, setIsLoading] = useState(false)


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
                <button className="tab-btn">Ver Resposta(s)</button>
            </div>
            <div className="content-box">
                <div className="content-item">
                    <h2>Transcrição</h2>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis quidem officiis, accusamus reprehenderit sint exercitationem tenetur sit? Dolore molestias beatae quaerat numquam laborum modi voluptate accusamus labore? Quam, ipsum?
                    </p>
                </div>


                <div className="content-item doubt">
                    <h2>Dúvida</h2>
                    <textarea name="doubt" id="doubt" rows={8} className="w-full text-xl"></textarea>
                    <button
                        disabled={isLoading}
                        className="bg-skin-cl100 hover:bg-skin-cl900 transition-all p-2 text-white disabled:bg-skin-cl700 w-full mt-6 rounded-lg">
                            Enviar
                    </button>
                </div>


                <div className="content-item">
                    <h2>Resposta(s)</h2>
                    <p className="italic mb-8">
                        Não entendi em relação às proposicoes?
                    </p>
                    <p>
                        <strong>
                            Nas, proposicoes, salientamos que os memos apenas tem uma grande funcao quando...
                            para melhor entendimento pesquise neste link
                        </strong> <Link href="/" className="underline text-blue-700" >proposicoes em lignua portuguesa</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}
