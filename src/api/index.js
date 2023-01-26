const apiKey = process.env.REACT_APP_API_KEY;
//header for POST methods
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  };
};
