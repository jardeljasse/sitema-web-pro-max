import Image from 'next/image'
import {MongoClient} from 'mongodb'

export default async function Home() {

  return (
    <div className='flex flex-col h-[100vh] items-center'>
      <div>
        <Image src="/images/gre.jpg" alt="Green Capital Logistic Image"
        width={300}
        height={300}
        
        />
      </div>
      <p className='mt-8'>Olá Jardel Jasse, seja bem vindo de volta!</p>
    </div>
  )
}
