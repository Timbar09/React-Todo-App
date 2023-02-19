import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
      <Navbar />
    </header>
  );
};
export default Header;
