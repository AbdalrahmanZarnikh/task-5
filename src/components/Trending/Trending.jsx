import "../../App.css"
import HeaderSection from "../HeaderSection/HeaderSection"
import TrendingCard from "../TrendingCard/TrendingCard"
import "./Trending.css"

function Trending() {
  const infoCards=[
    {
      img:<img src="/images/trend1.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
    {
      img:<img src="/images/trend2.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
    {
      img:<img src="/images/trend3.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
    {
      img:<img src="/images/trend4.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
    {
      img:<img src="/images/trend5.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
    {
      img:<img src="/images/trend6.png" alt="" />,
      price:"$300000",
      name:"Luxury Apartment inCalifornia",
      loc:"1901 Thornridge Cir. Shiloh, Hawaii 81063"
    },
  ]
  return (
    <div className="my-container main-margin">
        <HeaderSection head={"Most Trending"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing eli"}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-start ">
          {infoCards.map((card)=>{
            return(
              <TrendingCard img={card.img} price={card.price} name={card.name} loc={card.loc}/>
            )
          })}
        </div>
    </div>
  )
}

export default Trending