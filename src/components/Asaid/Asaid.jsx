import './Asaid.scss'
import Asaid1 from '../../assets/img/asaid-1.png'
import Asaid2 from '../../assets/img/asaid-2.png'
import Next from '../../assets/img/next-icon.png'
function Asiad(){
    return(
        <div className="container">
            <section className='asaid'>
            <div className="asaid-1">
                    <div className="photo">
                        <img src={Asaid1} alt="" />
                    </div>
                    <div className="info">
                        <h2>Premium courses from <br /> the industry leaders</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <div className="buttons">
                        <a className='link-1' href="/">Get started</a>
                        <a className='link-2' href="/">Learn more</a>
                        <img src={Next} alt="" />
                        </div>
                    </div>
                </div>
                <div className="asaid-2">
                    <div className="info">
                        <h2>Easily find the perfect <br /> course for you</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <div className="buttons">
                        <a className='link-1' href="/">Get started</a>
                        <a className='link-2' href="/">Learn more</a>
                        <img src={Next} alt="" />
                        </div>
                    </div>
                    <div className="photo">
                        <img src={Asaid2} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Asiad;