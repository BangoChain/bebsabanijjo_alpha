// // utils/getErrorMessage.ts
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// export function getErrorMessage(error: unknown): string {
//   const err = error as FetchBaseQueryError;

//   if (
//     err &&
//     typeof err === "object" &&
//     "data" in err &&
//     typeof err.data === "object" &&
//     err.data !== null &&
//     "message" in err.data
//   ) {
//     return (err.data as { message: string }).message;
//   }

//   return "Something went wrong";
// }

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type ErrorWithMessage = {
  message: string;
};

export function getErrorMessage(error: unknown): string {
  // Case 1: RTK FetchBaseQueryError
  if (isFetchBaseQueryError(error)) {
    const data = error.data;
    if (isErrorWithMessage(data)) {
      return data.message;
    }
  }

  // Case 2: RTK SerializedError
  if (isSerializedError(error)) {
    return error.message || "A serialized error occurred.";
  }

  // Case 3: Native JS Error
  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
}

// Type guard: checks if error is a FetchBaseQueryError
function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError & { data: unknown } {
  return typeof error === "object" && error !== null && "status" in error;
}

// Type guard: checks if error has a message
function isErrorWithMessage(data: unknown): data is ErrorWithMessage {
  return typeof data === "object" && data !== null && "message" in data;
}

// Type guard: checks if error is SerializedError
function isSerializedError(error: unknown): error is SerializedError {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as SerializedError).message === "string"
  );
}
