import './Hero-inner.scss'
function HeroInner(){
    return(
        <div className='hero-inner'>
            <div className='container'>
                <p className='center'>Trusted by the world's best companies</p>
                <div className="box">
                    <button className='btn'>About us</button>
                    <h2 className='title'>No-code Education Platform</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, <br /> ut commodo diam libero vitae erat.</p>
                    <a className='link' href="/">About us</a>
                </div>
            </div>
        </div>
    )
}
export default HeroInner;