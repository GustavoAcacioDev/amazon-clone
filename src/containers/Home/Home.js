import React from 'react';
import './Home.css';

//Import dos componentes
import Product from '../../components/Products/Product.js';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img className="home__image" src="https://m.media-amazon.com/images/I/617-EJvAaWL._SX3000_.jpg" alt="Fundo com filmes e séries presentes no catálogo do Prime Video" />

          <div className="home__row">
            <Product id="3901283091" title="Clean Code" price={29.99} image="https://m.media-amazon.com/images/S/aplus-media/sota/1c167ffb-2b4f-4064-b943-e9a945a37336.__CR0,0,970,600_PT0_SX970_V1___.png" rating={4}/>
            <Product id="3718923672" title="Box Duna: Primeira Trilogia + Mapa Arrakis Capa dura" price={166.06} image="https://images-na.ssl-images-amazon.com/images/I/91sjnBZTDKL.jpg" rating={5}/>
          </div>
          <div className="home__row">
            <Product id="1637216391" title="Echo Dot (4ª Geração): Smart Speaker com Alexa | Música, informação e Casa Inteligente - Cor Preta" price={379.05} image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY450_.jpg" rating={5}/>
            <Product id="1283290654" title="Fire TV Stick | Streaming em Full HD com Alexa | Com Controle Remoto por Voz com Alexa (inclui comandos de TV)" price={360.05} image="https://m.media-amazon.com/images/I/51degAt5CFL._AC_SX679_.jpg" rating={3}/>
            <Product id="8973218973" title="Console Xbox Series X" price={4349.00} image="https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_SX522_.jpg" rating={4}/>
          </div>
          <div className="home__row">
            <Product id="3287632018" title="Smart TV LED PRO 43' Full HD LG 43LM631C0SB, ThinQ AI, 3 HDMI, 2 USB, Wi-Fi, Conversor Digital" price={1891.38} image="https://m.media-amazon.com/images/I/61UqBsb-pMS._AC_SX679_.jpg" rating={4}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
