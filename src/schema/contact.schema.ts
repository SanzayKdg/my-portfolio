import { z } from "zod";

const ContactFormSchema = z.object({
  from_name: z.string().min(1, "Name is required!"),
  from_email: z.email().min(1, "Email is required!"),
  message: z
    .string()
    .min(1, "Message is required!")
    .min(10, "Message must be at least 10 characters long!"),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;
export { ContactFormSchema };
