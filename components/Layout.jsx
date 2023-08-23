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
        <meta property="og:image" content="https://cocoshine.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ft0rxw5rs%2Fproduction%2F5142eff4910ea08d49b390fd322f798b01569050-1358x618.png&w=640&q=75" />
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