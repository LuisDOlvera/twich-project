import TwichCard from "./components/TwichCard";
import StreamerCard from "./components/StreamerCard";

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
                    <section className="chanels-person-content">
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/e3200952-2464-4811-b215-af33aeee6e3e-profile_image-70x70.png"
                        streamerName="BayesiaNash"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/c43dcc64-9090-4974-8546-4da16b358f60-profile_image-70x70.png"
                        streamerName="fmontes83"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/e7e3bc13-d3e6-4e0b-ad47-cfeec0e25e0f-profile_image-70x70.jpeg"
                        streamerName="CarlosAzaustre"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/ad09ba87-0247-43ef-a8c8-5f489a8ab103-profile_image-70x70.png"
                        streamerName="MoureDev"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/e6fc12ba-9bac-4816-924b-812903061302-profile_image-70x70.png"
                        streamerName="codearock"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/0cf08bee-2676-4652-8035-396cc76cfc1c-profile_image-70x70.png"
                        streamerName="SoyDairi"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png"
                        streamerName="ibai"
                        onLine={false}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/96fef5c0-9ec8-4fd3-a360-90b589c3ff0d-profile_image-70x70.png"
                        streamerName="TheGref"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-70x70.png"
                        streamerName="midudev"
                        onLine={false}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/d65affb6-fbfb-4be4-a8ce-7f28ce7a9d00-profile_image-70x70.png"
                        streamerName="moe9977"
                        onLine={false}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/dylanterolive-profile_image-c737584fa9634184-70x70.jpeg"
                        streamerName="DylanteroLIVE"
                        onLine={false}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/14c881e9-4622-489a-8a29-55f09bc83faf-profile_image-70x70.png"
                        streamerName="Jelty"
                        onLine={false}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/d2654a56-5055-48ac-a7a2-d7ff7b0a25a0-profile_image-70x70.png"
                        streamerName="say_guz"
                        onLine={true}
                      />
                      <StreamerCard
                        img="https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png"
                        streamerName="elxocas"
                        onLine={true}
                      />
                    </section>
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
                  isNew={true}
                />
                <TwichCard
                  gameName="Only Up!"
                  spectators="144.4 k espectadores"
                  tagName="Juego de Aventuras"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Fortnite"
                  spectators="77 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Minecraft"
                  spectators="67.2 k espectadores"
                  tagName="simulación"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Grand Thef Aut"
                  spectators="189.3 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Valorant"
                  spectators="198.1 k espectadores"
                  tagName="shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Deportes"
                  spectators="66.2 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/518203-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Final Fantas..."
                  spectators="92 k espectadores"
                  tagName="Juego de rol"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/2090279789_IGDB-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Diablo IV"
                  spectators="173.3 k espectadores"
                  tagName="IRL (Juego de rol)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/515024-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Street Fighter 6"
                  spectators="13.3 k espectadores"
                  tagName="Peleas"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/55453844_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="BalleBit Rema..."
                  spectators="24.3 k espectadores"
                  tagName="Juego de rol"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/496916_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="F1 23"
                  spectators="12.2 k espectadores"
                  tagName="Carreras"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/174553474_IGDB-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Amnesia: The B..."
                  spectators="1.5 k espectadores"
                  tagName="Juego de rol"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/1531824392_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Aliens: Dark De..."
                  spectators="9.6 k espectadores"
                  tagName="Estrategia"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/570278441_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Layers of Fear"
                  spectators="9 k espectadores"
                  tagName="Estrategia"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/504901183_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="UNDAWN"
                  spectators="1 k espectadores"
                  tagName="Estrategia"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/79664757_IGDB-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Counter-Strike..."
                  spectators="90 k espectadores"
                  tagName="Estrategia"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Talk shows y p..."
                  spectators="17.7 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/417752-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Call of Duty:..."
                  spectators="37.1 k espectadores"
                  tagName="Shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Tom Clancy's..."
                  spectators="13 k espectadores"
                  tagName="Peleas"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-285x380.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Talk shows y p..."
                  spectators="17.7 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/417752-188x250.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Rocket League"
                  spectators="14.8 k espectadores"
                  tagName="Carreras o conducción"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="Dead by Dayl..."
                  spectators="27.1 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="Dota 2"
                  spectators="43.1 k espectadores"
                  tagName="Estrategia"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="ROBLOX"
                  spectators="5.3 k espectadores"
                  tagName="IRL (vida real)"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg"
                  isNew={true}
                />
                <TwichCard
                  gameName="BattleBit Rem..."
                  spectators="17.8 k espectadores"
                  tagName="Shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/496916_IGDB-285x380.jpg"
                  isNew={false}
                />
                <TwichCard
                  gameName="XDefiant"
                  spectators="34 k espectadores"
                  tagName="Shooter"
                  img="https://static-cdn.jtvnw.net/ttv-boxart/780302568-285x380.jpg"
                  isNew={false}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
