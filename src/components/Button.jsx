export default function Button({ text, onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      {text}
    </button>
  );
}
