import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import useCabins from "../cabins/useCabins";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

import styled from "styled-components";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoading || isLoadingStays || isLoadingCabins) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        bookings={bookings}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today's Activities</div>
      <div>Chart stay</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
