import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiLogin";

import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        " you nedd to confirm your signup .please check your email"
      );
    },
  });
  return { signup, isLoading };
}
