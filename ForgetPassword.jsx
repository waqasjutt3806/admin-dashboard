import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [step, setStep] = useState(1); // step 1=Email, 2=Email Sent, 3=Reset Password
  const [loading, setLoading] = useState(false);

  // Fake submit handler
  const handleNext = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1500);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-700">
      <div className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        
        {/* STEP 1 - Enter Email */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Forgot Password
            </h2>
            <form onSubmit={handleNext} className="flex flex-col space-y-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition flex items-center justify-center"
                disabled={loading}
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                )}
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
              <p className="text-center text-sm text-gray-300">
                Back to{" "}
                <Link to="/login" className="text-blue-300 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </>
        )}

        {/* STEP 2 - Email Sent */}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Check Your Email
            </h2>
            <p className="text-gray-200 mb-6">
              We sent a password reset link to your email. Click the link to
              continue.
            </p>
            <button
              onClick={() => setStep(3)}
              className="bg-gradient-to-r from-purple-500 to-pink-600 py-3 px-6 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 3 - Reset Password */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Reset Password
            </h2>
            <form onSubmit={handleNext} className="flex flex-col space-y-5">
              <input
                type="password"
                placeholder="New Password"
                className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-600 py-3 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition flex items-center justify-center"
                disabled={loading}
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                )}
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        )}

        {/* STEP 4 - Success */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">✅ Success!</h2>
            <p className="text-gray-200 mb-6">
              Your password has been reset successfully.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-green-500 to-teal-600 py-3 px-6 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
