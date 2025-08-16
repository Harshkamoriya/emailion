import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import { useClerk } from "@clerk/nextjs";

export default async function Home() {
  
  return (<>
  
      <h1 className=" bg-amber-800"> hello world</h1>
      <p>i am harsh kamoriya</p>
      
  
  </>
  );
}
