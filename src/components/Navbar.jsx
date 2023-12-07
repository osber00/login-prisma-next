import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='uppercase text-2xl font-semibold text-blue-500'>
          <Link href='/' className='hover:text-slate-300'>
            App Login
          </Link>
        </div>
        <ul className='flex gap-x-2 uppercase text-sm font-semibold items-center text-slate-300'>
          <li className='hover:text-blue-500 transition-all'>
            <Link href='/informacion'>Información</Link>
          </li>
          <li className='hover:text-blue-500 transition-all'>
            <Link href='/login'>Login</Link>
          </li>
          <li className='hover:text-blue-500 transition-all'>
            <Link href='/registro'>Registro</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
