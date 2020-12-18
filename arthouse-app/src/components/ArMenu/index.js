import { Fragment, useEffect, useRef, useState } from 'react';
import './styles/ArMenu.css'
import ArLogo from '../../assets/img/arLogo.svg'
import ArtworkThumbnail from '../../assets/img/artworkThumbnail.svg'
import Diorama from '../../assets/img/diorama.svg'
import PosterThumbnail from '../../assets/img/posterThumbnail.svg'
import VisualDisobedienceGlb from '../../assets/ar/mesh/VisualDisobedience.glb'
import VisualDisobedienceSvg from '../../assets/img/visualDisobedience.svg'
import VisualDisobediencePng from '../../assets/img/visualDisobedience.png'
import DidactiqueGlb from '../../assets/ar/mesh/Didactique.glb'
import DidactiqueUsdz from '../../assets/ar/mesh/Didactique.usdz'
import CitySkybox from '../../assets/ar/skybox/hansaplatz_4k.hdr'
import '@google/model-viewer';

const ArMenu = (props) => {
  const [isArtworkSelected, setIsArtworkSelected] = useState(true)
  const [meshSrc, setMeshSrc] = useState(null)

  useEffect(() => {
    if (isArtworkSelected) {
      setMeshSrc(VisualDisobedienceGlb)
    } else {
      setMeshSrc(DidactiqueGlb)
    }
  }, [isArtworkSelected])

  const switchSrc = (e, name) => {
    switch (name) {
      case 'VisualDisobedience':
        setIsArtworkSelected(true)
        break;

      case 'Didactique':
        setIsArtworkSelected(false)
        break;

      default:
        console.log('error');
        break;
    }
  }

  return (
    <Fragment>
      <div className="ar-menu">
      <model-viewer
          id="static-model"
          src={meshSrc}
          ios-src={DidactiqueUsdz}
          poster={VisualDisobedienceSvg}
          skybox-image={CitySkybox}
          shadow-intensity="1"
          camera-controls
          auto-rotate
          reveal
          ar ar-scale="auto"
        >
          <span className="title">
            <h1>Visual Disobedience</h1>
            <h2>by Shepard Fairey</h2>
          </span>
          <div slot="interaction-prompt">Turn me baby</div>
          <div id="lazy-load-poster" slot="poster"></div>
          <div id="button-load" slot="poster">Click for loading model</div>

          <button id="ar-button" slot="ar-button" >View in your space</button>
          <div id="ar-prompt">
            <img src={VisualDisobedienceSvg}></img>
          </div>
          <div className="slider">
            <div className="slides">
              <button className={`slide ${isArtworkSelected ? "selected" : ""} artwork-thumbnail`} onClick={(e) => switchSrc(e, 'VisualDisobedience')}></button>
              <button className={`slide ${!isArtworkSelected ? "selected" : ""} diorama-thumbnail`} onClick={(e) => switchSrc(e, 'Didactique')} ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
              <button className="slide poster-thumbnail" ></button>
            </div>
          </div>
        </model-viewer>
      </div>
    </Fragment>
  )
}

export default ArMenu;
