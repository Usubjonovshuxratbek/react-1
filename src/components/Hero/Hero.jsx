import './Hero.scss';
import play from '../../assets/img/play.png'
import hero from '../../assets/img/hero-photo.png'
import start from '../../assets/img/start.png'
import user1 from '../../assets/img/user-1.png'
import user2 from '../../assets/img/user-2.png'
import user3 from '../../assets/img/user-3.png'
import user4 from '../../assets/img/user-4.png'
import HeroInner from '../Hero-inner/Hero-inner';
function Hero() {
    return (
        <section className='hero-section'>
            <div className='container'>
                <div className="hero">
                    <div className="info">
                        <h2 className='title'>Become an No-Code <br />
                         expert and find a job</h2>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum <br /> vel molestie magna curabitur tincidunt nunc sit amet.</p>
                        <div className="buttons">
                        <button className='btn'>Explore Courses</button>
                        <a className='watch' href="#watch Video">Watch Video</a>
                        <img className='watch-icon' src={play} alt="" />
                        </div>
                        <div className="users">
                            <div className="photo">
                            <img src={user1} alt="" />
                            <img src={user2} alt="" />
                            <img src={user3} alt="" />
                            <img src={user4} alt="" />
                            </div>
                            <div className="info">
                                <img src={start} alt="" />
                                <p>From 3k+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img className='hero-photo' src={hero} alt="" />
                    </div>
                </div>
            </div>
            <HeroInner />
        </section>
    )
}

export default Hero;