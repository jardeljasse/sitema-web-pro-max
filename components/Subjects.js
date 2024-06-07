import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Subjects() {
    return (
        <section className="mt-10 subjects">
            <div className="subject-cont">
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/portugues.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Português - 9ª classe</h2>
                        <p className="my-[1rem]">
                            Venha aprender a se comunicar da melhor forma correcta. 
                            <br /><br />
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/history-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/gografia.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Geografia - 9ª classe</h2>
                        <p className="my-[1rem]">
                            Nesta disciplina você aprenderá em relação ao mundo em redor, dos seus climas, relevo e muito mais. 
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/empty-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/historia.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Historia - 9ª classe</h2>
                        <p className="my-[1rem]">
                            Conheça a história de Moçambique, toda a sua evolução até o dia actual. 
                            <br /><br />
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/empty-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/igles.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Inglês - 9ª classe</h2>
                        <p className="my-[1rem]">
                            Nesta disciplina aprenderás os conceitos básicos aos mais simples da lingua Inglesa. 
                            <br /><br />
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/empty-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/iologia.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Biologia - 9ª classe</h2>
                        <p className="my-[1rem]">
                            A ciência que estuda a vida. Aprenderás nesta disciplina os conceitos fundamentais dos seres vivos.
                            <br /><br />
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/empty-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
                <div className="subject bg-skin-cl500 h-[480p] rounded-[10px]">
                    <div className="bg-skin-cl900 image-subject
                ">
                        <Image className="block m-auto"
                            src="/images/subjects/maths.png"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl">Historia - 9ª classe</h2>
                        <p className="my-[1rem]">
                            Nesta disciplina, conhecerás o mundo fascinamete dos números, os quais nos possibilitam uma vida exacta de cálculos. 
                            <br /><br />
                        </p>
                        <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/student-portal/history-subject/">Entrar e estudar</Link>
                    </div>
                </div>
    
             
            </div>
        </section>
    )
}
