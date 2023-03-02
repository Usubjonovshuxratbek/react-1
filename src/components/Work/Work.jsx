import './Work.scss'
import icon1 from '../../assets/img/icon-1.png'
import icon2 from '../../assets/img/icon-2.png'
import icon3 from '../../assets/img/icon-3.png'
import icon4 from '../../assets/img/icon-4.png'
import works from '../../assets/img/works.png'
function working() {
    return(
        <section className='work container'>
            <button>Benefits</button>
            <h2>Grow your knowledge from best teachers in the industry</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            <div className="infos">
                <div className="info-1">
                <div className="block-1">
                        <img src={icon1} alt="" />
                        <h3>Over 430+ hours of lessons</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    </div>
                    <div className="block-2">
                        <img src={icon2} alt="" />
                        <h3>40+ teachers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    </div>
                </div>
                <div className="info-2">
                    <img src={works} alt="" />
                </div>
                <div className="info-3">
                    <div className="block-1">
                        <img src={icon3} alt="" />
                        <h3>Online community</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    </div>
                    <div className="block-2">
                        <img src={icon4} alt="" />
                        <h3>1-on-1 coaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    </div>
                </div>
            </div>
            <a href="#">Get started</a>
        </section>
    )
}
export default working;