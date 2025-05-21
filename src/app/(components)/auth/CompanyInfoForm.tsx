// // @/app/(components)/auth/CompanyInfoForm.tsx
//-------------------------------------------- with step 2 to step 1 stay data
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone from "react-dropzone";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { toast } from "sonner";
import Image from "next/image";

//import { companySchema, CompanyFormData, CompanyFormState } from "./types";
import { companySchema, CompanyFormData, CompanyFormState } from "@/types/auth";

import { countries } from "@/lib/countries";

const schema = companySchema;

type Props = {
  formData: CompanyFormState;
  setFormData: React.Dispatch<React.SetStateAction<CompanyFormState>>;
  onNext: (data: CompanyFormData) => void;
};

const CompanyInfoForm = ({ formData, setFormData, onNext }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CompanyFormData>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const handleUpload = async () => {
    if (!formData.logoFile) return;

    setFormData((prev) => ({ ...prev, uploadLoading: true }));

    try {
      // Simulate upload delay (replace with actual upload logic)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const staticUrl = "https://example.com/logos/acme.png"; // Replace with real upload result

      setFormData((prev) => ({
        ...prev,
        logo: staticUrl,
        uploaded: true,
        uploadLoading: false,
      }));
      setValue("logo", staticUrl);
      toast.success("Logo uploaded successfully!");
    } catch (error) {
      toast.error("Logo upload failed.");
      toast.error(JSON.stringify(error, null, 2)); // OK for debug
      setFormData((prev) => ({
        ...prev,
        uploadError: "Failed to upload logo. Please try again.",
        uploadLoading: false,
      }));
    }
  };

  const onSubmit = (data: CompanyFormData) => {
    if (!formData.uploaded || !formData.logo) {
      toast.error("Please upload your company logo first");
      return;
    }
    setFormData((prev) => ({ ...prev, ...data }));
    onNext(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900"
    >
      <Typography variant="h5" className="mb-6 text-center pb-4 font-semibold">
        Step 1 of 2: Company Information
      </Typography>

      <Dropzone
        onDrop={(acceptedFiles) => {
          const file = acceptedFiles[0];
          setFormData((prev) => ({
            ...prev,
            logoFile: file,
            logoPreview: URL.createObjectURL(file),
            uploaded: false,
            uploadError: null,
          }));
        }}
        accept={{ "image/*": [] }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
          >
            <input {...getInputProps()} />
            <p>
              {formData.logoFile
                ? `Selected logo: ${formData.logoFile.name}`
                : "Drag & drop or click to upload logo"}
            </p>
          </div>
        )}
      </Dropzone>

      {formData.logoPreview && (
        <div className="mb-4 relative w-full h-48">
          <Image
            src={formData.logoPreview}
            alt="Preview"
            fill
            unoptimized
            className="object-contain rounded-md border shadow-md"
          />
        </div>
      )}

      {formData.logoFile && !formData.uploaded && (
        <Button
          variant="outlined"
          onClick={handleUpload}
          fullWidth
          className="mb-4"
          disabled={formData.uploadLoading}
          startIcon={
            formData.uploadLoading ? <CircularProgress size={20} /> : null
          }
        >
          {formData.uploadLoading ? "Uploading..." : "Upload Logo"}
        </Button>
      )}

      {formData.uploadError && (
        <Typography color="error" variant="body2" className="mb-2">
          {formData.uploadError}
        </Typography>
      )}

      <input type="hidden" {...register("logo")} />
      {errors.logo && (
        <p className="text-red-500 text-sm mb-2">{errors.logo.message}</p>
      )}

      <TextField
        label="Company Name"
        fullWidth
        margin="normal"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Address"
        fullWidth
        margin="normal"
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <TextField
        label="City"
        fullWidth
        margin="normal"
        {...register("city")}
        error={!!errors.city}
        helperText={errors.city?.message}
      />
      <TextField
        label="State"
        fullWidth
        margin="normal"
        {...register("state")}
        error={!!errors.state}
        helperText={errors.state?.message}
      />
      <FormControl fullWidth margin="normal" error={!!errors.country}>
        <InputLabel>Country</InputLabel>
        <Select
          defaultValue={formData.country || ""}
          {...register("country")}
          label="Country"
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </FormControl>

      <TextField
        label="Phone"
        fullWidth
        margin="normal"
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        disabled={!formData.uploaded}
      >
        Next
      </Button>
    </Box>
  );
};

export default CompanyInfoForm;

