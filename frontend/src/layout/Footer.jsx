import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-10 px-8 sm:px-10 md:px-16 lg:px-16 xl:px-22 font-medium border-t bg-gray-50 text-base-content">
      <aside className="lg:px-4">
        <Link to="/" className="text-2xl text-sky-500 font-semibold">
          Dream
        </Link>
        <p className="leading-7">
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
        <a href="/#reservation" className="link link-hover">
          Reserve a Table
        </a>
        <a href="/#specials" className="link link-hover">
          Weekly specials
        </a>
      </nav>
      <nav>
        <header className="footer-title opacity-100">Company</header>
        <a id="#about" className="link link-hover">
          About us
        </a>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
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
