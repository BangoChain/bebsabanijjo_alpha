// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes"; // Adjust path as needed

// const Page = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode<JwtPayload>(token);
//         setUser(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
//       {user ? (
//         <pre className="bg-gray-100 p-4 rounded">
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       ) : (
//         <p>No user info found in token.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes"; // Adjust path as needed
// import { useRouter } from "next/navigation";

// const Page = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode<JwtPayload>(token);
//         setUser(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     router.push("/"); // redirect to login page
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
//       {user ? (
//         <>
//           <pre className="bg-gray-100 p-4 rounded mb-4">
//             {JSON.stringify(user, null, 2)}
//           </pre>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>No user info found in token.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "@/features/auth/authTypes";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice"; // Adjust path if needed

const Page = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout()); // use Redux logic
    setUser(null);
    router.push("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
      {user ? (
        <>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            {JSON.stringify(user, null, 2)}
          </pre>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <p>No user info found in token.</p>
      )}
    </div>
  );
};

export default Page;
