import { toast } from "react-toastify";
import type { ToastContent, ToastOptions } from "react-toastify/dist/types";

export const handleToast = (
  content: ToastContent,
  type: ToastOptions["type"]
) => {
  return toast(content, {
    type,
  });
};
