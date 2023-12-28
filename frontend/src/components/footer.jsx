import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer font-medium border-t p-10 bg-gray-50 text-base-content">
      <aside className="lg:px-4">
        <Link to="/" className="text-2xl text-sky-500 font-semibold">
          Dream
        </Link>
        <p>
          A journey began with a passion for cooking.
          <br />
          Established in 2023
        </p>
      </aside>
      <nav>
        <header className="footer-title opacity-100">Services</header>
        <Link to="/menu" className="link link-hover">
          Menu
        </Link>
        <Link to="/reservations" className="link link-hover">
          Reserve a Table
        </Link>
        <a href="#weekly" className="link link-hover">
          Weekly specials
        </a>
      </nav>
      <nav>
        <header className="footer-title opacity-100">Company</header>
        <a id="#about-us" className="link link-hover">
          About us
        </a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <header className="footer-title opacity-100">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
