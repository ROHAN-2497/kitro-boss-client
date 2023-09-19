import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // watch,/
    reset,
    formState: { errors },
  } = useForm();
  const { createLoginUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createLoginUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
  console.log('user profile info update')
  reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Profile Update SuccessFully',
    showConfirmButton: false,
    timer: 1500
  })
  navigate('/')
      })
      .catch(error => console.log(error))
      
    });
  };

  // console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Kitro Boss || sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="type Here"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              {errors.name && (
                <span className="text-red-600">name is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              {errors.photoURL && (
                <span className="text-red-600">PhotoURL is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              {errors.email && <span>email feild is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    minLength: 6,
                    pattern: /[A-Z a-z]/,
                    maxLength: 20,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              {errors.password && <span>password field is required</span>}
              {errors.password?.type === "minLength" && (
                <p>password must be 6 charecter</p>
              )}
              {errors.password?.type === "pattern" && (
                <p>password must be one capital charecter</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p>password must be less then 20 charecter</p>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary "
                  type="submit"
                  value="Sign up"
                />
              </div>
              <p>
                Already registered?{" "}
                <Link to="/login" className="text-blue-600 font-semibold">
                  Go to login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
