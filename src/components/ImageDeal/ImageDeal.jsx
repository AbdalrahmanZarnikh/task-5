import "./ImageDeal.css"

function ImageDeal({img}) {
  return (
    <div className="deal-imgae">
         <div className="features-btn">
          <button>Featured</button>
          <button>3D</button>
         </div>
         {img}
    </div>
  )
}

export default ImageDeal