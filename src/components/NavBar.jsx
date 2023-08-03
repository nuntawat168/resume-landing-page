function NavBar() {
  return (
    <nav>
      <div className="navbar-brand">
        <p className="text-brand-1">ICE.</p>
        <p className="text-brand-2">NANTAWAT</p>
      </div>
      <ul>
        <li>About</li>
        <li>Passions</li>
        <li>Portfolio</li>
        <li className="highlight-text">Contact Me</li>
      </ul>
    </nav>
  );
}

export default NavBar;
