import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigateTo = useNavigate();
  return (
    <div
      className={`row flex-lg-row-reverse align-items-center g-5 py-5 ${styles.container}`}
      style={{ margin: "25px auto" }}
    >
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/healthcare-5378096-4494352.png"
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Nurturing Your Mind and Body
        </h1>
        <p className="lead">
          Embark on a well-being journey with MindScale, where we seamlessly
          integrate physical and mental health support. Our platform offers
          personalized food recommendations, health tips, and individualized
          mental-health feedback. It's your all-in-one solution for a balanced
          and healthier life. Join us in this transformative experience,
          unlocking your full potential and embracing vitality. Your well-being,
          reimagined.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            onClick={() => {
              navigateTo("/bmi-home");
            }}
            className="btn btn-primary btn-lg px-4 me-md-2"
          >
            Check BMI
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => {
              navigateTo("/quiz-home");
            }}
          >
            Take Mental Health Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
