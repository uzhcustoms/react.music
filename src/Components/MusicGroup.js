
export function MusicGroup(props) {
    return (
        <div className="container">
            <div className="music-item">
                <p>Название групы:</p>
                <span>{props.title}</span>
            </div>
            <div className="music-item">
                <p>Участники групы:</p>
                <span>{props.participants}</span>
            </div>

        </div>
    );
}