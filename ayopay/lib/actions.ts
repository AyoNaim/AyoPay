import { ID } from "node-appwrite";
import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect, useSearchParams } from "next/navigation";
import { parseStringify } from "./utils";

export async function signUpWithEmail(formData: FormData) {
  "use server";

  // const email = formData.get("email");
  const email = 'john@doe.com';
  // const password = formData.get("password");
  const password = 'ayolatunji';
  // const name = formData.get("firstname");
  const name = 'john';
  const { account } = await createAdminClient();

  const newUserAccount = await account.create(ID.unique(), email, password, name);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect('/SignIn')
  return parseStringify(newUserAccount);
  

}

// the SignUpPage component ...
