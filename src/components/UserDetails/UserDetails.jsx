import Nav from "../Nav/Nav";
import "./UserDetails.css";
import { useLoaderData } from "react-router-dom";
function UserDetails() {
  const user = useLoaderData();

  return (
    <div>
      <Nav hasSearch={false} />
      <div className="user-details-container">
        <div className="user-details">
          <div className="user-img">
            <img src={user.image} alt="user" />
          </div>
          <div className="user-description">
            <h2 className="user-name">
              {user.firstName} {user.lastName}
            </h2>
            <p className="user-email">{user.email}</p>
            <p className="user-address">
              {user.address.address}, {user.address.city}
            </p>
            <p className="user-company">{user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);

  if (!res.ok) {
    throw Error("Could not fetch the data for that resource");
  }
  return res.json();
}

export default UserDetails;
