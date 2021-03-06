import React from "react";

export default function () {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    password2: "",
    isSubscribed: false,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.password2) {
      console.log("Successfully Signed UP");
    } else {
      console.log("Password do not match");
      return;
    }

    formData.isSubscribed &&
      console.log("Thanks for signing up the news letter");
  }
  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
        />
        <div className="form-control">
          <input
            type="checkbox"
            id="isSbubscribed"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleChange}
          />
          <label htmlFor="isSubscribed">I want to join the newsletter</label>
        </div>
        <button className="form-control">Sign Up</button>
      </form>
    </div>
  );
}

// import React from "react";

// export default function Form() {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comment: "",
//     isFriendly: true,
//     employment: "",
//     favColor: "",
//   });

//   //   console.log(formData.favColor);

//   function handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       comment: "",
//       isFriendly: false,
//       employment: "",
//       favColor: "",
//     });
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="first name"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="last name"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <textarea
//           placeholder="Comments"
//           value={formData.comment}
//           onChange={handleChange}
//           name="comment"
//         />
//         <div className="checkbox">
//           <input
//             type="checkbox"
//             id="isFriendly"
//             checked={formData.isFriendly}
//             name="isFriendly"
//             onChange={handleChange}
//           />
//           <label htmlFor="isFriendly">Are you Friendly?</label>
//         </div>
//         <fieldset>
//           <legend>Current Employment Status</legend>
//           <div className="fieldset-child">
//             <input
//               type="radio"
//               id="unemployed"
//               name="employment"
//               value="unemployed"
//               onChange={handleChange}
//             />
//             <label htmlFor="unemployed">Unemployed</label>
//           </div>
//           <div className="fieldset-child">
//             <input
//               type="radio"
//               id="part-time"
//               name="employment"
//               value="part-time"
//               onChange={handleChange}
//             />
//             <label htmlFor="part-time">Part-time</label>
//           </div>
//           <div className="fieldset-child">
//             <input
//               type="radio"
//               id="full-time"
//               name="employment"
//               value="full-time"
//               onChange={handleChange}
//             />
//             <label htmlFor="full-time">Full-Time</label>
//           </div>
//         </fieldset>
//         <div className="drop-down">
//           <label htmlFor="favColor">What is you favorite Color?</label>
//           <select
//             name="favColor"
//             id="favColor"
//             value={formData.favColor}
//             onChange={handleChange}
//           >
//             <option value="">--choose Color--</option>
//             <option value="red">Red</option>
//             <option value="blue">Blue</option>
//             <option value="green">Green</option>
//             <option value="violet">Violet</option>
//             <option value="orange">Orange</option>
//           </select>
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }
