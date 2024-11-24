import { useState, type FC } from 'react';
import { Page } from '@/components/Page.tsx';
import LogoHolder from '@/components/LogoHolder/Logoholder';
import MascotImageHolder from '@/components/MascotImageHolder/MascotImageHolder';

export const IndexPage: FC = () => {
  const [tool, setTool] = useState("fraud-detector");
  const [network, setNetwork] = useState("ethereum");
  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    alert(`Tool: ${tool}, Network: ${network}, Address: ${inputText}`);
  };

  return (
    <Page back={false}>
      <div className="relative h-lvh bg-gradient-to-b to-blue-500 from-[#fff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,rgba(0,0,0,0)_50%)]">
          <LogoHolder />
          <MascotImageHolder />
          <div className="bg-[#fff9] flex flex-col w-11/12 justify-center m-auto rounded-2xl gap-2 p-2">
            <div className="flex gap-1 h-14">
              <select
                id="toolSelect"
                value={tool}
                className='w-2/3 bg-[#293036] rounded-2xl p-4 text-sm'
                onChange={(e) => setTool(e.target.value)}

              >
                <option value="fraud-detector">Fraud Detector</option>
                <option value="wallet-scanner">Wallet Auditor</option>
                <option value="contract-analyzer">Rug Pull Detector</option>
              </select>
              <select
                id="networkSelect"
                value={network}
                className='w-1/3 bg-[#293036] rounded-2xl p-4 text-sm'
                onChange={(e) => setNetwork(e.target.value)}
              >
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                <option value="binance-smart-chain">BSC</option>
              </select>
            </div>
            <div className="flex h-14 w-full">
              <input
                type="text"
                className='w-full border-[#317CFF] border-solid rounded-2xl p-4 text-sm'
                id="inputText"
                placeholder="Address, ENS or Unstoppable Domain"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <button className="flex h-14 w-full bg-[#317CFF] rounded-2xl p-4 justify-center text-sm" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </Page >
  );
};
