// Demo Multi-step Form (No Real API, Mocked Responses)

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const companySchema = z.object({
  name: z.string().min(1),
  domain: z.string().min(1),
  logo: z.string().url(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  phone: z.string(),
  email: z.string().email(),
  isActive: z.boolean(),
  warningMessage: z.string().optional(),
});

const userSchema = z.object({
  roleId: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  image: z.string().url(),
  userName: z.string(),
  phoneNumber: z.string(),
  status: z.enum(["active", "inactive"]),
  lastLoginDate: z.string(),
  approvedDate: z.string(),
  isDeleted: z.boolean(),
  updatedAt: z.string(),
  totalUpdatedCount: z.number(),
  isPasswordResetRequired: z.boolean(),
});

type CompanyFormData = z.infer<typeof companySchema>;
type UserFormData = z.infer<typeof userSchema>;

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [tenantId, setTenantId] = useState<number | null>(null);

  const companyForm = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      domain: "",
      logo: "",
      address: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
      isActive: true,
      warningMessage: "",
    },
  });

  const userForm = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      roleId: 1,
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      userName: "",
      phoneNumber: "",
      status: "active",
      lastLoginDate: "",
      approvedDate: "",
      isDeleted: false,
      updatedAt: "",
      totalUpdatedCount: 0,
      isPasswordResetRequired: true,
    },
  });

  const onSubmitCompany = (data: CompanyFormData) => {
    console.log("Mock company submitted:", data);
    setTenantId(1); // mock ID
    setStep(2);
  };

  const onSubmitUser = (data: UserFormData) => {
    const finalData = { ...data, tenantId };
    console.log("Mock user submitted:", finalData);
    alert("Demo Registration Complete!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.form
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onSubmit={companyForm.handleSubmit(onSubmitCompany)}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold">Company Info (Demo)</h2>
            <input
              {...companyForm.register("name")}
              placeholder="Name"
              className="input"
            />
            <input
              {...companyForm.register("domain")}
              placeholder="Domain"
              className="input"
            />
            <input
              {...companyForm.register("logo")}
              placeholder="Logo URL"
              className="input"
            />
            <input
              {...companyForm.register("address")}
              placeholder="Address"
              className="input"
            />
            <input
              {...companyForm.register("city")}
              placeholder="City"
              className="input"
            />
            <input
              {...companyForm.register("state")}
              placeholder="State"
              className="input"
            />
            <input
              {...companyForm.register("country")}
              placeholder="Country"
              className="input"
            />
            <input
              {...companyForm.register("phone")}
              placeholder="Phone"
              className="input"
            />
            <input
              {...companyForm.register("email")}
              placeholder="Email"
              className="input"
            />
            <label>
              <input type="checkbox" {...companyForm.register("isActive")} />{" "}
              Active?
            </label>
            <input
              {...companyForm.register("warningMessage")}
              placeholder="Warning Message"
              className="input"
            />
            <button type="submit" className="btn">
              Next
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            onSubmit={userForm.handleSubmit(onSubmitUser)}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold">User Info (Demo)</h2>
            <input
              {...userForm.register("firstName")}
              placeholder="First Name"
              className="input"
            />
            <input
              {...userForm.register("lastName")}
              placeholder="Last Name"
              className="input"
            />
            <input
              {...userForm.register("email")}
              placeholder="Email"
              className="input"
            />
            <input
              {...userForm.register("image")}
              placeholder="Image URL"
              className="input"
            />
            <input
              {...userForm.register("userName")}
              placeholder="Username"
              className="input"
            />
            <input
              {...userForm.register("phoneNumber")}
              placeholder="Phone Number"
              className="input"
            />
            <select {...userForm.register("status")} className="input">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <input
              {...userForm.register("lastLoginDate")}
              type="datetime-local"
              className="input"
            />
            <input
              {...userForm.register("approvedDate")}
              type="datetime-local"
              className="input"
            />
            <input type="checkbox" {...userForm.register("isDeleted")} />{" "}
            Deleted?
            <input
              {...userForm.register("updatedAt")}
              type="datetime-local"
              className="input"
            />
            <input
              {...userForm.register("totalUpdatedCount")}
              type="number"
              className="input"
            />
            <input
              type="checkbox"
              {...userForm.register("isPasswordResetRequired")}
            />{" "}
            Password Reset Required?
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary"
              >
                Back
              </button>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
