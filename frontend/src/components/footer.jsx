import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer border-t p-10 bg-gray-50 text-base-content">
      <aside className="lg:px-4">
        <Link to="/" className="text-2xl text-sky-500 font-semibold">
          Dream
        </Link>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link to="/menu" className="link link-hover">
          Menu
        </Link>
        <a className="link link-hover">Reserve a Table</a>
        <a href="#weekly" className="link link-hover">
          Weekly specials
        </a>
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
