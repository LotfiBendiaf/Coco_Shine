import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      
      <Head>
      {/* Code Snippets */}
        <meta property="og:site_name" content="COCOSHINE" />
        <meta property="og:url" content="https://cocoshine.vercel.app/" key="url" />
        <meta property="og:title" content="COCO SHINE" key="Title" />
        <meta property="og:type" content="website" key="type" />
        {/* <meta property="og:image" content="https://renovsite-construction-reims.up.railway.app/static/Images/og_image.png" /> */}
        <meta
          property="og:description"
          content="Coco Shine vous propose une sélection exquise de produits et accessoires pour animaux de compagnie. Découvrez une gamme soigneusement choisie de produits de haute qualité qui allient style et confort pour choyer vos fidèles compagnons. Faites de chaque instant avec votre animal une expérience éclatante grâce à Coco Shine." key="description" />

        <meta name="description" content="Coco Shine vous propose une sélection exquise de produits et accessoires pour animaux de compagnie. Découvrez une gamme soigneusement choisie de produits de haute qualité qui allient style et confort pour choyer vos fidèles compagnons. Faites de chaque instant avec votre animal une expérience éclatante grâce à Coco Shine." key="description" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>COCO SHINE</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout