import "../../App.css";
import "./CardAbout.css";

function CardAbout({icon,head,desc}) {
  return (
    <div className="card-about">
        {icon}

      <h1 className="header-card-about">{head}</h1>
      <p className="desc-card-about">
        {desc}
      </p>
    </div>
  );
}

export default CardAbout;
