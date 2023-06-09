import { useState } from "react";
import { login } from "../services/loginService";

const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, setSubmitting, navigate) => {
    setIsLoading(true);
    try {
      const response = await login(values);
      const data = await response.data;
      if (data?.status === 200) {
        const accessToken = data?.payload?.tokens?.access?.token;
        if (accessToken) {
          localStorage.setItem("token", accessToken);
        }
        setIsLoading(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
    setIsLoading(false);
  };

  return { handleSubmit, isLoading };
};

export default useLoginForm;
