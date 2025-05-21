"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Dropzone from "react-dropzone";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import { toast } from "sonner";
import { CompanyFormData, userSchema, UserFormData } from "@/types/auth";
//import { useRouter } from "next/navigation";
import Image from "next/image";
type Props = {
  companyData: CompanyFormData | null;
  onSuccess: (username: string, password: string) => void;
};

const SignUpCard: React.FC<Props> = ({ companyData, onSuccess }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [imageUrl, setImageUrl] = useState(
    "https://example.com/profiles/default.png"
  );
  //const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userSchema) });
  const acceptTerms = useWatch({ control, name: "acceptTerms" });
  // ✅ Handle missing companyData
  if (!companyData) {
    return (
      <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
        <Box className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-md text-center my-4">
          Company data not found. Please complete Step 1 first.
        </Box>
      </Typography>
    );
  }

  const handleUpload = async () => {
    if (!imageFile) {
      toast.error("No image selected");
      return;
    }
    setUploading(true);
    setTimeout(() => {
      // const fileName = imageFile.name.replace(/\s+/g, "-");
      // setImageUrl(`https://example.com/images/${fileName}`);
      setImageUrl("https://example.com/logos/acme.png");
      setUploaded(true);
      toast.success(JSON.stringify(setImageUrl, null, 2)); // OK for debug
      toast.success("Image uploaded successfully");
      setUploading(false);
    }, 1000);
  };
  // const onSubmit = async (data: UserFormData) => {
  //   if (!companyData) {
  //     toast.error("Company info is missing");
  //     return;
  //   }

  //   if (!uploaded || !imageUrl) {
  //     toast.error("Please upload an image first");
  //     return;
  //   }

  //   setLoading(true);
  //   const now = new Date().toISOString();
  //   const domain = `${companyData.name
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^a-z0-9]/g, "")}.bebsabanijjo.com`;

  //   const companyPayload = {
  //     name: companyData.name,
  //     domain,
  //     logo: companyData.logo,
  //     address: companyData.address,
  //     city: companyData.city,
  //     state: companyData.state,
  //     country: companyData.country,
  //     phone: companyData.phone,
  //     email: companyData.email,
  //     isActive: true,
  //     warningMessage: "This is a sample warning message.",
  //   };

  //   let tenantId: string | undefined;

  //   try {
  //     // Step 1: Create Tenant
  //     const companyResponse = await axios.post(
  //       "http://localhost:3001/api/sysadmin/tenant",
  //       companyPayload
  //     );

  //     const parsedCompanyData =
  //       typeof companyResponse?.data?.data === "string"
  //         ? JSON.parse(companyResponse.data.data)
  //         : companyResponse.data.data;

  //     tenantId = parsedCompanyData?.tenantId;
  //     if (!tenantId) throw new Error("Tenant ID not received from server.");

  //     console.log("Tenant created with ID:", tenantId);

  //     // Step 2: Create User
  //     const userPayload = {
  //       tenantId,
  //       roleId: 1,
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       image: imageUrl,
  //       userName: data.userName,
  //       phoneNumber: data.phoneNumber,
  //       status: "active",
  //       lastLoginDate: now,
  //       approvedDate: now,
  //       isDeleted: false,
  //       updatedAt: now,
  //       totalUpdatedCount: 0,
  //       isPasswordResetRequired: true,
  //     };

  //     const userResponse = await axios.post(
  //       "http://localhost:3001/api/sysadmin/user",
  //       userPayload
  //     );

  //     const parsedUserData =
  //       typeof userResponse?.data?.data === "string"
  //         ? JSON.parse(userResponse.data.data)
  //         : userResponse.data.data;

  //     const userName = parsedUserData?.user?.userName;
  //     const password = parsedUserData?.generatedPassword;

  //     if (!userName || !password) {
  //       throw new Error("User creation succeeded but credentials missing.");
  //     }

  //     toast.success("Registration completed successfully!");
  //     onSuccess(userName, password);
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       toast.error(error.response?.data?.message || error.message);
  //     } else if (error instanceof Error) {
  //       toast.error(error.message);
  //     } else {
  //       toast.error("Something went wrong during registration.");
  //     }

  //     console.error("Registration failed:", error);

  //     // Rollback tenant if created but user failed
  //     if (tenantId) {
  //       try {
  //         await axios.delete(
  //           `http://localhost:3001/api/sysadmin/tenant/${tenantId}`
  //         );
  //         console.warn("Tenant rolled back due to user creation failure.");
  //         toast.info("Tenant rolled back due to user creation failure.");
  //       } catch (rollbackError) {
  //         console.error("Tenant rollback failed:", rollbackError);
  //         toast.error(
  //           "Tenant was created but rollback failed. Manual cleanup may be needed."
  //         );
  //       }
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (data: UserFormData) => {
    if (!companyData) {
      toast.error("Company info is missing");
      return;
    }
    console.log("Submitting form with User data:", data);
    setLoading(true);

    if (!uploaded || !imageUrl) {
      toast.error("Please upload an image first");
      setLoading(false);
      return;
    }

    if (!companyData) {
      toast.error("Company info is missing");
      setLoading(false);
      return;
    }

    const now = new Date().toISOString();
    const domain = `${companyData.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, "")}.bebsabanijjo.com`;

    const companyPayload = {
      name: companyData.name,
      domain: domain,
      logo: companyData.logo,
      address: companyData.address,
      city: companyData.city,
      state: companyData.state,
      country: companyData.country,
      phone: companyData.phone,
      email: companyData.email,
      isActive: true,
      warningMessage: "This is a sample warning message.",
    };
    console.log("Submitting form with companyPayload:", companyPayload);
    try {
      // Step 1: Submit Company Data
      const companyResponse = await axios.post(
        "http://localhost:3001/api/sysadmin/tenant",
        companyPayload
      );
      console.log("Tenant creation response:", companyResponse.data);
      //for 1st
      // const tenantId = companyResponse.data?.tenantId;
      // if (!tenantId) throw new Error("Tenant ID not received");
      // for 2rd with json type
      //const rawData = companyResponse?.data;
      // const innerData =
      //   typeof rawData?.data === "string"
      //     ? JSON.parse(rawData.data)
      //     : rawData?.data;

      // const tenantId = innerData?.tenantId;
      const safeParse = (data: unknown) =>
        typeof data === "string" ? JSON.parse(data) : data;

      const tenantId = safeParse(companyResponse?.data?.data)?.tenantId;
      toast.success(JSON.stringify(tenantId, null, 2)); // OK for debug
      console.log("Extracted tenantId:", tenantId);

      if (!tenantId) {
        throw new Error("Tenant ID not received");
      }

      // Step 2: Submit User Data
      const userPayload = {
        tenantId: tenantId,
        roleId: 1,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: imageUrl,
        userName: data.userName,
        phoneNumber: data.phoneNumber,
        status: "active",
        lastLoginDate: now,
        approvedDate: now,
        isDeleted: false,
        updatedAt: now,
        totalUpdatedCount: 0,
        isPasswordResetRequired: true,
      };

      //  await axios.post("http://localhost:3001/api/sysadmin/user", userPayload);
      const userResponse = await axios.post(
        "http://localhost:3001/api/sysadmin/user",
        userPayload
      );
      const rawUserData = userResponse?.data;
      const userInnerData =
        typeof rawUserData?.data === "string"
          ? JSON.parse(rawUserData.data)
          : rawUserData?.data;
      const userName = userInnerData?.user?.userName;
      const password = userInnerData?.generatedPassword;
      toast.success("Submitted successfully! Redirecting...");
      onSuccess(userName, password);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || error.message);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900">
      <Typography variant="h5" className="mb-6 text-center font-semibold">
        Step 2 of 2: User Info
      </Typography>
      <Dropzone
        onDrop={(acceptedFiles) => {
          const file = acceptedFiles[0];
          setImageFile(file);
          setImagePreview(URL.createObjectURL(file));
          setUploaded(false);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
          >
            <input {...getInputProps()} />
            <p>
              {imageFile
                ? `Selected file: ${imageFile.name}`
                : "Drag or browse to select an image"}
            </p>
          </div>
        )}
      </Dropzone>
      {imagePreview && (
        <div className="mb-4 relative w-full h-48">
          <Image
            src={imagePreview}
            alt="Preview"
            fill
            unoptimized
            className="object-contain rounded-md border shadow-md"
          />
        </div>
      )}
      {imageFile && !uploaded && (
        <Button
          variant="outlined"
          onClick={handleUpload}
          fullWidth
          className="mb-4"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextField
          label="First Name"
          fullWidth
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          fullWidth
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="Email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Username"
          fullWidth
          {...register("userName")}
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField
          label="Phone Number"
          fullWidth
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <FormControlLabel
          control={<Checkbox {...register("acceptTerms")} />}
          label={
            <span>
              I accept the{" "}
              <a
                href="/terms"
                className="text-purple-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms and conditions
              </a>
            </span>
          }
        />
        {errors.acceptTerms && (
          <Typography color="error" variant="body2">
            {errors.acceptTerms.message}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!uploaded || !acceptTerms || loading}
          sx={{
            opacity: !uploaded || !acceptTerms ? 0.6 : 1,
            cursor: !uploaded || !acceptTerms ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default SignUpCard;

//----------------------------------------------------------  old  real one
// "use client";
// import React, { useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import {
//   Button,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Typography,
// } from "@mui/material";
// import { toast } from "sonner";
// import { CompanyFormData, userSchema, UserFormData } from "./types";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// type Props = {
//   companyData: CompanyFormData | null;
// };

// const SignUpCard: React.FC<Props> = ({ companyData }) => {
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<UserFormData>({ resolver: zodResolver(userSchema) });

//   const acceptTerms = useWatch({ control, name: "acceptTerms" });

//   // ✅ Handle missing companyData
//   if (!companyData) {
//     return (
//       <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
//         Company data not found. Please complete Step 1 first.
//       </Typography>
//     );
//   }

//   const handleUpload = () => {
//     if (!imageFile) return;
//     setImageUrl(`https://example.com/images/${imageFile.name}`);
//     setUploaded(true);
//     toast.success("Image uploaded (demo)");
//   };

//   const onSubmit = async (data: UserFormData) => {
//     if (!uploaded || !imageUrl) {
//       toast.error("Please upload an image first");
//       return;
//     }

//     const payload = {
//       ...data,
//       companyData,
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

//     toast.success("Submitted successfully!");
//     console.time("submit");
//     console.log("Submitting Payload:", payload);
//     console.timeEnd("submit");

//     router.push("/");
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900">
//       <Typography variant="h5" className="mb-6 text-center font-semibold">
//         Step 2 of 2: User Info
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
//             className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
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
//         <div className="mb-4 relative w-full h-48">
//           <Image
//             src={imagePreview}
//             alt="Preview"
//             fill
//             unoptimized
//             className="object-contain rounded-md border"
//           />
//         </div>
//       )}

//       {imageFile && !uploaded && (
//         <Button
//           variant="outlined"
//           onClick={handleUpload}
//           fullWidth
//           className="mb-4"
//         >
//           Upload
//         </Button>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
//                 className="text-purple-600 font-medium"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 terms and conditions
//               </a>
//             </span>
//           }
//         />
//         {errors.acceptTerms && (
//           <Typography color="error" variant="body2">
//             {errors.acceptTerms.message}
//           </Typography>
//         )}

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           disabled={!uploaded || !acceptTerms}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SignUpCard;

// --------------------------------------------------------------------   validation with this page:
// import React from "react";

// import { useState } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import {
//   Button,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   FormHelperText,
// } from "@mui/material";
// import { toast } from "sonner";
// import Typography from "@mui/material/Typography";
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

// const SignUpCard = () => {
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
//     <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900">
//       <Typography variant="h5" className="mb-6 font-semibold text-center">
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
//             className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
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
//         <Button
//           variant="outlined"
//           onClick={handleUpload}
//           fullWidth
//           className="mb-4"
//         >
//           Upload
//         </Button>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//         <TextField
//           label="First Name"
//           variant="outlined"
//           fullWidth
//           {...register("firstName")}
//           error={!!errors.firstName}
//           helperText={errors.firstName?.message}
//         />
//         <TextField
//           label="Last Name"
//           variant="outlined"
//           fullWidth
//           {...register("lastName")}
//           error={!!errors.lastName}
//           helperText={errors.lastName?.message}
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           {...register("email")}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//         />
//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           {...register("userName")}
//           error={!!errors.userName}
//           helperText={errors.userName?.message}
//         />
//         <TextField
//           label="Phone Number"
//           variant="outlined"
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
//                 className="text-purple-500 font-medium"
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
//                 className="text-purple-500 font-medium"
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
//           size="large"
//           fullWidth
//           disabled={!uploaded || !acceptTerms}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SignUpCard;
