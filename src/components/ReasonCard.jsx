import './ReasonCard.css';

const ReasonCard = ({ number, title, text, delay }) => {
    return (
        <div className="pixar-reason-card" style={{ animationDelay: `${delay}s` }}>
            <div className="card-header">
                <div className="reason-number-badge">{number}</div>
                <h3 className="reason-title-text">{title}</h3>
            </div>
            <div className="card-content-area">
                <p className="reason-text-content">{text}</p>
            </div>
            <div className="card-heart-decoration">
                <span className="heart-icon">❤️</span>
            </div>
        </div>
    );
};

export default ReasonCard;
