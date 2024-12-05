/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LogoHolder from '@/components/LogoHolder/Logoholder';
import { Page } from '@/components/Page';
import { useEffect, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



export const RugPullDetectorResult: FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to fetch forensic details
    const fetchData = async () => {
      try {
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const forensicDetails = state?.forensic_details || {};
  const walletAddress = state?.walletAddress || {};

  const handleRedirect = () => {
    navigate('/')
  };


  const renderRow = (label: string, value: string) => (
    <tr key={label} className="border-b">
      <td className="py-2 px-4 text-left capitalize text-gray-700">{label.replace(/_/g, " ")}</td>
      <td
        className={`py-2 px-4 text-right font-semibold ${value === "0" ? "text-green-600" : "text-red-600"
          }`}
      >
        {value === "0" ? "No" : "Yes"}
      </td>
    </tr>
  );


  return (
    <Page back={true}>
      <div>
        <LogoHolder />
        <div className="bg-[#fff9] flex flex-col w-11/12 justify-center m-auto rounded-2xl gap-2 p-2">
          {/* Wallet Address Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Wallet Address</h3>
            <p className="mt-2 text-gray-500">{walletAddress}</p>
          </div>

          {/* Forensic Analysis Table */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">Forensic Analysis</h3>
            {loading ? (
              <p className="mt-4 text-gray-500">Loading...</p>
            ) : (
              <table className="w-full mt-4 border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left text-gray-700">Area</th>
                    <th className="py-2 px-4 text-right text-gray-700">Involved</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(forensicDetails).map(([key, value]) =>
                    renderRow(
                      key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
                      value as string
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-around flex-col mt-6 gap-2">
            <button className="flex h-14 w-full bg-[#317CFF] rounded-2xl p-4 justify-center text-sm" onClick={handleRedirect}>
              Try Another
            </button>
            <button className="flex h-14 w-full bg-[#317CFF] rounded-2xl p-4 justify-center text-sm">
              Share
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};
