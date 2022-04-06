import React, {useState, useEffect, useRef} from 'react'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
import {Link} from 'react-router-dom'

export default function Carousel() {
    
    const [slideIndex, setSlideIndex] = useState(1)

    const slideRef = useRef();
    let slideInterval;
    let count = 0;

    // autoscroll

    const autoPlay = () => {
        count = (count + 1) % dataSlider.length;
        if(slideIndex !== dataSlider.length)
        {
            setSlideIndex(count + 1)
        }
        else if(slideIndex === dataSlider.length)
        {
            setSlideIndex(5)
        }
    }

    const startSlider = () => {
        slideInterval = setInterval(() => {
            autoPlay();
        }, 6000);
      };

    useEffect(() => {

        startSlider();

        return () => {
           
        };
        // eslint-disable-next-line
      }, []);

    // function to move the carousel to the left or right

    const nextSlide = () => {

        if(slideIndex !== dataSlider.length)
        {
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length)
        {
            setSlideIndex(1)
        }

    }

    const prevSlide = () => {
        if(slideIndex !== 1)
        {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1)
        {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

// slider content display function

    const DisplaySignUpForm = index => {
        
        if (slideIndex === 1){
        return (
            <div className="homeForm-container">
                <h3>Signup for our Monthly Newsletter</h3>
                <form action="POST" name="emailSignUp">
                    <input type="email" required placeholder='example@email.com' className='form-input'/>
                    <input type="submit" className='form-submit' />
                </form>
            </div>
            
        )} else if (slideIndex === 5){
            return(
                <Link to="/memberships" className="carousel-link">Membership Page</Link>
            )
        } else if (slideIndex !== 1 || slideIndex !== 5){
            return(
                <></>
            )
        }
        
    }

    return (
        <>
            <div className="slider-wrapper">
                <section className="slider-container">
                    {dataSlider.map((obj, index) => {
                        return(
                            <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/carousel/slide${index + 1}.jpg`} alt=""/>
                            </div>
                        )
                    })}

                    <aside className="slider-content-container">
                        {dataSlider.map((obj, index) => {
                            return(
                                <div key={obj.id} className="slide-wrapper">
                                    <h1 className={slideIndex === index + 1 ? "slide-content content-active" : "slide-content"}>{obj.title}</h1>
                                    <p className={slideIndex === index + 1 ? "slide-content content-active" : "slide-content"}>{obj.subTitle}</p>
                                   
                                </div>
                            )
                        })}
                         <DisplaySignUpForm />
                    </aside>

                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                    <div className="container-dots">
                        {Array.from({length: 5}).map((item, index) => (
                            <div 
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"} key={index}
                            ></div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}
