import './Trending.scss'
import card1 from '../../assets/img/card-1.png'
import card2 from '../../assets/img/card-2.png'
function Trending(){
    return(
        <div className='container'>
            <section className='tranding'>
            <button className='btn'>Trending</button>
            <h2 className="title">The most popular courses</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            <div className="cards">
            <div className="card-1">
                    <button>Beginner</button>
                    <h4>Webflow Basics</h4>
                    <span>$ 24.00 USD</span>
                    <a href="/">Enroll Course</a>
                    <img src={card1} alt="" />
                </div>
                <div className="card-2">
                    <button>Beginner</button>
                    <h4>Webflow Interactions <br /> Masterclass</h4>
                    <span>$ 55.00 USD</span>
                    <img src={card2} alt="" />
                    <a href="/">Enroll Course</a>
                </div>
                <div className="card-3">
                    <button className='btnn'>Beginner</button>
                    <h4>Advanced CMS and <br /> Integrations</h4>
                    <span>$ 38.00 USD</span>
                    <img src={card1} alt="" />
                    <a href="/">Enroll Course</a>
                </div>
            </div>
            </section>
        </div>
    )
}
export default Trending;