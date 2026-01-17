import React, { useState } from "react";
import { motion } from "motion/react";
import Input from "../components/Input";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800/50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8 ">
        <h2 className="text-3xl font-bold mb-6 text-center bg-linear-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Login to Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <Input
              icon={Lock}
              type={isPasswordShow ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={() => setIsPasswordShow(!isPasswordShow)}
              className="absolute top-0 right-0 translate-3 pr-6 cursor-pointer"
            >
              {isPasswordShow ? (
                <Eye className="text-green-500 size-5" />
              ) : (
                <EyeClosed className="text-green-500 size-5" />
              )}
            </button>
          </div>
        </form>
        <motion.button
          className="mt-5 w-full py-3 px-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
        >
          Sign In
        </motion.button>
      </div>
      <div className="px-8 py-4 bg-gray-900/50 flex gap-1 justify-center items-center">
        <p className=" text-gray-400">Don't have an account?</p>
        <Link to="/signup" className="text-green-400 hover:underline">
          Sign Up
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginPage;
