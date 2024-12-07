import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import LogoHolder from './LogoHolder/Logoholder';

export function App() {

  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat  text-white'>
      <div className='bg-gradient-to-b to-blue-500 from-[#fff]'>
        <LogoHolder />
        <HashRouter>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}
