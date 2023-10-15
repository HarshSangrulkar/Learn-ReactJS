import "../../src/App.css";

function Header() {
  const myStyle = {
    color: "green",
    backgroundColor: "black",
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Shoppy Website</h1>
      <h2 style={myStyle}>Less cost...more products</h2>
      <h3 id="i1">Explore more various products</h3>
    </div>
  );
}

export default Header;
