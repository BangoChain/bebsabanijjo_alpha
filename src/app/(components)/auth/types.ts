// // // @/app/(components)/auth/types.ts
// // import { z } from "zod";

// // // Company Info Schema & Type
// // export const companySchema = z.object({
// //   name: z.string().min(1, "Company name is required"),
// //   logo: z.string().url("Logo must be a valid URL"),
// //   address: z.string().min(1, "Address is required"),
// //   city: z.string().min(1, "City is required"),
// //   state: z.string().min(1, "State is required"),
// //   country: z.string().min(1, "Country is required"),
// //   phone: z.string().min(1, "Phone is required"),
// //   email: z.string().email("Invalid email address"),
// // });

// // export type CompanyFormData = z.infer<typeof companySchema>;

// // export type CompanyFormState = CompanyFormData & {
// //   logoFile?: File | null;
// //   logoPreview?: string | null;
// //   uploaded?: boolean;
// //   uploadError?: string | null;
// //   uploadLoading?: boolean;
// // };

// // // User Info Schema & Type (for Step 2)
// // export const userSchema = z.object({
// //   firstName: z.string().min(1, "First name is required"),
// //   lastName: z.string().min(1, "Last name is required"),
// //   email: z.string().email("Invalid email address"),
// //   userName: z.string().min(1, "Username is required"),
// //   phoneNumber: z.string().min(1, "Phone number is required"),
// //   // image: z.string().url("Image must be a valid URL"),
// //   acceptTerms: z.literal(true, {
// //     errorMap: () => ({ message: "You must accept the terms and conditions" }),
// //   }),
// // });

// // export type UserFormData = z.infer<typeof userSchema>;

// // ------------------ real one
// import { z } from "zod";

// /** ------------------------------
//  * Company Info Schema & Types
//  * ----------------------------- */
// export const companySchema = z.object({
//   name: z.string().min(1, "Company name is required"),
//   logo: z.string().url("Logo must be a valid URL").or(z.literal("").optional()), // Allow empty if file is uploaded
//   address: z.string().min(1, "Address is required"),
//   city: z.string().min(1, "City is required"),
//   state: z.string().min(1, "State is required"),
//   country: z.string().min(1, "Country is required"),
//   phone: z
//     .string()
//     .min(10, "Phone must be at least 10 digits")
//     .regex(/^\+?[0-9\s\-]+$/, "Invalid phone number format"),
//   email: z.string().email("Invalid email address"),
// });

// export type CompanyFormData = z.infer<typeof companySchema>;

// export type CompanyFormState = CompanyFormData & {
//   logoFile?: File | null; // File from input[type=file]
//   logoPreview?: string | null; // URL for preview
//   uploaded?: boolean; // Upload status flag
//   uploadError?: string | null; // Upload error message
//   uploadLoading?: boolean; // Loading state
// };

// /** ------------------------------
//  * User Info Schema & Types
//  * ----------------------------- */
// export const userSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   userName: z
//     .string()
//     .min(3, "Username must be at least 3 characters")
//     .regex(
//       /^[a-zA-Z0-9_]+$/,
//       "Username can only include letters, numbers, and underscores"
//     ),
//   phoneNumber: z
//     .string()
//     .min(10, "Phone number must be at least 10 digits")
//     .regex(/^\+?[0-9\s\-]+$/, "Invalid phone number format"),
//   image: z
//     .string()
//     .url("Profile image must be a valid URL")
//     .or(z.literal("").optional()), // Like logo, support file + empty
//   acceptTerms: z.literal(true, {
//     errorMap: () => ({ message: "You must accept the terms and conditions" }),
//   }),
// });

// export type UserFormData = z.infer<typeof userSchema>;

// export type UserFormState = UserFormData & {
//   imageFile?: File | null;
//   imagePreview?: string | null;
//   uploaded?: boolean;
//   uploadError?: string | null;
//   uploadLoading?: boolean;
// };
