import "../../App.css";
import "./Hero.css";
import HeroInfo from "../HeroInfo/HeroInfo"
function Hero() {
  const infoHero = [
    {
      img: <img src="/images/location.svg" alt="logo" className="icon-hero" />,
      head: "Location",
      desc: "Ahmedabad, India",
    },
    {
      img: <img src="/images/dollar-circle.svg" alt="logo" className="icon-hero" />,
      head: "Price",
      desc: "$1000 - $10,000",
    },
    {
      img: <img src="/images/house.svg" alt="logo" className="icon-hero" />,
      head: "Type of Property",
      desc: "Apartment",
    },
  ];
  return (
    <div className="b content " >
      <div className="my-container ">
          <div className="text ">
            <h1 className="header-title mb-8">
              Discover a place you will love to live
            </h1>
            <p className="mb-12 desc-hero">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
            <div className="info-hero ">
            {infoHero.map((item)=>{
                return(
                    <HeroInfo  icon={item.img} head={item.head} desc={item.desc}/>
                )
            })}
          </div>

        </div>
      </div>
      <img
        src="/images/modern-residential-building-transformed 1.svg"
        alt="image-header"
        className="image-hero"
      />
    </div>
  );
}

export default Hero;
