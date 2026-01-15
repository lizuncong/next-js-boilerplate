// import { NextResponse } from "next/server";
export enum StatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}
// export const StatusCode = {
//   SUCCESS: 200,
//   BAD_REQUEST: 400,
//   UNAUTHORIZED: 401,
//   NOT_FOUND: 404,
//   INTERNAL_ERROR: 500,
// } as const;
// export interface ApiResponse<T> {
//   code: number;
//   message: string;
//   data?: T;
// }

// export function createResponseJson<T>(
//   data: T | null,
//   message: string = 'success',
//   code: number = StatusCode.SUCCESS
// ) {
//   return {
//     code,
//     message,
//     data,
//   };
// }

// export function createErrorResponseJson(
//   code: number = StatusCode.BAD_REQUEST,
//   message?: string
// ) {
//   return {
//     code,
//     data: null,
//     message:
//       message ||
//       (code === StatusCode.UNAUTHORIZED ? 'Login expired' : 'System error'),
//   };
// }

// export function createResponse<T>(
//   data: T | null,
//   message: string = 'success',
//   code: number = StatusCode.SUCCESS
// ): NextResponse<ApiResponse<T>> {
//   return NextResponse.json(
//     {
//       code,
//       message,
//       ...(data !== null && { data }),
//     },
//     {
//       status: code,
//     }
//   );
// }

// export function createErrorResponse(
//   code: number = StatusCode.BAD_REQUEST,
//   message?: string
// ): NextResponse<ApiResponse> {
//   return NextResponse.json(
//     {
//       code,
//       message:
//         message ||
//         (code === StatusCode.UNAUTHORIZED ? 'Login expired' : 'System error'),
//     },
//     { status: code }
//   );
// }
