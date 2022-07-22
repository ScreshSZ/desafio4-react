import React from 'react'
import Navbar from '../componentes/Navbar'
import Cards from '../componentes/Cards'
import styles from '../styles/contenedorCards.module.css'
import Footer from '../componentes/Footer.js'

const Home = () => {
  return (
    <>
      <Navbar />


      <div className={styles.contenedorCards} >
        <Cards 
        image='card1.jpg' 
        tittle='Iphone 11' 
        description='Pantalla LCD Multi-Touch de 6.1 pulgadas (diagonal) sin marco y con tecnología IPS'
        tittleModal='Iphone 11'
        descriptionModal='Pantalla Liquid Retina HD
        Pantalla LCD Multi-Touch de 6.1 pulgadas (diagonal) sin marco y con tecnología IPS
        Resolución de 1792 x 828 pixeles a 326 ppi
        Relación de contraste 1400:1 (normal)
        Pantalla True Tone
        Pantalla con amplia gama de colores (P3)
        Toque con respuesta háptica
        Brillo máximo de 625 nits (normal)
        Revestimiento oleofóbico resistente a huellas dactilares
        Compatibilidad para mostrar varios idiomas y caracteres simultáneamente' 
         />

        <Cards image='card2.jpg' tittle='Iphone 12' description='Pantalla OLED de 5.4 pulgadas (diagonal) sin marco' 
        tittleModal='Iphone 12'
        descriptionModal='Pantalla HDR
        True Tone
        Amplia gama de colores (P3)
        Toque con respuesta háptica
        Relación de contraste 2,000,000:1 (normal)
        Brillo máximo de 625 nits (normal); brillo máximo de 1,200 nits (HDR)
        Revestimiento oleofóbico resistente a huellas dactilares
        Compatibilidad para mostrar varios idiomas y caracteres simultáneamente'
        />

        <Cards image='card3.jpg' tittle='Iphone 13' description='Pantalla OLED de 6.1 pulgadas (diagonal) sin marco' 
        tittleModal='Iphone 13'
        descriptionModal='Pantalla HDR
        True Tone
        Amplia gama de colores (P3)
        Toque con respuesta háptica
        Relación de contraste 2,000,000:1 (normal)
        Brillo máximo de 800 nits (normal); brillo máximo de 1,200 nits (HDR)
        Revestimiento oleofóbico resistente a huellas dactilares
        Compatibilidad para mostrar varios idiomas y caracteres simultáneamente'
        />
      </div>



      <Footer />
    </>
  )
}

export default Home