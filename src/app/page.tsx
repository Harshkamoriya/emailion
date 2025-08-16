import Link from "next/link";


import LogoutButton from "@/components/auth/logout";

export default async function Home() {
  
  return (<>
  
      <h1 className=" bg-amber-800"> hello world</h1>
      <p>i am harsh kamoriya</p>
      <LogoutButton/>
      
      
  
  </>
  );
}
