//components
import { Main } from './Main';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

export const HomePage = (): JSX.Element => (
  <div className="bg-slate-800">
    <div className="flex">
      <Sidebar />
      <div className="flex h-screen grow flex-col p-2">
        <Main />
        <Footer />
      </div>
    </div>
  </div>
);
