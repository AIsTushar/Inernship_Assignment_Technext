import "./Card.css";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <Link to={`/cards/${user.id}`}>
      {/* card */}
      <div className="card">
        {/* img */}
        <div className="card-img">
          <img src={user.image} alt="Avater" />
        </div>
        {/* description */}
        <div className="card-description">
          <h2 className="user-name">
            {user.firstName} {user.lastName}
          </h2>
          <p className="user-email">{user.email}</p>
          <p className="user-address">
            {user.address.address}, {user.address.city},
          </p>
          <p className="user-address">{user.company.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
