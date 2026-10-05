import React, { useState } from "react";
import "../styles/reg.css";
import axios from "axios";

const Reg = () => {
  let user_url = "http://localhost:5000/user";

  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [Address, setAddress] = useState("");
  let [Password, setPassword] = useState("");
  let [Phone, setPhone] = useState("");
  let [ConfirmPassword, setConfirmPassword] = useState("");

  let userdata = {
    FirstName,
    LastName,
    Email,
    gender,
    Address,
    Password,
    Phone,
    ConfirmPassword,
  };
  // console.log(userdata);

  // let regFname = /^[a-zA-Z]{3,20}$/;
  // let regLname = /^[a-zA-Z]{3,20}$/;
  // let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{3,20}$/;
  // let regAddress = /^[a-zA-Z0-9]{10,20}$/;
  // let regPassword = /^[a-zA-Z0-9]{8,20}$/;
  // let regPhone = /^[a-zA-Z0-9] {8,20}$/;

  // let validation = () => {
  //   // if (
  //   //   FirstName == "" ||
  //   //   LastName == "" ||
  //   //   Email == "" ||
  //   //   gender == "" ||
  //   //   Address == "" ||
  //   //   Password == "" ||
  //   //   Phone == "" ||
  //   //   ConfirmPassword == ""
  //   // ) {
  //   //   alert("All fields are required");
  //   //   return false;
  //   // }

  //   if (!regFname.test(FirstName)) {
  //     alert("Invalid First Name");
  //     return false;
  //   }
  //   if (!regLname.test(LastName)) {
  //     alert("Invalid Last Name");
  //     return false;
  //   }
  //   if (!regEmail.test(Email)) {
  //     alert("Invalid Email");
  //     return false;
  //   }
  //   if (!regAddress.test(Address)) {
  //     alert("Invalid Address");
  //     false;
  //   }
  //   if (!regPassword.test(Password)) {
  //     alert("Invalid Password");
  //     return false;
  //   }
  //   if (!regPhone.test(Phone)) {
  //     alert("Invalid Phone");
  //     return false;
  //   }
  //   if (!regPassword.test(ConfirmPassword)) {
  //     alert("Invalid Confirm Password");
  //     return false;
  //   }
  //   if (Password != ConfirmPassword) {
  //     alert("Password and Confirm Password should be same");
  //     return false;
  //   }

  //   return true;
  // };

  let regFname = /^[a-zA-Z]{3,20}$/;
  let regLname = /^[a-zA-Z]{1,20}$/;
  let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,10}$/;
  let regAddress = /^[a-zA-Z0-9\s,.-]{10,100}$/;
  let regPassword = /^[a-zA-Z0-9@]{8,20}$/;
  let regPhone = /^[6-9][0-9]{9}$/;

  let validation = () => {
    if (
      FirstName == "" ||
      LastName == "" ||
      Email == "" ||
      gender == "" ||
      Address == "" ||
      Password == "" ||
      Phone == "" ||
      ConfirmPassword == ""
    ) {
      alert("All fields are required");
      return false;
    }

    if (!regFname.test(FirstName)) {
      alert("Invalid First Name");
      return false;
    }

    if (!regLname.test(LastName)) {
      alert("Invalid Last Name");
      return false;
    }

    if (!regEmail.test(Email)) {
      alert("Invalid Email");
      return false;
    }

    if (!regAddress.test(Address)) {
      alert("Invalid Address");
      return false;
    }

    if (!regPassword.test(Password)) {
      alert("Invalid Password");
      return false;
    }

    if (!regPhone.test(Phone)) {
      alert("Invalid Phone");
      return false;
    }

    if (!regPassword.test(ConfirmPassword)) {
      alert("Invalid Confirm Password");
      return false;
    }

    if (Password != ConfirmPassword) {
      alert("Password and Confirm Password should be same");
      return false;
    }

    return true;
  };

  const register = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    // user email exist or not

    axios.get(user_url).then((res) => {
      console.log(res.data);

      let user = res.data.find((x) => x.Email == Email);
      if (user) {
        alert("Email already exist");
        return;
      } else {
        axios
          .post(user_url, userdata)
          .then((res) => {
            alert("Registered Successfully");
          })
          .catch((err) => {
            alert("network error");
          });
      }
    });
  };

  return (
    <div className="reg-container">
      <form action="" className="reg-form" onSubmit={register}>
        <h1> Register Form </h1>
        <div>
          <label>FirstName :</label>
          <input
            type="text"
            placeholder="FirstName"
            onChange={(x) => {
              setFirstName(x.target.value);
            }}
          />
        </div>
        <div>
          <label>LastName :</label>
          <input
            type="text"
            placeholder="LastName"
            onChange={(x) => {
              setLastName(x.target.value);
            }}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(x) => {
              setEmail(x.target.value);
            }}
          />
        </div>
        <div>
          <label> gender :</label>

          <label> male </label>

          <input
            type="radio"
            value="male"
            name="gender"
            onChange={(x) => {
              setGender(x.target.value);
            }}
          />

          <label> female </label>

          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(x) => {
              setGender(x.target.value);
            }}
          />

          <label> others </label>

          <input
            type="radio"
            value="others"
            name="gender"
            onChange={(x) => {
              setGender(x.target.value);
            }}
          />
        </div>
        <div>
          <label> Address </label>
          <input
            type="text"
            placeholder="Address"
            onChange={(x) => {
              setAddress(x.target.value);
            }}
          />
        </div>
        <div>
          <label> Phone </label>
          <input
            type="text"
            placeholder="Phone"
            onChange={(x) => {
              setPhone(x.target.value);
            }}
          />
        </div>
        <div>
          <label> Password </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(x) => {
              setPassword(x.target.value);
            }}
          />
        </div>
        <div>
          <label> Confirm Password </label>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(x) => {
              setConfirmPassword(x.target.value);
            }}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Reg;
