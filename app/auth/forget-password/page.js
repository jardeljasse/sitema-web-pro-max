import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col p-4 sm:p-6 md:p-8 items-center justify-center h-[100vh]">
      <div>
          <Image
            className="block bg-skin-cl100  w-[full] rounded-md"
            src="/images/sen-logo-white.png"
            width={250}
            height={250}
            alt="Sen logo"
          />
      </div>
      <h1 className="text-center text-bold  text-skin-cl700
      text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl">
        Conctate o Administrador
      </h1>
      <p>
        <Link className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl underline" href={"/auth/login"}>Sair</Link>
      </p>
    </main>
  );
}
