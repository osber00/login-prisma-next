"use client"
import { signOut } from "next-auth/react";

const InformacionPage = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] justify-center items-center'>
      <h1 className='text-3xl mb-2 text-slate-400 font-semibold uppercase'>
        Demo Login App Next con Prisma
      </h1>
      <div className='text-2xl text-slate-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi animi, omnis earum error exercitationem? Ipsa facilis voluptatem distinctio consequatur maxime ratione beatae dicta earum. Doloribus vel reiciendis iusto libero, corrupti possimus est officiis recusandae, perferendis autem ex unde et assumenda quam soluta repudiandae magnam fugit exercitationem accusantium sequi ullam mollitia! Quod reprehenderit cum doloribus rerum earum nemo, vitae assumenda mollitia, deleniti corrupti magni molestiae nam repellendus aspernatur nulla temporibus quas nihil voluptates nisi aliquid voluptas et? Aut commodi eligendi quibusdam aliquam exercitationem cupiditate eos veritatis! Illo, eos placeat omnis ex doloribus quod iste impedit, at recusandae quia dolore doloremque.</div>
      <button 
      onClick={()=>signOut()}
      className="bg-orange-400 text-orange-900 py-1 px-3 rounded-sm mt-2 font-semibold uppercase">Cerrar sesión</button>
    </div>
  );
};

export default InformacionPage;
