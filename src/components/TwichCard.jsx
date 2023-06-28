export default function TwichCard(props) {
  return (
    <article className="card-princ">
      <div className="card-wrapper">
        <div className={props.isNew ? "ind-new" : "ind-new-none"}>
          <span className="ind-new-text">NUEVO</span>
        </div>
        <div className="card-picture">
          <img src={props.img} alt="chatting" className="game-picture" />
        </div>
      </div>
      <div className="card-body">
        <div className="name-game">
          <div className="data-text">
            <span className="text-game">
              <a href="#" className="target">
                <h2 className="core-text-der">{props.gameName}</h2>
              </a>
            </span>
          </div>
          <div className="tree-points-containner">
            <span className="icon-tree-points">
              <img
                src="../public/susp.png"
                alt="ree-points"
                className="icon-points"
              />
            </span>
          </div>
        </div>
      </div>
      <p className="core-text-card">
        <a href="#" className="data-target-espect">
          {props.spectators}
        </a>
      </p>
      <div className="game-genere">
        <div className="g-genere-container">
          <div className="g-genere-container-b">
            <a href="#" className="tag-url">
              <div className="tag-content">
                <div className="truncate-text">
                  <span>{props.tagName}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
