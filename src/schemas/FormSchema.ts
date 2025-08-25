import { countries } from "@/constants/countries";
import z from "zod";

const passwordSchema = z
  .string()
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character"
  );

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z]/, "Name must start with an uppercase letter"),
  age: z.number("Please enter valid age").min(1, "Please enter valid age"),
  email: z.email(),
  passwords: z
    .object({
      password: passwordSchema,
      confirmPassword: z.string(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "Password and Confirm password should be same",
      path: ["confirmPassword"],
    }),
  gender: z.union([z.literal("Man"), z.literal("Woman")], {
    message: "Please select gender",
  }),
  country: z.enum(countries, "Please select correct country"),
  file: z
    .instanceof(FileList, { message: "Please select file" })
    .refine((fileList) => fileList.length > 0, "File is required")
    .refine(
      (files) => {
        const [file] = files;

        if (file) {
          return ["image/png", "image/jpeg", "image/jpg"].includes(file.type);
        }
      },
      { message: "Invalid document file type" }
    )
    .refine(
      (files) => {
        const [file] = files;

        if (file) {
          return file.size <= 2000000;
        }
      },
      {
        message: "Max allowed size is 2MB",
      }
    ),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});
