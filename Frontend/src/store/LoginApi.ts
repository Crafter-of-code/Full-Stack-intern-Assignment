import { z } from "zod";
export default async function LoginApi(Data: {
  userId: string;
  userPassword: string;
}) {
  const userSchema = z.object({
    userId: z.string().min(3),
    userPassword: z.string().min(3),
  });
  const result = userSchema.safeParse(Data);
  if (!result.success) {
    // console.log(result.error.errors[0].path);
    return {
      path: result.error.errors[0].path.toString(),
      message: result.error.errors[0].message.toString(),
    };
  } else {
    try {
      const response_from_server = await fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(result.data),
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
}
