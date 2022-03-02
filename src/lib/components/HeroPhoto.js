import React from "react";
const HeroPhoto = (props) => {
  return (
    <div
      class="homepage-hero__video bottom-left"
      id="hidden-overflow-container"
    >
      <div id="video-wrapper">
        <video
          autoplay=""
          id="moody-video"
          loop=""
          muted=""
          playsinline=""
          poster="https://moody.utexas.edu/sites/default/files/styles/moody_image_style_960w_x_540h/public/home-video-images/Spring_Ambient_Cut.jpg"
          preload="auto"
          title="Moody College of Communication"
        >
          <track
            kind="descriptions"
            srclang="en"
            src="https://moody.utexas.edu/sites/default/files/descriptions-vtt/descriptions.vtt"
            default=""
          />
          <source
            src="https://player.vimeo.com/external/540685165.sd.mp4?s=36bc2ced47f596d4492cc85703826953de947622&amp;profile_id=165"
            type="video/mp4"
          />
        </video>
        <div
          id="video-overlay"
          style="opacity:0.50;background-color:#bf5700;"
        ></div>
      </div>
      <div id="video-controls" style="opacity: 1;">
        <button id="play-pause" type="button">
          <p class="sr-only">Pause button</p>
          <svg
            height="50"
            viewBox="0 0 50 50"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25,50A25.007,25.007,0,0,1,15.269,1.965,25.006,25.006,0,0,1,34.731,48.035,24.844,24.844,0,0,1,25,50Zm3.907-37.5a.71.71,0,0,0-.781.6V36.9a.71.71,0,0,0,.781.6h4.688a.71.71,0,0,0,.781-.6V13.1a.71.71,0,0,0-.781-.6Zm-12.5,0a.71.71,0,0,0-.781.6V36.9a.71.71,0,0,0,.781.6h4.688a.71.71,0,0,0,.781-.6V13.1a.71.71,0,0,0-.781-.6Z"></path>
          </svg>
        </button>
      </div>
      <div class="textual-content">
        <div class="headline" style="opacity: 1;">
          <div class="field field--name-field-mav-headline field--type-string field--label-hidden field__item">
            {" "}
            converging worlds.
          </div>

          <div class="field field--name-field-mav-headline-line-two field--type-string field--label-hidden field__item">
            creating futures.
          </div>
        </div>
        <div class="call-to-action"></div>
      </div>
    </div>
  );
};
export default HeroPhoto;
