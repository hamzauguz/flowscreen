// Sleeping Moon error page template
// Based on CodePen: https://codepen.io/agathaco/pen/WKXREy
// Features: starry night sky, sleeping moon, flying birds, CSS-driven animations

import type { FlowScreenTemplate } from "../../types";

export const sleepingMoonTemplate: FlowScreenTemplate = {
  html: `<div class="ef-sleeping-moon-wrapper flowscreen-error-container">
  <div class="ef-sleeping-moon-container-star">
    <!-- Star layer 1 (30 stars) -->
    <div class="ef-sleeping-moon-star-1" style="top: 5vh; left: 10vw; width: 5px; height: 1.67px; animation-delay: 2s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 15vh; left: 25vw; width: 4px; height: 1.33px; animation-delay: 1s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 25vh; left: 40vw; width: 6px; height: 2px; animation-delay: 3s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 35vh; left: 15vw; width: 5px; height: 1.67px; animation-delay: 0.5s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 45vh; left: 60vw; width: 4px; height: 1.33px; animation-delay: 2.5s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 55vh; left: 30vw; width: 7px; height: 2.33px; animation-delay: 1.5s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 65vh; left: 75vw; width: 5px; height: 1.67px; animation-delay: 4s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 75vh; left: 20vw; width: 4px; height: 1.33px; animation-delay: 0.8s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 85vh; left: 50vw; width: 6px; height: 2px; animation-delay: 3.5s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 10vh; left: 70vw; width: 5px; height: 1.67px; animation-delay: 1.2s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 20vh; left: 5vw; width: 4px; height: 1.33px; animation-delay: 2.8s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 30vh; left: 85vw; width: 6px; height: 2px; animation-delay: 0.3s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 40vh; left: 35vw; width: 5px; height: 1.67px; animation-delay: 4.2s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 50vh; left: 12vw; width: 4px; height: 1.33px; animation-delay: 1.8s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 60vh; left: 65vw; width: 7px; height: 2.33px; animation-delay: 0.6s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 70vh; left: 45vw; width: 5px; height: 1.67px; animation-delay: 3.2s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 80vh; left: 8vw; width: 4px; height: 1.33px; animation-delay: 2.1s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 90vh; left: 55vw; width: 6px; height: 2px; animation-delay: 1.4s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 5vh; left: 80vw; width: 5px; height: 1.67px; animation-delay: 3.8s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 18vh; left: 42vw; width: 4px; height: 1.33px; animation-delay: 0.9s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 28vh; left: 22vw; width: 6px; height: 2px; animation-delay: 2.3s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 38vh; left: 68vw; width: 5px; height: 1.67px; animation-delay: 1.7s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 48vh; left: 38vw; width: 4px; height: 1.33px; animation-delay: 4.5s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 58vh; left: 18vw; width: 7px; height: 2.33px; animation-delay: 0.4s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 68vh; left: 72vw; width: 5px; height: 1.67px; animation-delay: 3.1s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 78vh; left: 28vw; width: 4px; height: 1.33px; animation-delay: 1.9s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 88vh; left: 62vw; width: 6px; height: 2px; animation-delay: 2.7s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 12vh; left: 48vw; width: 5px; height: 1.67px; animation-delay: 0.7s;"></div>
    <div class="ef-sleeping-moon-star-1" style="top: 22vh; left: 88vw; width: 4px; height: 1.33px; animation-delay: 3.9s;"></div>
    <!-- Star layer 2 (30 stars) -->
    <div class="ef-sleeping-moon-star-2" style="top: 8vh; left: 18vw; width: 2px; height: 2px; animation-delay: 1.1s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 22vh; left: 33vw; width: 1px; height: 1px; animation-delay: 2.4s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 32vh; left: 52vw; width: 3px; height: 3px; animation-delay: 0.5s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 42vh; left: 7vw; width: 2px; height: 2px; animation-delay: 3.3s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 52vh; left: 78vw; width: 1px; height: 1px; animation-delay: 1.6s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 62vh; left: 14vw; width: 2px; height: 2px; animation-delay: 4.1s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 72vh; left: 58vw; width: 3px; height: 3px; animation-delay: 0.8s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 82vh; left: 26vw; width: 1px; height: 1px; animation-delay: 2.9s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 92vh; left: 67vw; width: 2px; height: 2px; animation-delay: 1.3s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 13vh; left: 41vw; width: 1px; height: 1px; animation-delay: 3.7s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 27vh; left: 9vw; width: 2px; height: 2px; animation-delay: 0.2s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 37vh; left: 74vw; width: 3px; height: 3px; animation-delay: 2.6s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 47vh; left: 31vw; width: 1px; height: 1px; animation-delay: 1.9s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 57vh; left: 56vw; width: 2px; height: 2px; animation-delay: 4.3s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 67vh; left: 19vw; width: 1px; height: 1px; animation-delay: 0.6s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 77vh; left: 63vw; width: 3px; height: 3px; animation-delay: 3.1s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 87vh; left: 11vw; width: 2px; height: 2px; animation-delay: 1.4s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 3vh; left: 46vw; width: 1px; height: 1px; animation-delay: 2.8s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 17vh; left: 29vw; width: 2px; height: 2px; animation-delay: 0.9s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 33vh; left: 71vw; width: 1px; height: 1px; animation-delay: 3.5s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 43vh; left: 16vw; width: 3px; height: 3px; animation-delay: 1.2s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 53vh; left: 54vw; width: 2px; height: 2px; animation-delay: 4.6s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 63vh; left: 37vw; width: 1px; height: 1px; animation-delay: 0.4s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 73vh; left: 81vw; width: 2px; height: 2px; animation-delay: 2.2s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 83vh; left: 44vw; width: 3px; height: 3px; animation-delay: 1.7s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 93vh; left: 23vw; width: 1px; height: 1px; animation-delay: 3.8s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 6vh; left: 59vw; width: 2px; height: 2px; animation-delay: 0.3s;"></div>
    <div class="ef-sleeping-moon-star-2" style="top: 16vh; left: 87vw; width: 1px; height: 1px; animation-delay: 2.5s;"></div>
  </div>
  <div class="ef-sleeping-moon-container-bird">
    <!-- Bird 1 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
    <!-- Bird 2 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim" style="animation-delay: 3s; z-index: -1;">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
    <!-- Bird 3 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim" style="animation-delay: 5s;">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
    <!-- Bird 4 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim" style="animation-delay: 7s;">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
    <!-- Bird 5 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim" style="animation-delay: 14s;">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
    <!-- Bird 6 -->
    <div class="ef-sleeping-moon-bird ef-sleeping-moon-bird-anim" style="animation-delay: 10s; z-index: -1;">
      <div class="ef-sleeping-moon-bird-container">
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-left">
          <div class="ef-sleeping-moon-wing-left-top"></div>
        </div>
        <div class="ef-sleeping-moon-wing ef-sleeping-moon-wing-right">
          <div class="ef-sleeping-moon-wing-right-top"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="ef-sleeping-moon-container-title">
    <div class="ef-sleeping-moon-title">
      <span class="ef-sleeping-moon-number">{{code}}</span>
      <div class="ef-sleeping-moon-moon">
        <div class="ef-sleeping-moon-face">
          <div class="ef-sleeping-moon-mouth"></div>
          <div class="ef-sleeping-moon-eyes">
            <div class="ef-sleeping-moon-eye-left"></div>
            <div class="ef-sleeping-moon-eye-right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ef-sleeping-moon-subtitle">{{title}}</div>
    <div class="ef-sleeping-moon-description">{{description}}</div>
    <div class="ef-sleeping-moon-button-container">{{button}}</div>
  </div>
</div>`,
  css: `@import url('https://fonts.googleapis.com/css?family=Lato|Russo+One');

/* Sleeping Moon Error Template - Scoped Styles */
.ef-sleeping-moon-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: var(--ef-font-family, 'Lato', sans-serif);
  box-sizing: border-box;
}

.ef-sleeping-moon-wrapper *,
.ef-sleeping-moon-wrapper *:after,
.ef-sleeping-moon-wrapper *:before {
  box-sizing: border-box;
}

/* Stars Container */
.ef-sleeping-moon-container-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    #292256 0%,
    #8446cf 70%,
    #a871d6 100%
  );
}

.ef-sleeping-moon-container-star:after {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(15, 10, 38, 0.2) 100%
  );
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

/* Stars */
.ef-sleeping-moon-star-1 {
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  animation: ef-sleeping-moon-twinkle 5s infinite ease-in-out;
}

.ef-sleeping-moon-star-1:after {
  height: 100%;
  width: 100%;
  transform: rotate(90deg);
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
}

.ef-sleeping-moon-star-1:before {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  border-radius: 50%;
  content: "";
  top: -20%;
  left: -50%;
}

.ef-sleeping-moon-star-2 {
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  animation: ef-sleeping-moon-twinkle 5s infinite ease-in-out;
}

/* Birds Container */
.ef-sleeping-moon-container-bird {
  perspective: 2000px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}

/* Bird */
.ef-sleeping-moon-bird {
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 50%;
  height: 40px;
  width: 50px;
  transform: translate3d(-100vw, 0, 0) rotateY(90deg);
  transform-style: preserve-3d;
}

.ef-sleeping-moon-bird-container {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translate3d(50px, 30px, -300px);
}

.ef-sleeping-moon-wing {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  transform-style: preserve-3d;
  transform-origin: center bottom;
  z-index: 300;
}

.ef-sleeping-moon-wing-left {
  background: linear-gradient(to bottom, #a58dc4 0%, #7979a8 100%);
  transform: translate3d(0, 0, 0) rotateX(-30deg);
  animation: ef-sleeping-moon-wing-left 1.3s cubic-bezier(0.45, 0, 0.50, 0.95) infinite;
}

.ef-sleeping-moon-wing-right {
  background: linear-gradient(to bottom, #d9d3e2 0%, #b8a5d1 100%);
  transform: translate3d(0, 0, 0) rotateX(-30deg);
  animation: ef-sleeping-moon-wing-right 1.3s cubic-bezier(0.45, 0, 0.50, 0.95) infinite;
}

.ef-sleeping-moon-wing-right-top,
.ef-sleeping-moon-wing-left-top {
  border-right: 25px solid transparent;
  border-left: 25px solid transparent;
  top: -20px;
  width: 100%;
  position: absolute;
  transform-origin: 100% 100%;
}

.ef-sleeping-moon-wing-right-top {
  border-bottom: 20px solid #b8a5d1;
  transform: translate3d(0, 0, 0) rotateX(60deg);
  animation: ef-sleeping-moon-wing-right-top 1.3s cubic-bezier(0.45, 0, 0.50, 0.95) infinite;
}

.ef-sleeping-moon-wing-left-top {
  border-bottom: 20px solid #7979a8;
  transform: translate3d(0, 0, 0) rotateX(-60deg);
  animation: ef-sleeping-moon-wing-left-top 1.3s cubic-bezier(0.45, 0, 0.50, 0.95) infinite;
}

/* Bird Animations */
.ef-sleeping-moon-bird-anim:nth-child(1) {
  animation: ef-sleeping-moon-bird1 30s linear infinite forwards;
}

.ef-sleeping-moon-bird-anim:nth-child(2) {
  animation: ef-sleeping-moon-bird2 30s linear infinite forwards;
  animation-delay: 3s;
  z-index: -1;
}

.ef-sleeping-moon-bird-anim:nth-child(3) {
  animation: ef-sleeping-moon-bird3 30s linear infinite forwards;
  animation-delay: 5s;
}

.ef-sleeping-moon-bird-anim:nth-child(4) {
  animation: ef-sleeping-moon-bird4 30s linear infinite forwards;
  animation-delay: 7s;
}

.ef-sleeping-moon-bird-anim:nth-child(5) {
  animation: ef-sleeping-moon-bird5 30s linear infinite forwards;
  animation-delay: 14s;
}

.ef-sleeping-moon-bird-anim:nth-child(6) {
  animation: ef-sleeping-moon-bird6 30s linear infinite forwards;
  animation-delay: 10s;
  z-index: -1;
}

/* Title Container */
.ef-sleeping-moon-container-title {
  width: 600px;
  height: 450px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: white;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 1001;
  pointer-events: none;
}

.ef-sleeping-moon-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.ef-sleeping-moon-title > * {
  display: inline-block;
}

.ef-sleeping-moon-number {
  font-size: var(--ef-code-size, 200px);
  font-weight: var(--ef-code-weight, 700);
  text-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  padding: 0 0.2em;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0;
  white-space: nowrap;
  color: var(--ef-code-color, white);
}

.ef-sleeping-moon-subtitle {
  font-size: var(--ef-title-size, 25px);
  font-weight: var(--ef-title-weight, 400);
  margin-top: 1.5em;
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  color: var(--ef-title-color, white);
}

.ef-sleeping-moon-description {
  font-size: var(--ef-description-size, 18px);
  font-weight: var(--ef-description-weight, 400);
  margin-top: 1em;
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  color: var(--ef-description-color, white);
  line-height: 1.6;
  max-width: 500px;
}

.ef-sleeping-moon-description p {
  margin: 0.5em 0;
}

.ef-sleeping-moon-description p:first-child {
  margin-top: 0;
}

.ef-sleeping-moon-description p:last-child {
  margin-bottom: 0;
}

/* Moon */
.ef-sleeping-moon-moon {
  position: relative;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 70px #fff, 0 0 80px #fff, 0 0 100px #ff1177;
  animation: ef-sleeping-moon-rotate 5s ease-in-out infinite;
}

.ef-sleeping-moon-face {
  top: 60%;
  left: 47%;
  position: absolute;
}

.ef-sleeping-moon-mouth {
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  background-color: #5c3191;
  width: 25px;
  height: 25px;
  position: absolute;
  animation: ef-sleeping-moon-snore 5s ease-in-out infinite;
  transform: rotate(45deg);
  box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.3);
}

.ef-sleeping-moon-eyes {
  position: absolute;
  top: -30px;
  left: -30px;
}

.ef-sleeping-moon-eye-left,
.ef-sleeping-moon-eye-right {
  border: 4px solid #5c3191;
  width: 30px;
  height: 15px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top: 0;
  position: absolute;
}

.ef-sleeping-moon-eye-left:before,
.ef-sleeping-moon-eye-left:after,
.ef-sleeping-moon-eye-right:before,
.ef-sleeping-moon-eye-right:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background-color: #5c3191;
  top: -2px;
  left: -4px;
}

.ef-sleeping-moon-eye-left:after,
.ef-sleeping-moon-eye-right:after {
  left: auto;
  right: -4px;
}

.ef-sleeping-moon-eye-right {
  left: 50px;
}

/* Button Container */
.ef-sleeping-moon-button-container {
  margin-top: 1.5em;
  position: relative;
  z-index: 1002;
  pointer-events: auto;
}

.ef-sleeping-moon-button-container .flowscreen-error-button {
  font-size: var(--ef-button-size, 22px);
  font-weight: var(--ef-button-weight, 400);
  color: var(--ef-button-color, white);
  margin-top: 1.5em;
  padding: 0.5em 1em;
  letter-spacing: 1px;
  font-family: "Lato", sans-serif;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  z-index: 1002;
  pointer-events: auto;
  transform: scale(1);
  display: inline-block;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
}

.ef-sleeping-moon-button-container .flowscreen-error-button:hover,
.ef-sleeping-moon-button-container .flowscreen-error-button:focus-visible {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 17, 119, 0.3);
  outline: none;
}

.ef-sleeping-moon-button-container .flowscreen-error-button:focus {
  outline: 0;
}

.ef-sleeping-moon-button-container .flowscreen-error-button:active {
  transform: scale(1.02);
}

/* Keyframes */
@keyframes ef-sleeping-moon-rotate {
  0%, 100% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

@keyframes ef-sleeping-moon-snore {
  0%, 100% {
    transform: scale(1) rotate(30deg);
  }
  50% {
    transform: scale(0.5) rotate(30deg);
    border-bottom-left-radius: 50%;
  }
}

@keyframes ef-sleeping-moon-twinkle {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes ef-sleeping-moon-wing-left {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(-50deg);
  }
  50% {
    transform: translate3d(0, -20px, 0) rotateX(-130deg);
    background: linear-gradient(to bottom, #d9d3e2 0%, #b8a5d1 100%);
  }
}

@keyframes ef-sleeping-moon-wing-left-top {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(-10deg);
  }
  50% {
    transform: translate3d(0px, 0px, 0) rotateX(-40deg);
    border-bottom: 20px solid #b8a5d1;
  }
}

@keyframes ef-sleeping-moon-wing-right {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(50deg);
  }
  50% {
    transform: translate3d(0, -20px, 0) rotateX(130deg);
    background: linear-gradient(to bottom, #a58dc4 0%, #7979a8 100%);
  }
}

@keyframes ef-sleeping-moon-wing-right-top {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateX(10deg);
  }
  50% {
    transform: translate3d(0px, 0px, 0px) rotateX(40deg);
    border-bottom: 20px solid #7979a8;
  }
}

@keyframes ef-sleeping-moon-bird1 {
  0% {
    transform: translate3d(-120vw, -20px, -1000px) rotateY(-40deg) rotateX(0deg);
  }
  100% {
    transform: translate3d(100vw, -40vh, 1000px) rotateY(-40deg) rotateX(0deg);
  }
}

@keyframes ef-sleeping-moon-bird2 {
  0%, 15% {
    transform: translate3d(100vw, -300px, -1000px) rotateY(10deg) rotateX(0deg);
  }
  100% {
    transform: translate3d(-100vw, -20px, -1000px) rotateY(10deg) rotateX(0deg);
  }
}

@keyframes ef-sleeping-moon-bird3 {
  0% {
    transform: translate3d(100vw, -50vh, 100px) rotateY(-5deg) rotateX(-20deg);
  }
  100% {
    transform: translate3d(-100vw, -10vh, 100px) rotateY(-5deg) rotateX(-20deg);
  }
}

@keyframes ef-sleeping-moon-bird4 {
  0% {
    transform: translate3d(100vw, 30vh, 200px) rotateY(-5deg) rotateX(10deg);
  }
  100% {
    transform: translate3d(-100vw, -30vh, 200px) rotateY(-5deg) rotateX(10deg);
  }
}

@keyframes ef-sleeping-moon-bird5 {
  0%, 5% {
    transform: translate3d(100vw, 30vh, 400px) rotateY(-15deg) rotateX(-10deg);
  }
  100% {
    transform: translate3d(-100vw, 10vh, 400px) rotateY(-15deg) rotateX(-10deg);
  }
}

@keyframes ef-sleeping-moon-bird6 {
  0%, 10% {
    transform: translate3d(-100vw, 20vh, -500px) rotateY(15deg) rotateX(10deg);
  }
  100% {
    transform: translate3d(100vw, 40vh, -800px) rotateY(5deg) rotateX(10deg);
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .ef-sleeping-moon-star-1,
  .ef-sleeping-moon-star-2 {
    animation: none;
    opacity: 0.7;
  }
  
  .ef-sleeping-moon-moon {
    animation: none;
    transform: rotate(0deg);
  }
  
  .ef-sleeping-moon-mouth {
    animation: none;
    transform: scale(1) rotate(30deg);
  }
  
  .ef-sleeping-moon-bird-anim,
  .ef-sleeping-moon-wing-left,
  .ef-sleeping-moon-wing-right,
  .ef-sleeping-moon-wing-left-top,
  .ef-sleeping-moon-wing-right-top {
    animation: none;
  }
  
  .ef-sleeping-moon-bird {
    transform: translate3d(0, 0, 0) rotateY(0deg);
  }
  
  .ef-sleeping-moon-button-container .flowscreen-error-button {
    transition: none;
  }
  
  .ef-sleeping-moon-button-container .flowscreen-error-button:hover,
  .ef-sleeping-moon-button-container .flowscreen-error-button:focus-visible {
    transform: none;
  }
}

/* Responsive Design */
@media screen and (max-width: 580px) {
  .ef-sleeping-moon-container-title {
    width: 100%;
    padding: 0 1em;
  }
  
  .ef-sleeping-moon-number {
    font-size: 100px;
  }
  
  .ef-sleeping-moon-subtitle {
    font-size: 20px;
    padding: 0 1em;
  }
  
  .ef-sleeping-moon-moon {
    width: 100px;
    height: 100px;
  }
  
  .ef-sleeping-moon-face {
    transform: scale(0.7);
  }
  
  .ef-sleeping-moon-description {
    font-size: 16px;
  }
}`,
};
