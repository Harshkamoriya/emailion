"use client";

import { SignIn, useClerk } from "@clerk/nextjs";

export default function Page() {

  return (
    <>
      <div className="flex justify-center items-center p-10 py-15">
        <div className="flex items-center bg-amber-200 justify-center">
          <SignIn />
        </div>
      </div>

    
    </>
  );
}
