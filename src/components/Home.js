import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/image/header-img.svg";
import resume from "../assets/pdf/resume.pdf";

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'joecinng_resume.pdf';
        link.click();
    };

    return (
        <section id="home" className="home section text-white">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5} className="order-1 order-md-2">
                        <img src={headerImg} alt="Header image" width={600} height={600} className="img-fluid"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="order-2 order-md-1 home-left-section">
                        <span className="tagline">
                            Hi, my name is
                        </span>
                        <h3 className="my-3">Joe Cin NG</h3>
                        <p><span id="description-text">I am a Software Developer based in Melbourne, Australia. I am passionate about creating innovative solutions and exploring new technologies.</span></p>
                        <button onClick={handleDownload} className="btn-style"><i className="bi bi-cloud-arrow-down-fill"></i>Resume</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
