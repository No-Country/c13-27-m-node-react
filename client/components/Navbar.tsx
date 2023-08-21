import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>

      <ul>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
