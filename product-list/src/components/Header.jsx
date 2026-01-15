const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>Product List</h1>
      <div>🛒 Cart: {cartCount}</div>
    </header>
  );
};

export default Header;