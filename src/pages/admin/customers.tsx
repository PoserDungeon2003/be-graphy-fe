import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface BookingItem {
  name: string;
  date: string;
  status: "confirmed" | "not_yet";
}

const Customers = () => {
  const bookings: BookingItem[] = [
    { name: "CUSTOMER 1", date: "20/09/2002", status: "confirmed" },
    { name: "CUSTOMER 2", date: "21/09/2002", status: "not_yet" },
    { name: "CUSTOMER 3", date: "22/09/2002", status: "confirmed" },
    { name: "CUSTOMER 4", date: "23/09/2002", status: "not_yet" },
    { name: "CUSTOMER 5", date: "24/09/2002", status: "confirmed" },
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-green-50 to-blue-100 h-screen">
      <li className="text-xl mb-4 text-gray-700">Customer Bookings</li>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-sm text-white">
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 bg-white text-black text-xs hover:bg-gray-100 transition"
              >
                <td className="py-3 px-6">{booking.name}</td>
                <td className="py-3 px-6 text-center">{booking.date}</td>
                <td className="py-3 px-6 text-center">
                  {booking.status === "confirmed" ? (
                    <IoCheckmarkCircleOutline size={24} className="text-green-500 mx-auto" />
                  ) : (
                    <span className="font-medium text-red-500">NOT YET</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
