import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LayoutApp = () => (
  <main className="bg-slate-200 w-screen h-screen">
    <Outlet />
  </main>
);

export default LayoutApp;
