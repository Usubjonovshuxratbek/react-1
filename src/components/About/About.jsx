import './About.scss'
import user1 from '../../assets/img/user-5.png'
import user2 from '../../assets/img/user-6.png'
import user3 from '../../assets/img/user-7.png'
import start from '../../assets/img/startt.png'
import blog1 from '../../assets/img/blog-1.png'
import blog2 from '../../assets/img/blog-2.png'
import blog3 from '../../assets/img/blog-3.png'
import nextIcon from '../../assets/img/next-icon.png'
function About() {
    return (
        <section className='about'>
            <div className="box container">
                <button>Testimonials</button>
                <h2>What our students say</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h6>
                <div className="cards">
                    <div className="card-1">
                        <img src={start} alt="" />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className="users">
                            <div className="photo">
                                <img src={user1} alt="" />
                            </div>
                            <div className="info">
                                <h3>Orlando Diggs</h3>
                                <a href="#">Junior UI Designer, @Company</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-1">
                        <img src={start} alt="" />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className="users">
                            <div className="photo">
                                <img src={user2} alt="" />
                            </div>
                            <div className="info">
                                <h3>Mollie Hall</h3>
                                <a href="#">Design System Manager, @Company</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-1">
                        <img src={start} alt="" />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className="users">
                            <div className="photo">
                                <img src={user3} alt="" />
                            </div>
                            <div className="info">
                                <h3>Lori Bryson</h3>
                                <a href="#">UX Designer, @Company</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-bg">
                <div className="blog container">
                    <button>Blog</button>
                    <div className="post">
                        <h2>Our latest posts</h2>
                        <a href="#">View all</a>
                    </div>
                    <div className="blogs">
                        <div className="blog-1">
                            <img className='photo' src={blog1} alt="" />
                            <button className='btn'>Freelance</button>
                            <h3>7 freelance mistakes to avoid</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <div className="link">
                                <a href="/">Read more</a>
                                <img src={nextIcon} alt="" />
                            </div>
                        </div>
                        <div className="blog-2">
                            <img className='photo' src={blog2} alt="" />
                            <button className='btn'>UI/UX Design</button>
                            <h3>Brand design process explained</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <div className="link">
                                <a href="/">Read more</a>
                                <img src={nextIcon} alt="" />
                            </div>
                        </div>
                        <div className="blog-3">
                            <img className='photo' src={blog3} alt="" />
                            <button className='btn'>Business</button>
                            <h3>The beginner’s guide to recruiting a Webflow developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            <div className="link">
                                <a href="/">Read more</a>
                                <img src={nextIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="learning">
                        <h2>Start learning today</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <a className='link-1' href="/">Get started</a>
                        <a className='link-2' href="/">Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;