export function Albums(props) {
    return (
        <>
            <h3>Альбомы:</h3>
            <div className="albums">{props.albums}</div>
        </>
    );
}