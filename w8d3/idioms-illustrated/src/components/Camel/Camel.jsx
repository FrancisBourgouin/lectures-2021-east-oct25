export default function CamelBack(props) {
  const { strawAmount, onClick } = props;
  return (
    <section onClick={onClick} className={`CamelBack ${false ? "broken" : ""}`}>
      <img src="camel1.png" alt="" />
      <img src="camel2.png" className="butt" />
    </section>
  );
}
