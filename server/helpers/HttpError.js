const messages = {
  400: "Bad request",
  401: "Unathorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

export default function HttpError(status, message = messages[status]) {
  const error = new Error(message);
  error.status = status;
  return error;
}
