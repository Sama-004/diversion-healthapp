import { useRef, useState } from "react";
import styles from "./BmiForm.module.css";
import BmiResult from "../BMI Result/BmiResult";
import axios from "axios";

const BmiForm = () => {
  const [bmi, setBmi] = useState(null);

  const ageRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const height = heightRef.current.value;
    const weight = weightRef.current.value;

    axios
      .post("/api/calculate-bmi", {
        height: height,
        weight: weight,
      })
      .then((res) => {
        console.log(res.data);
        setBmi({
          bmi: res.data.bmi,
          recommendedDiet: res.data.foodRecommendations,
        });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });

    // Reset form fields
    ageRef.current.value = "";
    heightRef.current.value = "";
    weightRef.current.value = "";
    maleRef.current.checked = false;
    femaleRef.current.checked = false;
  };

  return (
    <>
      {bmi !== null ? (
        <BmiResult result={bmi} />
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Check Your BMI</h1>
          <div className={styles.genderContainer}>
            <div className="male">
              <img
                className={styles.genderImg}
                src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
                alt=""
              />
              <br />
              <input type="radio" name="gender" ref={maleRef} />
            </div>
            <div className="female">
              <img
                className={styles.genderImg}
                src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-5-512.png"
                alt=""
              />
              <br />
              <input type="radio" name="gender" ref={femaleRef} />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              ref={ageRef}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="years"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Height</label>
            <input
              ref={heightRef}
              type="number"
              step="0.1"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="eg: 5.11 ft"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              ref={weightRef}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="kg"
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      )}
    </>
  );
};

export default BmiForm;
