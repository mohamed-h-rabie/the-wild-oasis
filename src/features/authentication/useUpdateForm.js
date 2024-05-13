import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updataUserform } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useUpdateForm() {
  const queryClient = useQueryClient();

  const { mutate: editForm, isLoading: isEditing } = useMutation({
    mutationFn: updataUserform,
    onSuccess: ({ user }) => {
      toast.success("successfully Edited userForm");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { editForm, isEditing };
}
