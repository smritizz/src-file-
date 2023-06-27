import "./footer.css";

const Footer = ()=>{
    return (<footer className="footer">
        <div className="footer-social-media">
            <div className="footer-social-media-text">Follow us On Social Media</div>
            <div className="footer-social-media-icons">
                <div className="footer-social-media-icon">
                    <i style={{color:'red'}}className="bi bi-instagram"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color:'#2980b9'}}className="bi bi-facebook"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color:'skyblue'}} className="bi bi-twitter"></i>
                </div>
                <div className="footer-social-media-icon">
                    <i style={{color:'darkblue'}} className="bi bi-telegram"></i>
                </div>
            </div>
        </div>
        <div className="footer-links-wrapper">
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">Usefull Links</h3>
                <ul className="footer-links">
                    <li className="footer-link">Home</li>
                    <li className="footer-link">Authors</li>
                    <li className="footer-link">About Us</li>
                    <li className="footer-link">Contact Us</li>
                    <li className="footer-link">Register</li>
                </ul>
            </div>
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">Contact Information</h3>
                <div className="footer-address-wrapper">
                    <div className="footer-address-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        India- Chandigarh - Deep House PG
                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-telephone-fill"></i>
                        7985-113984
                    </div>
                    <div className="footer-address-item">
                        <i className="bi bi-envelope-fill"></i>
                        rktaakash@gmail.com
                    </div>
                </div>
            </div>
            <div className="footer-links-item">
                <h3 className="footer-links-item-title">About Us</h3>
                <p className="footer-description">
                    We are a book store who are looking to expand their business and help other people with the growth of their knowledge,
                    so that no one is deprived of studies. We have every type of books available . So, do come here and give it a shot
                </p>
            </div>
        </div>
    </footer>);
}

export default Footer;