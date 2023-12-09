import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { opcionesAuth } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const sesion = await getServerSession(opcionesAuth);
  console.log(sesion);
  return (
    <nav>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='uppercase text-2xl font-semibold text-blue-500'>
          <Link href='/' className='hover:text-slate-300'>
            App Login
          </Link>
        </div>
        <ul className='flex gap-x-2 uppercase text-sm font-semibold items-center text-slate-300'>
          {sesion?.user ? (
            <>
              <li className='hover:text-blue-500 transition-all'>
                <Link href='/informacion'>Información</Link>
              </li>
              <li>
                <Link href='/api/auth/signout' className='bg-orange-400 text-orange-800 py-1 px-3 text-sm rounded-sm uppercase hover:bg-orange-300 hover:text-slate-700'>
                  Salir
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='hover:text-blue-500 transition-all'>
                <Link href='/login'>Login</Link>
              </li>
              <li className='hover:text-blue-500 transition-all'>
                <Link href='/registro'>Registro</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
