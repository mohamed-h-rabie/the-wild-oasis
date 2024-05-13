import { useQuery } from "@tanstack/react-query";
import { getCurrentLogin } from "../../services/apiLogin";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: () => getCurrentLogin(),
    queryKey: ["user"],
  });

  return { user, isLoading, isAuth: user?.role === "authenticated" };
}

export default useUser;