//-------------------------------------------- without  step 2 to step 1 stay data
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import { toast } from "sonner";
// import { companySchema, CompanyFormData } from "./types";
// import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import { countries } from "./countries";
// import Image from "next/image";
// const schema = companySchema;
// type Props = {
//   onNext: (data: CompanyFormData) => void;
// };

// const CompanyInfoForm = ({ onNext }: Props) => {
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [logoPreview, setLogoPreview] = useState<string | null>(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [logoUrl, setLogoUrl] = useState("");
//   const [uploadLoading, setUploadLoading] = useState(false);
//   const [uploadError, setUploadError] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<CompanyFormData>({
//     resolver: zodResolver(schema),
//   });

//   const handleUpload = async () => {
//     if (!logoFile) return;

//     setUploadLoading(true);
//     setUploadError(null);

//     try {
//       // Simulate async upload with timeout (replace with real API call)
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       const staticUrl = "https://example.com/logos/acme.png"; // Replace with actual upload response URL

//       setLogoUrl(staticUrl);
//       setValue("logo", staticUrl);
//       setUploaded(true);
//       toast.success("Logo uploaded successfully!");
//       toast.success(JSON.stringify(staticUrl, null, 2)); // OK for debug
//     } catch (error) {
//       setUploadError("Failed to upload logo. Please try again.");
//       toast.error("Logo upload failed.");
//       toast.error(JSON.stringify(error, null, 2)); // OK for debug
//     } finally {
//       setUploadLoading(false);
//     }
//   };

//   const onSubmit = (data: CompanyFormData) => {
//     if (!uploaded || !logoUrl) {
//       toast.error("Please upload your company logo first");
//       return;
//     }
//     onNext(data);
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900"
//     >
//       <Typography variant="h5" className="mb-6 text-center pb-4 font-semibold">
//         Step 1 of 2: Company Information
//       </Typography>

//       <Dropzone
//         onDrop={(acceptedFiles) => {
//           const file = acceptedFiles[0];
//           setLogoFile(file);
//           setLogoPreview(URL.createObjectURL(file));
//           setUploaded(false);
//           setUploadError(null);
//         }}
//         accept={{ "image/*": [] }}
//       >
//         {({ getRootProps, getInputProps }) => (
//           <div
//             {...getRootProps()}
//             className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
//           >
//             <input {...getInputProps()} />
//             <p>
//               {logoFile
//                 ? `Selected logo: ${logoFile.name}`
//                 : "Drag & drop or click to upload logo"}
//             </p>
//           </div>
//         )}
//       </Dropzone>

//       {logoPreview && (
//         <div className="mb-4 relative w-full h-48">
//           <Image
//             src={logoPreview}
//             alt="Preview"
//             fill
//             unoptimized
//             className="object-contain rounded-md border shadow-md"
//           />
//         </div>
//       )}

//       {logoFile && !uploaded && (
//         <Button
//           variant="outlined"
//           onClick={handleUpload}
//           fullWidth
//           className="mb-4"
//           disabled={uploadLoading}
//           startIcon={uploadLoading ? <CircularProgress size={20} /> : null}
//         >
//           {uploadLoading ? "Uploading..." : "Upload Logo"}
//         </Button>
//       )}

//       {uploadError && (
//         <Typography color="error" variant="body2" className="mb-2">
//           {uploadError}
//         </Typography>
//       )}

//       <input type="hidden" {...register("logo")} />
//       {errors.logo && (
//         <p className="text-red-500 text-sm mb-2">{errors.logo.message}</p>
//       )}

//       <TextField
//         label="Company Name"
//         fullWidth
//         margin="normal"
//         {...register("name")}
//         error={!!errors.name}
//         helperText={errors.name?.message}
//       />
//       <TextField
//         label="Address"
//         fullWidth
//         margin="normal"
//         {...register("address")}
//         error={!!errors.address}
//         helperText={errors.address?.message}
//       />
//       <TextField
//         label="City"
//         fullWidth
//         margin="normal"
//         {...register("city")}
//         error={!!errors.city}
//         helperText={errors.city?.message}
//       />
//       <TextField
//         label="State"
//         fullWidth
//         margin="normal"
//         {...register("state")}
//         error={!!errors.state}
//         helperText={errors.state?.message}
//       />
//       <FormControl fullWidth margin="normal" error={!!errors.country}>
//         <InputLabel>Country</InputLabel>
//         <Select defaultValue="" {...register("country")} label="Country">
//           {countries.map((country) => (
//             <MenuItem key={country} value={country}>
//               {country}
//             </MenuItem>
//           ))}
//         </Select>
//         {errors.country && (
//           <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
//         )}
//       </FormControl>

//       <TextField
//         label="Phone"
//         fullWidth
//         margin="normal"
//         {...register("phone")}
//         error={!!errors.phone}
//         helperText={errors.phone?.message}
//       />
//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         {...register("email")}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//       />

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 3 }}
//         disabled={!uploaded}
//       >
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default CompanyInfoForm;

