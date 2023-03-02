import './Student.scss'
import pupil from '../../assets/img/student.png'
import StudentsInner from '../Students-inner/Student-inner';
function Students(){
    return(
        <section className='students container'>
            <div className='box'>
            <div className="info">
                <button>Join us</button>
                <h2>Join more than 17,000+ students all over the world</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                <a href="#">Get started</a>
            </div>
            <div className="photo">
                <img src={pupil} alt="" />
            </div>
        </div>
        <StudentsInner/>
        </section>
    )
}
export default Students;