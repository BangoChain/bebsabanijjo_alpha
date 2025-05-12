// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import { Button, TextField, Typography } from "@mui/material";
// import { toast } from "sonner";
// import { Client } from "ssh2";

// const schema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   email: z.string().email(),
//   userName: z.string().min(1),
//   phoneNumber: z.string().min(1),
// });

// type FormData = z.infer<typeof schema>;

// const RegistrationPage = () => {
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploaded, setUploaded] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({ resolver: zodResolver(schema) });

//   const uploadImageToSFTP = async (file: File) => {
//     return new Promise<string>((resolve, reject) => {
//       const conn = new Client();
//       conn
//         .on("ready", () => {
//           conn.sftp((err, sftp) => {
//             if (err) reject(err);

//             const remoteDir = "/root/images/tenant/";
//             const remotePath = `${remoteDir}${file.name}`;

//             // Check & create folder if not exist
//             sftp.opendir(remoteDir, (err) => {
//               if (err) {
//                 sftp.mkdir(remoteDir, { mode: 0o755 }, (mkdirErr: unknown) => {
//                   if (mkdirErr) reject(mkdirErr);
//                   else uploadFile();
//                 });
//               } else {
//                 uploadFile();
//               }
//             });

//             function uploadFile() {
//               const writeStream = sftp.createWriteStream(remotePath);
//               const reader = new FileReader();
//               reader.onload = () => {
//                 writeStream.end(Buffer.from(reader.result as ArrayBuffer));
//               };
//               reader.onerror = reject;
//               reader.onloadend = () => {
//                 resolve(remotePath); // or return a URL if accessible via web
//                 conn.end();
//               };
//               reader.readAsArrayBuffer(file);
//             }
//           });
//         })
//         .connect({
//           host: "localhost",
//           port: 22,
//           username: "username", // Replace with real username
//           password: "password", // Replace with real password
//         });
//     });
//   };

//   const onUpload = async () => {
//     if (!imageFile) return;

//     try {
//       setUploading(true);
//       const remotePath = await uploadImageToSFTP(imageFile);
//       setImageUrl(remotePath);
//       setUploaded(true);
//       toast.success("Image uploaded");
//     } catch (err) {
//       toast.error("Image upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const onSubmit = async (data: FormData) => {
//     if (!uploaded || !imageUrl) {
//       toast.error("Please upload an image first");
//       return;
//     }

//     const payload = {
//       ...data,
//       tenantId: 1,
//       roleId: 1,
//       image: imageUrl,
//       status: "active",
//       lastLoginDate: new Date().toISOString(),
//       approvedDate: new Date().toISOString(),
//       isDeleted: false,
//       updatedAt: new Date().toISOString(),
//       totalUpdatedCount: 0,
//       isPasswordResetRequired: true,
//     };

//     try {
//       const res = await fetch("http://localhost:3001/api/sysadmin/user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Failed to register");
//       toast.success("Registration successful");
//     } catch (err) {
//       toast.error("Failed to submit form");
//     }
//   };

//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <Typography variant="h4" className="mb-4">
//         Registration
//       </Typography>

//       <Dropzone onDrop={(acceptedFiles) => setImageFile(acceptedFiles[0])}>
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps()} className="border-2 border-dashed p-4 mb-4">
//             <input {...getInputProps()} />
//             <p>
//               {imageFile
//                 ? `Selected file: ${imageFile.name}`
//                 : "Drag or browse to select an image"}
//             </p>
//           </div>
//         )}
//       </Dropzone>

//       {imageFile && !uploaded && (
//         <Button variant="outlined" onClick={onUpload} disabled={uploading}>
//           {uploading ? "Uploading..." : "Upload"}
//         </Button>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
//         <TextField
//           label="First Name"
//           fullWidth
//           {...register("firstName")}
//           error={!!errors.firstName}
//           helperText={errors.firstName?.message}
//         />
//         <TextField
//           label="Last Name"
//           fullWidth
//           {...register("lastName")}
//           error={!!errors.lastName}
//           helperText={errors.lastName?.message}
//         />
//         <TextField
//           label="Email"
//           fullWidth
//           {...register("email")}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//         />
//         <TextField
//           label="Username"
//           fullWidth
//           {...register("userName")}
//           error={!!errors.userName}
//           helperText={errors.userName?.message}
//         />
//         <TextField
//           label="Phone Number"
//           fullWidth
//           {...register("phoneNumber")}
//           error={!!errors.phoneNumber}
//           helperText={errors.phoneNumber?.message}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={!uploaded}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;

// "use client";

// import { useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import {
//   Button,
//   TextField,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   FormHelperText,
// } from "@mui/material";
// import { toast } from "sonner";

