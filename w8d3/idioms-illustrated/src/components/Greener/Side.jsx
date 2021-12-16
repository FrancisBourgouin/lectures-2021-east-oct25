export default function Side(props) {
  const { side, currentSide, literal, onClick } = props

  return (
    <section
      data-testid={side}
      className={`${literal ? 'literally' : ''} Side ${side !== currentSide ? 'other' : ''}`}
    >
      <article>
        {side === 'left' && literal && <h1>This side</h1>}
        {side === 'right' && literal && <h1>The other side</h1>}
        <img src="/house.png" />

      </article>
      <article>

        {side === currentSide && <img id="person" onClick={onClick} src="/person.png" />}
      </article>
    </section>
  )
}