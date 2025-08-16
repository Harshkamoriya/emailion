import { db } from "@/server/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const {data} = await req.json();
  console.log("clerk webhook received", data);
  console.log(data.first_name ," firstname")

const emailAddress = data.email_addresses?.[0]?.email_address || "kamoriyaharsh@gmail.com"; // safe fallback
  const firstName = data.first_name
  const lastName = data.last_name
  const imageUrl = data.image_url
  const id = data.id

  await db.user.create({
    data:{
        id:id,
        email:emailAddress,
        firstName:firstName,
        lastName:lastName,
        imageUrl:imageUrl
    }

  })

  console.log("user created");

  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
};
