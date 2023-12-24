import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; &nbsp;2023  </p>
            <a href="/about" >About_href</a>
            {/* <Link to={`about`} >About_Link</Link> */}
        </footer>
    );
};

export default Footer;