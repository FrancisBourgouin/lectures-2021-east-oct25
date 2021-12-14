export default function Player(props) {
  return (
    <section className="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button data-testid="moai" type="button" value="Moai">
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button data-testid="axe" type="button" value="Axe">
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button data-testid="tree" type="button" value="Tree">
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
