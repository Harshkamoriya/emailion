"use client";

import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut({ redirectUrl: "/sign-in" })} // redirect to sign-in page after logout
      className="p-2 bg-red-500 cursor-pointer text-white rounded"
    >
      Logout
    </button>
  );
}
