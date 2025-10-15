import './CardLocation.css';

const CardLocation = ({ location }) => {
    return (
        <div className="location-postcard">
            <img
                src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
                alt={location.name}
                className="location-background"
            />

            <div className="location-overlay">
                <h4 className="location-name">{location.name}</h4>

                <div className="location-details">
                    <p><strong>Town:</strong> {location.town || 'Springfield'}</p>
                    <p><strong>Use:</strong> {location.use || 'Desconocido'}</p>
                </div>
            </div>
        </div>
    );
};

export default CardLocation;

