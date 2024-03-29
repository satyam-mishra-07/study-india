const z = require("zod");

// Creating an Object Schema
const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be atleast of 10 characters" })
    .max(12, { message: "Phone must not be more than 12 characters" }),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be atleast of 3 characters" })
    .max(255, { message: "Message must not be more than 255 characters" })
});

module.exports = contactSchema;