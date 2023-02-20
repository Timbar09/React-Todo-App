import '@/styles/Header.css';
import Navbar from '@/components/Header/Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="container container-pall">
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
