"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/lib/AuthApi";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = await registerUser(username, email, password);

    setLoading(false);

    if (data) {
      setUsername("");
      setEmail("");
      setPassword("");

      setSuccess(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#F5EEDC] flex justify-center items-center px-4 relative">
      {success && (
        <div className="absolute top-8 right-8 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg z-50">
          Registration Successful ✓
        </div>
      )}

      <div className="w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-[40px] bg-[#FFF9EF] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="hidden md:flex flex-col justify-center px-10 py-12 bg-[linear-gradient(to_bottom,#F6DD98,#E8C46A)]">
          <p className="text-[#5F4A2F] mb-3">Welcome to</p>

         <div className="flex items-center gap-3 mb-5">
  <img
    src="/Images/Logo.png"
    alt="Farmora"
    className="h-40 w-auto"
  />

  <h1 className="text-5xl font-bold text-[#2E1F12]">
    Farm<span className="text-[#E88A17]">ora</span>
  </h1>
</div>


          <p className="mt-5 text-[#4A3A2A] leading-7">
            Fresh fruits delivered with a smooth and healthy shopping
            experience.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#2E1F12] mb-2">
            Create Account
          </h2>

          <p className="text-[#7C6A52] mb-8">Join Farmora today</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#F7F1E4] border border-[#E9DFC9] outline-none focus:border-[#E88A17]"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#F7F1E4] border border-[#E9DFC9] outline-none focus:border-[#E88A17]"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#F7F1E4] border border-[#E9DFC9] outline-none focus:border-[#E88A17]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-[#E88A17] hover:bg-[#d97706] text-white font-medium transition"
            >
              {loading ? "Creating..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-6 text-[#7C6A52]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#E88A17] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
