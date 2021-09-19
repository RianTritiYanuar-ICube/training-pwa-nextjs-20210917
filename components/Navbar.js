import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link href="/">
          <a class="navbar-brand">NgeMeals</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
