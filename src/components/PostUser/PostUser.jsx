import "./PostUser.css";
import { useState } from "react";

function PostUser({ setUsers }) {
  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    company: {
      title: "",
    },
  });

  // Handle Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update nested fields for address and company
    if (name.startsWith("address.")) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name.substring(8)]: value,
        },
      });
    } else if (name.startsWith("company.")) {
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [name.substring(8)]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      image: formData.image,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: {
        address: `${formData.address.street} , ${formData.address.suite}`,
        city: formData.address.city,
      },
      company: {
        name: formData.company.title,
      },
    };

    // make post request
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setUsers((users) => [...users, newUser]);
        console.log(newUser);
      })
      .catch((err) => {
        throw new Error("Something went wrong while adding a new user....");
      });
  };

  return (
    <div className="post-user-form" id="user-form">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Add New User</h2>
        <label htmlFor="image">Avatar</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="URL to Avatar Image"
        />

        <div className="name-div">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address</label>

        <div className="address-input">
          <input
            type="text"
            id="street"
            name="address.street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="suite"
            name="address.suite"
            placeholder="Suite"
            value={formData.address.suite}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="city"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="company.title"
          placeholder="Company"
          value={formData.company.title}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostUser;
