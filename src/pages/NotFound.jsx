import '../styles/NotFound.css';

function Home() {
  return (
    <div className="notfound-container">
      <div className="notfound-informations">
        <span>404</span>
        <span>Oups! La page que vous demandez n'existe pas.</span>
      </div>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Home;
