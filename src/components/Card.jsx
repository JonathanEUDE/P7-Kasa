import '../styles/Card.css';

function Card({ title, cover }) {
  return (
    <div className="card-container">
      <img className="card-cover" src={cover} alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default Card;
