import type { AxiosError } from "axios";

import ApiError from "./error";
import type { ResponseError } from "./types";

const handleApiError = (error: AxiosError<ResponseError>) => {
  if (error.response) {
    const responseError = new ApiError({
      statusCode: error.response.status,
      message: error.response.data.message,
      headers: error.response.headers,
      extra: error.response.data.extra,
      code: error.response.data.code,
    });

    return Promise.reject(responseError);
  }

  if (error.request) {
    const requestError = new ApiError({
      statusCode: Number(error.code),
      message: String(error.request),
    });

    return Promise.reject(requestError);
  }

  const genericError = new ApiError({
    statusCode: 500,
    message: error.message,
  });

  return Promise.reject(genericError);
};

export const whenRequestWithError = (error: AxiosError) => {
  return handleApiError(error);
};

export const whenResponseWithError = (error: AxiosError) => {
  return handleApiError(error);
};