// ------------------------ 1st one
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Dropzone from "react-dropzone";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { toast } from "sonner";
// import { companySchema, CompanyFormData } from "./types";
// import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import { countries } from "./countries"; // adjust path as needed

// const schema = companySchema;
// type Props = {
//   onNext: (data: CompanyFormData) => void;
// };

// const CompanyInfoForm = ({ onNext }: Props) => {
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [logoPreview, setLogoPreview] = useState<string | null>(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [logoUrl, setLogoUrl] = useState("");

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<CompanyFormData>({
//     resolver: zodResolver(schema),
//   });

//   const handleUpload = () => {
//     if (!logoFile) return;
//     const staticUrl = "https://example.com/logos/acme.png"; // Replace with actual upload logic
//     // TODO: Replace this with actual upload logic
//     //const staticUrl = await uploadLogoToServer(logoFile);

//     setLogoUrl(staticUrl);
//     setValue("logo", staticUrl);
//     setUploaded(true);
//     toast.success("Logo uploaded (static demo)");
//   };

//   const onSubmit = (data: CompanyFormData) => {
//     if (!uploaded || !logoUrl) {
//       toast.error("Please upload your company logo first");
//       return;
//     }
//     onNext(data);
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-gray-900"
//     >
//       <Typography variant="h5" className="mb-6 text-center font-semibold">
//         Step 1 of 2: Company Information
//       </Typography>

//       <Dropzone
//         onDrop={(acceptedFiles) => {
//           const file = acceptedFiles[0];
//           setLogoFile(file);
//           setLogoPreview(URL.createObjectURL(file));
//           setUploaded(false);
//         }}
//         accept={{ "image/*": [] }}
//       >
//         {({ getRootProps, getInputProps }) => (
//           <div
//             {...getRootProps()}
//             className="border-2 border-dashed p-4 mb-4 text-center cursor-pointer rounded-md"
//           >
//             <input {...getInputProps()} />
//             <p>
//               {logoFile
//                 ? `Selected logo: ${logoFile.name}`
//                 : "Drag & drop or click to upload logo"}
//             </p>
//           </div>
//         )}
//       </Dropzone>

//       {logoPreview && (
//         <Box className="mb-4 text-center">
//           <img
//             src={logoPreview}
//             alt="Logo Preview"
//             className="max-h-32 rounded-md border mx-auto"
//           />
//         </Box>
//       )}

//       {logoFile && !uploaded && (
//         <Button
//           variant="outlined"
//           onClick={handleUpload}
//           fullWidth
//           className="mb-4"
//         >
//           Upload Logo
//         </Button>
//       )}

//       <input type="hidden" {...register("logo")} />
//       {errors.logo && (
//         <p className="text-red-500 text-sm mb-2">{errors.logo.message}</p>
//       )}

//       <TextField
//         label="Company Name"
//         fullWidth
//         margin="normal"
//         {...register("name")}
//         error={!!errors.name}
//         helperText={errors.name?.message}
//       />
//       <TextField
//         label="Address"
//         fullWidth
//         margin="normal"
//         {...register("address")}
//         error={!!errors.address}
//         helperText={errors.address?.message}
//       />
//       <TextField
//         label="City"
//         fullWidth
//         margin="normal"
//         {...register("city")}
//         error={!!errors.city}
//         helperText={errors.city?.message}
//       />
//       <TextField
//         label="State"
//         fullWidth
//         margin="normal"
//         {...register("state")}
//         error={!!errors.state}
//         helperText={errors.state?.message}
//       />
//       <FormControl fullWidth margin="normal" error={!!errors.country}>
//         <InputLabel>Country</InputLabel>
//         <Select defaultValue="" {...register("country")} label="Country">
//           {countries.map((country) => (
//             <MenuItem key={country} value={country}>
//               {country}
//             </MenuItem>
//           ))}
//         </Select>
//         {errors.country && (
//           <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
//         )}
//       </FormControl>

//       <TextField
//         label="Phone"
//         fullWidth
//         margin="normal"
//         {...register("phone")}
//         error={!!errors.phone}
//         helperText={errors.phone?.message}
//       />
//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         {...register("email")}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//       />

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 3 }}
//         disabled={!uploaded}
//       >
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default CompanyInfoForm;
