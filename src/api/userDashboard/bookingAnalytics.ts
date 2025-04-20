import api from "..";

export const getUserBookingAnalytics = async (): Promise<{
  bookingAna: Record<string, number>;
  incomeAna: Record<string, number>;
}> => {
  const response = await api.get("/api/Dashboard/Get_User_Booking_Analytics");
  return response.data;
};
