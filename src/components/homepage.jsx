import React from 'react'

import banner from '../assets/banner.png'

export default function Homepage() {
  return (
    <main>

      <article>
        <p>
        Fools Teeth - Hailing from the vibrant rock and metal scene in Bristol, Fools Teeth debut single ‘Wash Away’ draws its roots from its members previous band love of punk and stoner rock. Delving into the guitar riffs that rocked their former years, Fools Teeth is a unique blend of blues rock with soulful psychedelic solos, akin to those of Red Hot Child Peppers or The Mars Volta.Fools Teeth live shows have an energetic and heavily distorted set, with hard hitting drums and grunge like bass tones, taking inspiration from bands like Helmet, Tool and Kyuss. Having played to packed crowds at local Bristol rock and metal bars, Fools Teeth are a staple in the alt rock Bristol scene.
        </p>
        <br></br>
        <div>
          <iframe src="https://open.spotify.com/embed/track/11uSvBtq1edL9KMJuCo4Yb?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <br></br>
          <br></br>
          <iframe src="https://open.spotify.com/embed/track/327QwHIq8LGFTdCvA8cCoh?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </article>
      <div>
          <img id='homebanner' src={banner} alt=''></img>
        </div>
    </main>
  )
}
