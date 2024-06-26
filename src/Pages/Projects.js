import React from 'react';
import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Footer from '../Footer';

function Projects() {
  return (
    <div>
      <Navigation />
      <section className="py-5">
        <Container className="px-5 mb-5">
          <Card className="text-center mb-5">
            <Card.Body>
              <h1>Nos projets réalisés</h1>
            </Card.Body>
          </Card>
          <Row className="gx-5 justify-content-center">
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="px-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">Ma formation de JS</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius at enim eum illum aperiam placeat esse? Mollitia omnis
                      minima saepe recusandae libero, iste ad asperiores!
                      Explicabo commodi quo itaque! Ipsam!
                    </p>
                  </div>
                  <Figure>
                    <Figure.Image
                      src="https://img.freepik.com/vecteurs-libre/programmeurs-utilisant-langage-programmation-javascript-ordinateur-personnes-minuscules-langage-javascript-moteur-javascript-concept-developpement-web-js-illustration-isolee-violette-vibrante-lumineuse_335657-986.jpg?size=626&ext=jpg&uid=R107750808&ga=GA1.1.431377284.1691224391&semt=ais"
                      
                      alt=""
                    />
                  </Figure>
                </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="px-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">Ma formation sur la conception</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius at enim eum illum aperiam placeat esse? Mollitia omnis
                      minima saepe recusandae libero, iste ad asperiores!
                      Explicabo commodi quo itaque! Ipsam!
                    </p>
                  </div>
                  <Figure>
                    <Figure.Image
                      src="https://img.freepik.com/vecteurs-libre/reunion-collegues-remue-meninges-equipe-formation-entreprise-briefing-entreprise-discussion-tache-travail-equipe-concept-communication-strategie-entreprise_335657-158.jpg?size=626&ext=jpg&uid=R107750808&ga=GA1.1.431377284.1691224391&semt=ais"   alt=""
                    />
                  </Figure>
                </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="px-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">Ma formation sur PHP</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius at enim eum illum
                    </p>
                  </div>
                  <Figure>
                    <Figure.Image
                      src="https://img.freepik.com/vecteurs-premium/developpement-technologies-programmation-codage-developpement-ingenierie-programmeur-developpeur-cree-du-code-ecran-ordinateur-portable-codes-travail-developpeur-tache-logiciel-codage-aide-ordinateur_458444-1153.jpg?size=626&ext=jpg&uid=R107750808&ga=GA1.1.431377284.1691224391&semt=ais"
                      className="img-fluid"
                      alt=""
                    />
                  </Figure>
                </div>
              </Card.Body>
            </Card>
            <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
              <Card.Body className="px-0">
                <div className="d-flex align-items-center">
                  <div className="p-5" id="tableau">
                    <h2>Le tableau à afficher</h2>
                  </div>
                  <Figure>
                    <Figure.Image
                      src="https://img.freepik.com/vecteurs-libre/ingenieur-developpeur-code-ordinateur-portable-tablette-developpement-multiplateforme-systemes-exploitation-multiplateformes-concept-environnements-logiciels-illustration-isolee-violette-vibrante-lumineuse_335657-312.jpg?size=626&ext=jpg&uid=R107750808&ga=GA1.1.431377284.1691224391&semt=sph"
                      className="img-fluid"
                      alt=""
                    />
                  </Figure>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
