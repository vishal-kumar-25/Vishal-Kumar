import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <section className="skills" id="skills"> {/* Line 35 */}
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>Skills</h2>
                           <p>I possess a diverse skill set that spans multiple areas of web development and programming. From crafting elegant frontend interfaces to building robust backend systems, I am proficient in various languages and technologies. Below is a comprehensive list of my technical and soft skills:</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <img src={meter1} alt="Web Development" /> {/* Line 44 */}
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Data Structure and Algorithm" /> {/* Line 48 */}
                                    <h5>Data Structure and Algorithms(Java)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Machine Learning" /> {/* Line 52 */}
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Soft Skills" /> {/* Line 56 */}
                                    <h5>Communication & Teamwork</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" /> {/* Line 61 */}
        </section>
    )
}
