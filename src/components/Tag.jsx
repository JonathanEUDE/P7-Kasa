import '../styles/Tag.css';

function Tag({ title }) {
  return (
    <div className="tag-container">
      <span>{title}</span>
    </div>
  );
}

export default Tag;
