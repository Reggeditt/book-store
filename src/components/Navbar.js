const Navbar = () => {
  const links = [
    { name: 'Books', path: '/' },
    { name: 'Categories', path: 'categories' },
  ];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}><a href={link.path}>{link.name}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
