// "use client";
// import React, { useState } from "react";
// import CompanyInfoForm from "./CompanyInfoForm";
// import SignUpCard from "./SignUpCard";
// import { toast } from "sonner";
// import { Button, Stepper, Step, StepLabel, Box } from "@mui/material";
// import type { CompanyInfo, UserInfo } from "./types"; // 👈 import types

// const MultiStepForm = () => {
//   const [step, setStep] = useState(0);
//   const [companyData, setCompanyData] = useState<CompanyInfo | null>(null);
//   const [userData, setUserData] = useState<UserInfo | null>(null);
//   const [resetFormKey, setResetFormKey] = useState<number>(0);

//   const handleCompanySubmit = (data: CompanyInfo) => {
//     setCompanyData(data);
//     setStep(1);
//   };

//   const handleUserSubmit = (data: UserInfo) => {
//     setUserData(data);

//     const finalPayload = {
//       company: companyData,
//       user: {
//         ...data,
//         tenantId: 1,
//         roleId: 1,
//         status: "active",
//         lastLoginDate: new Date().toISOString(),
//         approvedDate: new Date().toISOString(),
//         isDeleted: false,
//         updatedAt: new Date().toISOString(),
//         totalUpdatedCount: 0,
//         isPasswordResetRequired: true,
//       },
//     };

//     console.log("Final Payload:", finalPayload);
//     toast.success("Registration complete!");

//     // Reset
//     setCompanyData(null);
//     setUserData(null);
//     setStep(0);
//     setResetFormKey((prev) => prev + 1);
//   };

//   const steps = ["Company Info", "User Info"];

//   return (
//     <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", py: 4 }}>
//       <Stepper activeStep={step} alternativeLabel sx={{ mb: 4 }}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {step === 0 ? (
//         <CompanyInfoForm key={resetFormKey} onNext={handleCompanySubmit} />
//       ) : (
//         <SignUpCard key={resetFormKey} onSubmitUser={handleUserSubmit} />
//       )}
//     </Box>
//   );
// };

// export default MultiStepForm;
