export default function StreamerCard(props) {
  return (
    <div className="streamers-content">
      <a href="#" className="data-a-id">
        <figure className="sc-avatar">
          <img
            src={props.img}
            alt="avatar"
            className={props.onLine ? "image-avatar" : "image-avatar-gray"}
          />
        </figure>
        <div className="streamer-name">
          <p className="core-text-izq">{props.streamerName}</p>
        </div>
        <div className="status-str">
          <p className="status-text">
            {props.onLine ? (
              <p className="status-text"> Online </p>
            ) : (
              <p className="status-text"> Offline </p>
            )}
          </p>
        </div>
      </a>
    </div>
  );
}
