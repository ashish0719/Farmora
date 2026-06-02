"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <div className="bg-white rounded-3xl p-8 shadow">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <p className="mb-3">
          <strong>Username:</strong> {user.username}
        </p>

        <p className="mb-6">
          <strong>Email:</strong> {user.email}
        </p>

        <button
          onClick={logout}
          className="bg-[#E88A17] text-white px-5 py-3 rounded-xl"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
