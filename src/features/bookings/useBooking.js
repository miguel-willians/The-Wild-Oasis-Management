import { useQuery } from "@tanstack/react-query";

import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export default function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false, //React query tenta requisitar os dados três vezes antes de sinalizar um erro, mas nesse caso o dado pode não existir
  });

  return { isLoading, booking, error };
}
