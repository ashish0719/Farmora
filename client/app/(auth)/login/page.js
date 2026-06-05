"use client";

import { useState } from "react";
import Link from "next/link";
import { loginUser } from "@/lib/AuthApi";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const { login } = useAuth();

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = await loginUser(identifier, password);

    setLoading(false);

    if (data) {
      login(data);

      setSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      alert("Login Failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#F5EEDC] flex justify-center items-center px-4 relative">
      {success && (
        <div className="absolute top-8 right-8 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg z-50">
          Login Successful ✓
        </div>
      )}

      <div className="w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-[40px] bg-[#FFF9EF] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="hidden md:flex flex-col justify-center px-10 py-12 bg-[linear-gradient(to_bottom,#F6DD98,#E8C46A)]">
          <p className="text-[#5F4A2F] mb-3">Welcome Back</p>

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
            Login and continue your fresh shopping experience with us.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#2E1F12] mb-2">Login</h2>

          <p className="text-[#7C6A52] mb-8">Welcome back to Farmora</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="text"
              placeholder="Email or Username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-[#7C6A52]">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#E88A17] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
