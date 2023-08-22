import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/ayuda"> Ayuda </Link>
        </li>
        <li>
          <Link href="/info"> Información </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

    /* <li>
          <Link href="/">El Futuro es hoy</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/signup">registro</Link>
        </li>  */
