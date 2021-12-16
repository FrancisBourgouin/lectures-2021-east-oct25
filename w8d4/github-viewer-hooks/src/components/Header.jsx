export default function Header(props) {
  const changeColor = () => {
    document.documentElement.style.setProperty("--main-color", "#C0FFEE");
  };

  return (
    <header>
      <h1 onClick={changeColor}>Github viewer (Classes)</h1>
    </header>
  );
}
