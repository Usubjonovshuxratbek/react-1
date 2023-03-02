import './Student-inner.scss'
import icon1 from '../../assets/img/info-1.png'
import icon2 from '../../assets/img/info-2.png'
import icon3 from '../../assets/img/info-3.png'
function StudentsInner(){
    return(
        <div className='infos container'>
            <div className="info-1">
              <img src={icon1} alt="" />  
              <h3>Browse our courses</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
            </div>
            <div className="info-2">
              <img src={icon2} alt="" />  
              <h3>Purchase quickly and securely</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
            </div>
            <div className="info-3">
              <img src={icon3} alt="" />  
              <h3>Start learning right away</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
            </div>
        </div>
    )
}
export default StudentsInner;