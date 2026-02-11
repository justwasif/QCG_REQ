import React, { useState } from "react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
  });

  const signupValidationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions")
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log("Login values:", values);
    }
  });
  const navigate=useNavigate();
  const handleSignup=()=>{
    navigate("/home")

  }

  const signupFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log("Signup values:", values);
    }
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4"
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')",
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      
      <div 
        className={`relative w-full max-w-md ${isFlipped ? "rotate-180" : ""}`}
        style={{ perspective: "1000px" }}
      >
        <div className="w-full duration-1000 transition-all" style={{ transformStyle: "preserve-3d" }}>
          {/* Login Card */}
          <div className={`absolute w-full ${!isFlipped ? "visible" : "invisible"}`} style={{ backfaceVisibility: "hidden" }}>
            <div className="w-full p-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
              <form onSubmit={loginFormik.handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...loginFormik.getFieldProps("email")}
                    aria-label="Email Address"
                  />
                  {loginFormik.touched.email && loginFormik.errors.email && (
                    <div className="text-red-200 text-sm mt-1">{loginFormik.errors.email}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...loginFormik.getFieldProps("password")}
                    aria-label="Password"
                  />
                  {loginFormik.touched.password && loginFormik.errors.password && (
                    <div className="text-red-200 text-sm mt-1">{loginFormik.errors.password}</div>
                  )}
                </div>
                <div className="text-right">
                  <a href="#" className="text-sm text-white hover:text-opacity-80">Forgot Password?</a>
                </div>
                <button
                  type="submit" onClick={handleSignup}
                  className="w-full py-2 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white font-semibold transition-all duration-300"
                >
                  Login
                </button>
              </form>
              <div className="mt-6">
                <div className="flex justify-center space-x-4">
                  <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300">
                    <FaGoogle size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300">
                    <FaGithub size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300">
                    <FaLinkedin size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsFlipped(true)}
                  className="text-white hover:text-opacity-80"
                >
                  
                </button>
              </div>
            </div>
          </div>

          {/* Signup Card
          <div 
            className={`absolute w-full ${isFlipped ? "visible" : "invisible"}`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="w-full p-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
              <form onSubmit={signupFormik.handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...signupFormik.getFieldProps("fullName")}
                    aria-label="Full Name"
                  />
                  {signupFormik.touched.fullName && signupFormik.errors.fullName && (
                    <div className="text-red-200 text-sm mt-1">{signupFormik.errors.fullName}</div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...signupFormik.getFieldProps("email")}
                    aria-label="Email Address"
                  />
                  {signupFormik.touched.email && signupFormik.errors.email && (
                    <div className="text-red-200 text-sm mt-1">{signupFormik.errors.email}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...signupFormik.getFieldProps("password")}
                    aria-label="Password"
                  />
                  {signupFormik.touched.password && signupFormik.errors.password && (
                    <div className="text-red-200 text-sm mt-1">{signupFormik.errors.password}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    {...signupFormik.getFieldProps("confirmPassword")}
                    aria-label="Confirm Password"
                  />
                  {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword && (
                    <div className="text-red-200 text-sm mt-1">{signupFormik.errors.confirmPassword}</div>
                  )}
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="mr-2"
                    {...signupFormik.getFieldProps("terms")}
                  />
                  <label htmlFor="terms" className="text-white text-sm">I agree to the Terms and Conditions</label>
                </div>
                {signupFormik.touched.terms && signupFormik.errors.terms && (
                  <div className="text-red-200 text-sm">{signupFormik.errors.terms}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white font-semibold transition-all duration-300"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsFlipped(false)}
                  className="text-white hover:text-opacity-80"
                >
                  Already have an account? Login
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;