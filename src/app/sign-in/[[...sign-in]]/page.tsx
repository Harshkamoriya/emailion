"use client";

import { SignIn, useClerk } from "@clerk/nextjs";

export default function Page() {
  const { signOut } = useClerk();

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div>
          <SignIn />
        </div>
      </div>

      <button
        onClick={() => signOut({ redirectUrl: "/" })}
        className="px-4 py-2 rounded bg-red-600 text-white mt-4"
      >
        Logout
      </button>
    </>
  );
}
