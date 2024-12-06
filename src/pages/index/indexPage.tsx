/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type FC } from 'react';
import LogoHolder from '@/components/LogoHolder/Logoholder';
import MascotImageHolder from '@/components/MascotImageHolder/MascotImageHolder';
import { Network, Tool } from '@/helpers/types';
import { useNavigate } from 'react-router-dom';
import { initData, useSignal } from '@telegram-apps/sdk-react';
import { postRequest } from '@/api/apiService';


export const IndexPage: FC = () => {
  const [tool, setTool] = useState<Tool>("fraud-check");
  const [network, setNetwork] = useState<Network>("ETH");
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const initDataState = useSignal(initData.state);


  useEffect(() => {
    // Simulate API call to fetch forensic details
    const subscribeUser = async () => {
      // subscribe to chainaware.io 
      await postRequest("/users/subscribe-telegram", { token: initDataState?.startParam, user_id: initDataState?.user?.id });
    };

    if (initDataState?.startParam !== undefined) {
      subscribeUser();
    }
  }, [])


  const handleSearch = async () => {
    const apiUrlMap: Record<Tool, string> = {
      "fraud-check": "/fraud/check",
      "wallet-audit": "/fraud/audit",
      "rug-pull-check": "/rug/pull-check",
    };

    const requestBodyMap: Record<Tool, object> = {
      "fraud-check": { network: network, walletAddress: inputText, onlyFraud: true, chatId: initDataState?.user?.id },
      "wallet-audit": { network: network, walletAddress: inputText, chatId: initDataState?.user?.id },
      "rug-pull-check": { network: network, contractAddress: inputText, chatId: initDataState?.user?.id },
    };


    try {
      const response = await postRequest(apiUrlMap[tool], requestBodyMap[tool]);

      // alert(`Response: ${JSON.stringify(response.data, null, 2)}`);

      navigate('/result', { state: response });
    } catch (error: any) {
      console.error("API call failed:", error);
      alert(`Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  function handleInvite(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <LogoHolder />
      <MascotImageHolder />
      <div className="bg-[#fff9] flex flex-col w-11/12 justify-center m-auto rounded-2xl gap-2 p-2">
        <div className="flex gap-1 h-14">
          <select
            id="toolSelect"
            value={tool}
            className='w-2/3 bg-[#293036] rounded-2xl p-4 text-sm'
            onChange={(e) => setTool(e.target.value as Tool)}

          >
            <option key={1} value="fraud-check">Fraud Detector</option>
            <option key={2} value="wallet-audit">Wallet Auditor</option>
            <option key={3} value="rug-pull-check">Rug Pull Detector</option>
          </select>
          <select
            id="networkSelect"
            value={network}
            className='w-1/3 bg-[#293036] rounded-2xl p-4 text-sm'
            onChange={(e) => setNetwork(e.target.value as Network)}
          >
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            <option value="binance-smart-chain">BSC</option>
          </select>
        </div>
        <div className="flex h-14 w-full">
          <input
            type="text"
            className='w-full border-[#317CFF] border-solid rounded-2xl p-4 text-sm text-black'
            id="inputText"
            placeholder="Address, ENS or Unstoppable Domain"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button className="flex h-14 w-full bg-[#317CFF] rounded-2xl p-4 justify-center text-sm" onClick={handleSearch}>Search</button>
      </div>
      <div className='flex w-11/12 justify-center m-auto p-2'>
        <button className="flex h-14 w-full bg-[#317CFF] rounded-2xl p-4 justify-center text-sm" onClick={handleInvite}>Invite</button>
      </div>
    </div>
  );
};
