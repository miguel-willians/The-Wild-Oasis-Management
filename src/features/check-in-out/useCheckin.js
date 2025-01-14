import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { updateBooking } from "../../services/apiBookings";

import toast from "react-hot-toast";

export default function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} sucessfully checked in!`),
        // Ao invés de passar a query key, podemos invalidar todas as queries da página dessa forma:
        queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => {
      toast.error("There was an error while checking-in...");
    },
  });

  return { checkin, isCheckingIn };
}