// // Validation schema
// const schema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email"),
//   userName: z.string().min(1, "Username is required"),
//   phoneNumber: z.string().min(1, "Phone number is required"),
//   acceptTerms: z.literal(true, {
//     errorMap: () => ({ message: "You must accept the terms and conditions" }),
//   }),
// });

// type FormData = z.infer<typeof schema>;

// const RegistrationPage = () => {
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [imageUrl, setImageUrl] = useState<string>("");

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<FormData>({ resolver: zodResolver(schema) });

//   const acceptTerms = useWatch({ control, name: "acceptTerms" });

//   const handleUpload = () => {
//     if (!imageFile) return;
//     toast.success("Image uploaded (demo)");
//     setImageUrl(`/images/demo/${imageFile.name}`);
//     setUploaded(true);
//   };

//   const onSubmit = async (data: FormData) => {
//     if (!uploaded || !imageUrl) {
//       toast.error("Please upload an image first");
//       return;
//     }

//     const payload = {
//       ...data,
//       tenantId: 1,
//       roleId: 1,
//       image: imageUrl,
//       status: "active",
//       lastLoginDate: new Date().toISOString(),
//       approvedDate: new Date().toISOString(),
//       isDeleted: false,
//       updatedAt: new Date().toISOString(),
//       totalUpdatedCount: 0,
//       isPasswordResetRequired: true,
//     };

//     console.log("Submitting Payload:", payload);
//     toast.success("Submitted (demo)");
//   };

//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <Typography variant="h4" className="mb-4">
//         Registration
//       </Typography>

//       <Dropzone
//         onDrop={(acceptedFiles) => {
//           const file = acceptedFiles[0];
//           setImageFile(file);
//           setImagePreview(URL.createObjectURL(file));
//           setUploaded(false);
//         }}
//       >
//         {({ getRootProps, getInputProps }) => (
//           <div
//             {...getRootProps()}
//             className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer"
//           >
//             <input {...getInputProps()} />
//             <p>
//               {imageFile
//                 ? `Selected file: ${imageFile.name}`
//                 : "Drag or browse to select an image"}
//             </p>
//           </div>
//         )}
//       </Dropzone>

//       {imagePreview && (
//         <div className="mb-4">
//           <img
//             src={imagePreview}
//             alt="Preview"
//             className="max-h-48 rounded-md border"
//           />
//         </div>
//       )}

//       {imageFile && !uploaded && (
//         <Button variant="outlined" onClick={handleUpload}>
//           Upload
//         </Button>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
//         <TextField
//           label="First Name"
//           fullWidth
//           {...register("firstName")}
//           error={!!errors.firstName}
//           helperText={errors.firstName?.message}
//         />
//         <TextField
//           label="Last Name"
//           fullWidth
//           {...register("lastName")}
//           error={!!errors.lastName}
//           helperText={errors.lastName?.message}
//         />
//         <TextField
//           label="Email"
//           fullWidth
//           {...register("email")}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//         />
//         <TextField
//           label="Username"
//           fullWidth
//           {...register("userName")}
//           error={!!errors.userName}
//           helperText={errors.userName?.message}
//         />
//         <TextField
//           label="Phone Number"
//           fullWidth
//           {...register("phoneNumber")}
//           error={!!errors.phoneNumber}
//           helperText={errors.phoneNumber?.message}
//         />
//         <FormControlLabel
//           control={<Checkbox {...register("acceptTerms")} />}
//           label={
//             <span>
//               I accept the{" "}
//               <a
//                 href="/terms"
//                 className="text-purple-400 font-semibold text-opacity-100	"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Terms of Use
//               </a>{" "}
//               &{" "}
//               <a
//                 href="/privacyPolicy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-purple-400 font-semibold text-opacity-10"
//               >
//                 Privacy Policy
//               </a>
//             </span>
//           }
//         />

//         {errors.acceptTerms && (
//           <FormHelperText error>{errors.acceptTerms.message}</FormHelperText>
//         )}

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={!uploaded || !acceptTerms}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;

"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Header from "@/app/(components)/commons/Header";
import SignUpCard from "@/app/(components)/registration/SignUpCard";
import Contents from "@/app/(components)/registration/Content";
import Footer from "@/app/(components)/commons/Footer";

const Page = () => {
  return (
    <>
      <Header />
      <CssBaseline />

      <Stack
        direction="column"
        component="main"
        sx={{
          justifyContent: "center",
          minHeight: "100vh",
          position: "relative",
          px: 1, // 👈 Minimal horizontal padding
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            zIndex: -1,
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          gap={{ xs: 4, sm: 8 }}
          mx="auto"
          py={4}
          width="100%"
          maxWidth="1200px" // 👈 Optional: limit max width on large screens
          px={1} // 👈 Minimal side padding inside the content area
        >
          <Contents />
          <SignUpCard />
        </Stack>
      </Stack>

      <Footer />
    </>
  );
};

export default Page;
