import "../../styles/slider.css"
import { Carousel } from "react-bootstrap"
import sclass from "../../assets/img/sclass.jpg"
import gclass from "../../assets/img/gwagon.jpg"
import cls from "../../assets/img/cls.jpg"

const Slider=()=>{
    return (
        <Carousel interval={5000} fade={true} controls={false} className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sclass}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>S class</h3>
      <p>Luxury sedan at it best </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gclass}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>G Wagon</h3>
      <p>The need to have a big car with class this is for you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cls}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>C class</h3>
      <p>Speed and comfort in one car </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        // <div className="slider">
        //     <div className="wrapper">
        //         <div className="item">
        //             <img src={sclass} alt="" className="slider-" />
        //             <div className="slider-bg"></div>
        //             <h1 className="slider-title">S<br>CLASS</br></h1>
        //         </div>
        //         <div className="item">
        //             <img src={gclass} alt="" className="slider-" />
        //             <div className="slider-bg"></div>
        //             <h1 className="slider-title">S<br>CLASS</br></h1>
        //         </div>
        //         <div className="item">
        //             <img src={cls} alt="" className="slider-" />
        //             <div className="slider-bg"></div>
        //             <h1 className="slider-title">S<br>CLASS</br></h1>
        //         </div>
        //     </div>
        // </div>
        
    )
}
export default Slider