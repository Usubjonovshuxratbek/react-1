import './Footer.scss'
import Facebook from '../../assets/img/fecbook.png'
import Twiter from '../../assets/img/twiter.png'
import Instagiram  from '../../assets/img/instagirma.png'
function Footer() {
    return(
        <footer className='footer'>
            <div className="footer-inner container">
                <div className="block-1">
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <form action="#">
                        <input type="text" />
                        <button>Subscribe</button>
                        </form>
                        <a href="/">and provide consent to receive updates from our company.</a>
                </div>
                <div className="block-2">
                    <ul className='list'>
                        <li className='item'>
                        <a href="/">Pages</a>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                        <a href="/">Blog</a>
                        <a href="/">Courses</a>
                        <a href="/">Teachers</a>
                        </li>
                    </ul>
                </div>
                <div className="block-3">
                    <ul className='list'>
                        <li className='item'>
                        <a href="/">CMS Pages</a>
                        <a href="/">Blog Post</a>
                        <a href="/">Blog Categories</a>
                        <a href="/">Courses Single</a>
                        <a href="/">Courses Categories</a>
                        <a href="/">Product Page</a>
                        <a href="/">Product Categories</a>
                        <a href="/">Teachers Single</a>
                        <a href="/">Episode Single</a>
                        </li>
                    </ul>
                </div>
                <div className="block-4">
                    <ul className='list'>
                        <li className='item'>
                        <a href="/">Account Pages</a>
                        <a href="/">Blog Post</a>
                        <a href="/">Blog Categories</a>
                        <a href="/">Courses Single</a>
                        <a href="/">Courses Categories</a>
                        <a href="/">Product Page</a>
                        <a href="/">Product Categories</a>
                        <a href="/">Teachers Single</a>
                        <a href="/">Episode Single</a>
                        </li>
                    </ul>
                </div>
                <div className="block-5">
                    <ul className='list'>
                        <li className='item'>
                        <a href="/">Utility Pages</a>
                        <a href="/">Style Guide</a>
                        <a href="/">Changelog</a>
                        <a href="/">Licenses</a>
                        <a href="/">404</a>
                        <a href="/">Password</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="liner container"></div>
            <div className="social-media container">
                <p>© Learnico by Minimal Square Powered by Webflow</p>
                <div className="icon">
                    <img src={Facebook} alt="" />
                    <img src={Twiter} alt="" />
                    <img src={Instagiram} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;