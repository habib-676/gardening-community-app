import React, { use } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed Up <3",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/browse-tips");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
        });
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully signed Up <3",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/browse-tips");
      })
      .catch((error) => {
        const errMsg = error.message;
        const errorCode = error.code;

        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errMsg,
        });
        navigate("/browse-tips");
      });
  };
  return (
    <div className="mb-14">
      <h3 className="text-3xl font-bold text-center my-10">Sign up Now</h3>
      <div className="card bg-base-200 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSignUp}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input border-accent-content"
              placeholder="Name"
              name="name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-accent-content"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">
              PhotoUrl
              <span className="text-secondary-content">(From imgbb )</span>
            </label>
            <input
              type="text"
              className="input border-accent-content"
              placeholder="Photo link "
              name="photo"
              required
            />
            <label className="label">Password</label>
            <label className="input validator border-accent-content border">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                title="Must be at least 8 characters, including number, lowercase letter, uppercase letter , special letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be at least 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter <br />
              At least one special character
            </p>
            <div>
              <p>
                Already have an account?{" "}
                <Link
                  className="link link-hover text-blue-400"
                  to={"/auth/login"}
                >
                  Login
                </Link>
              </p>
            </div>
            <input
              className="btn btn-secondary text-primary-content"
              type="submit"
              value="Sign UP"
            />
          </form>
          <button
            className="btn btn-secondary text-primary-content"
            onClick={handleGoogle}
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
