import TwichCard from "./components/TwichCard";

export default function App() {
  return (
    <>
      <div className="layout-princ">
        <div className="side-nav">
          <div className="contents-side">
            <div className="bar-scroller-content">
              <div className="scrolleable-content">
                <div className="sidebar-contents">
                  <div className="layout-side">
                    <div className="side-nav-title">
                      <p className="title-text">Para ti</p>
                    </div>
                    <div className="follow-chanels">
                      <div className="content-title-chanels">
                        <h2 className="chanels-text">CANALES QUE SIGUES</h2>
                      </div>
                    </div>
                    <div className="order-options">
                      <div className="order-title-content">
                        <div className="c-left">
                          <span className="core-text">NUEVO</span>
                          <p className="core-text-der">
                            Opciones de <br /> orden
                          </p>
                          <div className="score-button">
                            <div className="buttonIcon">
                              <figure className="IsFigure">
                                <img
                                  src="../public/4115230-cancel-close-cross-delete_114048.svg"
                                  alt="icon"
                                  className="iconexit"
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section className="chanels-person-content"></section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-princ">
          <div className="content-banner">
            <div className="style-image">
              <img
                src="https://i.etsystatic.com/30097568/r/il/b9d938/3369548185/il_fullxfull.3369548185_mn08.jpg"
                alt="banner"
                className="img-banner"
              />
            </div>
          </div>
          <section className="categories">
            <div className="categories-like">
              <h2 className="core-text-der">
                <a href="#" className="link-cat">
                  Categorías
                </a>
                <span className="core-text-der"> que podrían gustarte</span>
              </h2>
            </div>
            <div className="cards-content">
              <div className="cards-content-princ">
                <TwichCard
                  gameName="Conversando"
                  spectators="557.2 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
                />
                <TwichCard
                  gameName="Only Up!"
                  spectators="144.4 k espectadores"
                  tagName="Juego de Aventuras"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-188x250.jpg"
                />
                <TwichCard
                  gameName="Fortnite"
                  spectators="77 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"
                />
                <TwichCard
                  gameName="Minecraft"
                  spectators="67.2 k espectadores"
                  tagName="simulación"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
                />
                <TwichCard
                  gameName="Grand Thef Auto V"
                  spectators="189.3 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg"
                />
                <TwichCard
                  gameName="Valorant"
                  spectators="198.1 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
                />
                <TwichCard
                  gameName="Deportes"
                  spectators="66.2 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/518203-188x250.jpg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
