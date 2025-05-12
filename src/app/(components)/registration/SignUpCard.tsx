import React from "react";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone from "react-dropzone";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { toast } from "sonner";

// Validation schema
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  userName: z.string().min(1, "Username is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormData = z.infer<typeof schema>;
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

// export default SignUpCard;
// ... imports remain the same

const SignUpCard = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const acceptTerms = useWatch({ control, name: "acceptTerms" });

  const handleUpload = () => {
    if (!imageFile) return;
    toast.success("Image uploaded (demo)");
    setImageUrl(`/images/demo/${imageFile.name}`);
    setUploaded(true);
  };

  const onSubmit = async (data: FormData) => {
    if (!uploaded || !imageUrl) {
      toast.error("Please upload an image first");
      return;
    }

    const payload = {
      ...data,
      tenantId: 1,
      roleId: 1,
      image: imageUrl,
      status: "active",
      lastLoginDate: new Date().toISOString(),
      approvedDate: new Date().toISOString(),
      isDeleted: false,
      updatedAt: new Date().toISOString(),
      totalUpdatedCount: 0,
      isPasswordResetRequired: true,
    };

    console.log("Submitting Payload:", payload);
    toast.success("Submitted (demo)");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900">
      {/* <Typography variant="h5" className="mb-6 font-semibold text-center">
        Registration
      </Typography> */}

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
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-48 rounded-md border"
          />
        </div>
      )}

      {imageFile && !uploaded && (
        <Button
          variant="outlined"
          onClick={handleUpload}
          fullWidth
          className="mb-4"
        >
          Upload
        </Button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          {...register("userName")}
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
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
                className="text-purple-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>{" "}
              &{" "}
              <a
                href="/privacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 font-medium"
              >
                Privacy Policy
              </a>
            </span>
          }
        />

        {errors.acceptTerms && (
          <FormHelperText error>{errors.acceptTerms.message}</FormHelperText>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={!uploaded || !acceptTerms}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpCard;
