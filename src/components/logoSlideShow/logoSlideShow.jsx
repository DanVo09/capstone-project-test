import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./logoSlideShow.css";
// import LogoData from "./logodata";
import axios from 'axios';

export default class LogoSlideShow extends React.Component {

  state = {
    logoDatas: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/sponsor-partners?populate=*');
      this.setState({ logoDatas: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  };


    render() {
      
    const { error, LogoData } = this.state;

    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

        var settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {   
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
        <>
        <div className="logo-flex">
           {this.state.logoDatas.length===0?(
               <div>
                   <span>Loading...</span>
               </div>
           ):(
               <Slider {...settings}>
               
               {this.state.logoDatas.map(current=>(
                    <div className="out" key={current.id}>
                        <div className="logo">
                            <img className="logo-img" src={`http://localhost:1337${current.attributes.logo.data.attributes.url}`} alt={`${current.attributes.name}`}/>
                        </div>
                    </div>
                )
               )}
               
               </Slider>
           )}
           </div>
        </>
    );

}
}