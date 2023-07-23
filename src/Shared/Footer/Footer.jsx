import Container from "../../Container/Container";
import logo from "../../assets/school.png";

const Footer = () => {
    return (
      <Container>
        <div className="mt-20">
          <footer className="footer p-10 bg-base-200 text-base-content rounded-xl">
            <div className="mx-auto lg:mx-0">
              <img src={logo} alt="" />

              <p className="logo-name text-2xl">
                <span className="text-blue-400">Degree</span> Camp
              </p>

              <p>Providing reliable tech since 1992</p>
            </div>
            <div className="mx-auto lg:mx-0">
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="mx-auto lg:mx-0">
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className="mx-auto lg:mx-0">
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </footer>
        </div>
      </Container>
    );
};

export default Footer;