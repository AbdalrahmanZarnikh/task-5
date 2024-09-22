import "../../App.css"
import "./HeaderSection.css"

function HeaderSection({head,desc}) {
  return (
    <div>
        <h1 className="header-sec">{head}</h1>
        <p className="desc-sec">{desc}</p>
    </div>
  )
}

export default HeaderSection