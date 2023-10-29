const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-50 text-base-content">
      <aside>
        <a className="btn btn-ghost normal-case text-2xl text-sky-500">Dream</a>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Menu</a>
        <a className="link link-hover">Order Online</a>
        <a className="link link-hover">Reserve a Table</a>
        <a className="link link-hover">Weekly specials</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
