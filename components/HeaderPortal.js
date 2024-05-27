import Image from 'next/image'
import React from 'react'

export default function HeaderPortal() {
  return (
    <header className="h-[70vh] bg-skin-cl900 ">
        <div className="container flex h-[80vh] justify-between items-center px-10">
          <div className="image-header">
            <Image src={"/images/sen-logo-wht.png"} width={400} height={400} />
          </div>
          <div className="progress-bar">
            <h1 className="text-white text-xl text-center pb-4 font-bold">
              SEU PROGRESSO
            </h1>
            <div className="progress-bar-item flex items-center justify-center">
              <p className="text-white text-5xl text- pb-4 font-bold">60%</p>
            </div>
          </div>
        </div>
      </header>
  )
}
