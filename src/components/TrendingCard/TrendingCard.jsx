import "../../App.css"
import "./TrendingCard.css"

function TrendingCard({img,price,name,loc}) {
  return (
    <div className="card-trend">
        {img}
        <h2 className="price">{price}</h2>
        <h1 className="name">{name}</h1>

        <div className="info">
            <img src="/images/location2.svg" alt="" />
            <p>{loc}</p>
        </div>

    </div>
  )
}

export default TrendingCard