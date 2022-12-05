import React from 'react';
import './App.css';
import logo from "./components/navbar/logo.png";
import {FaFacebookF, FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa';

function App() {
  return (
      <div className="wrapper">
          <header className="header">
            <div className="container">
                <div className="header__body">
                    <a href="#" className="header__logo">
                        <img src={logo} alt="logo"/>
                    </a>
                    <div className="header__burger">
                        <span></span>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li><a href="#" className="header__link">Home</a></li>
                            <li><a href="#" className="header__link">Unternehmen</a></li>
                            <li><a href="#" className="header__link">Leistungen</a></li>
                            <li><a href="#" className="header__link">Produkte</a></li>
                            <li><a href="#" className="header__link">Kontakt</a></li>
                        </ul>
                </nav>
                </div>
      </div>
          </header>
          <div className="content">
              <div className="content__container">
                  <div className="content__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aut beatae culpa cum cumque dolore dolorem doloremque ducimus eaque eligendi excepturi exercitationem harum hic illum in ipsum laborum libero magnam nam nobis possimus quae quas quasi quia recusandae, repellat reprehenderit rerum, vel voluptatem voluptatum.
                    </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis dolore doloremque eligendi, eveniet ex exercitationem facilis hic illo ipsa molestias mollitia nisi nulla odit officiis omnis perspiciatis, quasi quis sapiente suscipit totam vero vitae! Atque consequatur dolorum hic necessitatibus quibusdam repudiandae sed voluptates.
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam, atque consectetur consequuntur corporis culpa delectus doloribus et fuga, illo incidunt iste labore libero non officia praesentium quaerat ratione repellat tempore temporibus tenetur veritatis voluptas! Ab asperiores aspernatur, delectus dignissimos distinctio doloremque ea eius esse, fuga, harum impedit iste modi nam nisi nulla obcaecati perferendis perspiciatis quaerat quidem tempora veniam vitae voluptatum! Ab assumenda id incidunt, labore maiores nemo neque quia voluptatum. Ab alias animi asperiores dolorem doloribus eligendi error explicabo harum itaque magni maiores nostrum optio pariatur quod repellat, sunt velit! Consequuntur, cum deleniti dicta dolorum expedita fugiat, hic incidunt iusto maiores maxime neque nobis nostrum quia reiciendis repellendus rerum saepe similique sint soluta totam velit voluptatem voluptatibus voluptatum. Ad architecto asperiores cum ex facilis laborum maiores odit perspiciatis provident repellat tempore veniam, voluptates! A ab accusamus adipisci aliquam aliquid amet architecto at blanditiis, consequatur delectus deleniti dignissimos dolores ea et ex facere fugit harum in ipsam itaque minus natus nihil nisi numquam officia optio perspiciatis possimus, quaerat reprehenderit rerum sapiente sequi similique soluta sunt tempore voluptas voluptatibus. Aspernatur eligendi error excepturi, nesciunt quod similique voluptate. Assumenda dolorem facilis fugiat illum labore laudantium maiores recusandae! Assumenda atque cum cumque dignissimos distinctio dolore dolores dolorum earum enim, error esse eveniet ex expedita facere illum ipsa laudantium odit perspiciatis quis ratione suscipit tempora ullam, veritatis. Adipisci animi atque, consequatur consequuntur cupiditate delectus dignissimos, dolor eaque, eius est eum hic ipsa ipsam iste iure minus necessitatibus odio odit pariatur quae qui rem repellat repudiandae sapiente sint totam voluptatum? Ad aliquid assumenda cupiditate similique? Eaque hic laudantium quis veritatis! A aliquam, assumenda est iure odio quos sunt voluptatibus. Consequuntur, corporis debitis deleniti earum fugit hic ipsam ipsum magnam nemo neque nihil non numquam pariatur quas quo repudiandae saepe vitae voluptate? Accusamus, autem blanditiis commodi consequatur, corporis culpa delectus dignissimos ducimus earum eius eos esse et inventore ipsa ipsum iste iusto laboriosam laborum libero minima minus neque nesciunt nihil nisi odio officia pariatur placeat praesentium, quae quam quidem quis quo sapiente similique suscipit vero voluptatem? Aliquid asperiores, autem blanditiis, consequuntur cupiditate doloremque eaque est et fugit illum ipsam iste numquam, odio officia provident quod quos repellendus tempore temporibus tenetur totam veniam voluptatem voluptatum. Architecto commodi culpa deserunt distinctio, dolor ea incidunt neque nulla possimus rem, repellendus sit, ut voluptatem? Amet earum eos minus nisi praesentium. Illo omnis quisquam quod suscipit. Ad, dolores doloribus et laudantium maiores neque nobis quisquam sint. Ad, atque aut dolorum earum expedita explicabo fuga molestiae obcaecati perferendis totam. Aliquam deleniti dignissimos dolores ea eligendi est fuga hic, impedit ipsam necessitatibus odit perferendis quam quod recusandae similique unde veritatis voluptatem voluptates! Blanditiis non odio qui suscipit ut. Alias aliquam aperiam asperiores commodi deleniti distinctio, doloremque ducimus earum eius eligendi ex excepturi facilis hic impedit incidunt, laboriosam maiores maxime molestias nam necessitatibus nisi nulla numquam omnis perferendis placeat praesentium quam quas quasi quo rem repellendus sapiente similique sunt velit veritatis vero voluptas? Ex exercitationem explicabo optio pariatur quod sequi soluta voluptate? Aliquid.
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam, atque consectetur consequuntur corporis culpa delectus doloribus et fuga, illo incidunt iste labore libero non officia praesentium quaerat ratione repellat tempore temporibus tenetur veritatis voluptas! Ab asperiores aspernatur, delectus dignissimos distinctio doloremque ea eius esse, fuga, harum impedit iste modi nam nisi nulla obcaecati perferendis perspiciatis quaerat quidem tempora veniam vitae voluptatum! Ab assumenda id incidunt, labore maiores nemo neque quia voluptatum. Ab alias animi asperiores dolorem doloribus eligendi error explicabo harum itaque magni maiores nostrum optio pariatur quod repellat, sunt velit! Consequuntur, cum deleniti dicta dolorum expedita fugiat, hic incidunt iusto maiores maxime neque nobis nostrum quia reiciendis repellendus rerum saepe similique sint soluta totam velit voluptatem voluptatibus voluptatum. Ad architecto asperiores cum ex facilis laborum maiores odit perspiciatis provident repellat tempore veniam, voluptates! A ab accusamus adipisci aliquam aliquid amet architecto at blanditiis, consequatur delectus deleniti dignissimos dolores ea et ex facere fugit harum in ipsam itaque minus natus nihil nisi numquam officia optio perspiciatis possimus, quaerat reprehenderit rerum sapiente sequi similique soluta sunt tempore voluptas voluptatibus. Aspernatur eligendi error excepturi, nesciunt quod similique voluptate. Assumenda dolorem facilis fugiat illum labore laudantium maiores recusandae! Assumenda atque cum cumque dignissimos distinctio dolore dolores dolorum earum enim, error esse eveniet ex expedita facere illum ipsa laudantium odit perspiciatis quis ratione suscipit tempora ullam, veritatis. Adipisci animi atque, consequatur consequuntur cupiditate delectus dignissimos, dolor eaque, eius est eum hic ipsa ipsam iste iure minus necessitatibus odio odit pariatur quae qui rem repellat repudiandae sapiente sint totam voluptatum? Ad aliquid assumenda cupiditate similique? Eaque hic laudantium quis veritatis! A aliquam, assumenda est iure odio quos sunt voluptatibus. Consequuntur, corporis debitis deleniti earum fugit hic ipsam ipsum magnam nemo neque nihil non numquam pariatur quas quo repudiandae saepe vitae voluptate? Accusamus, autem blanditiis commodi consequatur, corporis culpa delectus dignissimos ducimus earum eius eos esse et inventore ipsa ipsum iste iusto laboriosam laborum libero minima minus neque nesciunt nihil nisi odio officia pariatur placeat praesentium, quae quam quidem quis quo sapiente similique suscipit vero voluptatem? Aliquid asperiores, autem blanditiis, consequuntur cupiditate doloremque eaque est et fugit illum ipsam iste numquam, odio officia provident quod quos repellendus tempore temporibus tenetur totam veniam voluptatem voluptatum. Architecto commodi culpa deserunt distinctio, dolor ea incidunt neque nulla possimus rem, repellendus sit, ut voluptatem? Amet earum eos minus nisi praesentium. Illo omnis quisquam quod suscipit. Ad, dolores doloribus et laudantium maiores neque nobis quisquam sint. Ad, atque aut dolorum earum expedita explicabo fuga molestiae obcaecati perferendis totam. Aliquam deleniti dignissimos dolores ea eligendi est fuga hic, impedit ipsam necessitatibus odit perferendis quam quod recusandae similique unde veritatis voluptatem voluptates! Blanditiis non odio qui suscipit ut. Alias aliquam aperiam asperiores commodi deleniti distinctio, doloremque ducimus earum eius eligendi ex excepturi facilis hic impedit incidunt, laboriosam maiores maxime molestias nam necessitatibus nisi nulla numquam omnis perferendis placeat praesentium quam quas quasi quo rem repellendus sapiente similique sunt velit veritatis vero voluptas? Ex exercitationem explicabo optio pariatur quod sequi soluta voluptate? Aliquid.
                      </p>
                  </div>
              </div>
          </div>
          <footer className="footer">
              <div className="footer__container">
                  <div className="row">
                      <div className="footer-content">
                          <h4>Über uns</h4>
                          <ul>
                              <li><a href="#">Unternehmen</a></li>
                              <li><a href="#">Leistungen</a></li>
                              <li><a href="#">Produkte</a></li>

                          </ul>
                      </div>
                      <div className="footer-content">
                          <h4>Rechtliches</h4>
                          <ul>
                              <li><a href="#">Impressum</a></li>
                              <li><a href="#">Datenschutz</a></li>
                          </ul>
                      </div>
                      <div className="footer-contentum">
                          <h4>Kontakt</h4>
                          <ul>
                              <li>Strasse 50</li>
                              <li>PLZ Stadt</li>
                              <li><a href="#">Email: info@rt-handwerk.de</a></li>
                              <li>Mobile: 0123456789</li>

                          </ul>
                      </div>

                      <div className="footer-content">
                          <h4>Uns folgen</h4>
                          <div className="social-links">
                              <a href="#"><FaFacebookF/></a>
                              <a href="#"><FaTwitter/></a>
                              <a href="#"><FaLinkedinIn/></a>
                              <a href="#"><FaInstagram/></a>

                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  )
}

export default App;
