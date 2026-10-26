export default function Card({ card }) {
  return (
    <article className={"card card--" + card.size}>
      <div className="card-line" aria-hidden="true" />
      <h2>{card.title}</h2>
      <p>{card.text}</p>
    </article>
  );
}
