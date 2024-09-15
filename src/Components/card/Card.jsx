import "./Card.css"
const CardComponent = ({ title, description, icon }) => (
    <div className="card component-card text-center">
      <div className="card-body">
        {icon && (
          <div className="icon-container mb-3">
            {icon}
          </div>
        )}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
  
  export default CardComponent;
  