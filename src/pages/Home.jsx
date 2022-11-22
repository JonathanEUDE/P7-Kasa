import '../styles/Home.css';

import Slogan from '../components/Slogan';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../pages/NotFound';

function Home() {
  const [lodgings, setLodging] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datas = await fetch('/data/logements.json');
      const datasJson = await datas.json();

      setLodging(datasJson);
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Slogan />
      {lodgings ? (
        <div className="cards-container">
          {lodgings.map((el) => {
            return (
              <Link key={el.id} to={`lodging/${el.id}`}>
                <Card title={el.title} cover={el.cover} />
              </Link>
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Home;
