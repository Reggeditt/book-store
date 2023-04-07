const Navbar = () => {

  const links = [];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="nav-link">Books</li>
        <li className="nav-link">Categories</li>
      </ul>
    </nav>
  );
};