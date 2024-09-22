import "../../App.css"
import "./HeroInfo.css"

function HeroInfo({icon,head,desc}) {
  return (
    <div className="flex justify-center items-center gap-5 ">
         {icon}
        <div className="text-hero-info flex flex-col gap-2">
            <h2 className="head-hero-info">{head}</h2>
            <p className="paragraph-hero-info">{desc}</p>
        </div>
      


    </div>
  )
}

export default HeroInfo