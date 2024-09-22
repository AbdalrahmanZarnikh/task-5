import "../../App.css"
import HeaderSection from "../HeaderSection/HeaderSection"
import ImageDeal from "../ImageDeal/ImageDeal"
import "./Deals.css"

function Deals() {
  const imagesDeal=[
    {
      img:  <img src="/images/deal1.jpg" alt="" />
    },
    {
      img:  <img src="/images/deal2.jpg" alt="" />
    },
    {
      img:  <img src="/images/deal3.jpg" alt="" />
    },
  ]
  return (
    <div className="my-container main-margin deals">
        <HeaderSection head={"Best Real Estate Deals"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing eli"}/>

        <ul>
            <li className="active"><a href="#">Residential Property</a></li>
            <li><a href="#">Commercial Property</a></li>
            <li><a href="#">Agriculture Property</a></li>
            <li><a href="#">Industrial Property</a></li>
        </ul>
        <div className="images">
           {imagesDeal.map((ele)=>{
             return(
              <ImageDeal img={ele.img}/>
             )
           })}
        </div>
    </div>
  )
}

export default Deals