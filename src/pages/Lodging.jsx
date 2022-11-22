import '../styles/Lodging.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';
import NotFound from '../pages/NotFound';

function Lodging() {
  const { id } = useParams();

  const [lodging, setLodging] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const datas = await fetch('/data/logements.json');
      const datasJson = await datas.json();
      const data = await datasJson.find((x) => x.id === id);
      setLodging(data);

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    fetchData();
  }, [id]);

  const equipments = lodging.equipments && lodging.equipments.join('\n');

  return (
    <div>
      {lodging ? (
        <div className="lodging-container">
          <Carousel images={lodging.pictures} />
          <div className="lodging-informations-container">
            <div className="lodging-generals-informations-container">
              <div className="lodging-title-location-container">
                <span className="lodging-title">{lodging.title}</span>
                <span className="lodging-location">{lodging.location}</span>
              </div>
              <div className="lodging-tags-container">
                {lodging.tags &&
                  lodging.tags.map((x, idx) => {
                    return <Tag key={idx} title={x} />;
                  })}
              </div>
            </div>
            <div className="lodging-host-score-container">
              <div className="lodging-host">
                <span>{lodging.host && lodging.host.name}</span>
                <img
                  src={lodging.host && lodging.host.picture}
                  alt={`profil de ${lodging.host && lodging.host.name}`}
                />
              </div>
              <Stars rating={lodging.rating} />
            </div>
          </div>
          <div className="lodging-details-container">
            <Dropdown
              title="Description"
              text={lodging.description}
              type="low"
            />
            <Dropdown title="Equipements" text={equipments} type="low" />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Lodging;
