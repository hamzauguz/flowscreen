// Parallax error page template - inspired by Daily UI #008
// Features: parallax layers, animated shapes, depth effects

import type { FlowScreenTemplate } from "../../types";

export const parallaxTemplate: FlowScreenTemplate = {
  html: `<div class="ef-parallax-wrapper flowscreen-error-container">
  <div class="ef-parallax-container">
    <div class="ef-parallax-scene" id="ef-parallax-scene">
      <!-- Parallax layers -->
      <div class="ef-parallax-layer ef-layer-circle" data-depth="1.2"></div>
      <div class="ef-parallax-layer ef-layer-one" data-depth="0.9">
        <div class="ef-layer-content">
          <div class="ef-piece ef-piece-1"></div>
          <div class="ef-piece ef-piece-2"></div>
          <div class="ef-piece ef-piece-3"></div>
        </div>
      </div>
      <div class="ef-parallax-layer ef-layer-two" data-depth="0.60">
        <div class="ef-layer-content">
          <div class="ef-piece ef-piece-1"></div>
          <div class="ef-piece ef-piece-2"></div>
          <div class="ef-piece ef-piece-3"></div>
        </div>
      </div>
      <div class="ef-parallax-layer ef-layer-three" data-depth="0.40">
        <div class="ef-layer-content">
          <div class="ef-piece ef-piece-1"></div>
          <div class="ef-piece ef-piece-2"></div>
          <div class="ef-piece ef-piece-3"></div>
        </div>
      </div>
      <!-- Code text layers -->
      <div class="ef-parallax-layer ef-layer-code-back" data-depth="0.50">
        <p class="ef-code-back">{{code}}</p>
      </div>
      <div class="ef-parallax-layer ef-layer-code-front" data-depth="0.10">
        <p class="ef-code-front">{{code}}</p>
      </div>
    </div>
    <!-- Text content overlay -->
    <div class="ef-parallax-text">
      <h1 class="ef-code">{{code}}</h1>
      <h2 class="ef-title">{{title}}</h2>
      <div class="ef-description">{{description}}</div>
      <div class="ef-button-container">{{button}}</div>
    </div>
  </div>
</div>`,
  css: `/* Parallax Error Template - Scoped Styles */
.ef-parallax-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  flex: 1;
  min-height: max(360px, 100%);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.ef-parallax-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Parallax Scene */
.ef-parallax-scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  overflow: hidden;
}

.ef-parallax-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
  transition: transform 0.1s ease-out;
}

/* Circle Layer */
.ef-layer-circle {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 100px rgba(255, 255, 255, 0.2);
  animation: ef-circle-pulse 4s ease-in-out infinite;
}

@keyframes ef-circle-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
}

/* Shape Layers */
.ef-layer-content {
  position: relative;
  width: 400px;
  height: 400px;
}

.ef-piece {
  position: absolute;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.ef-layer-one .ef-piece-1 {
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  animation: ef-piece-left 6s ease-in-out infinite;
}

.ef-layer-one .ef-piece-2 {
  width: 80px;
  height: 80px;
  top: 150px;
  right: 0;
  animation: ef-piece-right 8s ease-in-out infinite;
}

.ef-layer-one .ef-piece-3 {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  animation: ef-piece-left 7s ease-in-out infinite;
}

.ef-layer-two .ef-piece-1 {
  width: 100px;
  height: 100px;
  top: 50px;
  right: 50px;
  animation: ef-piece-right 9s ease-in-out infinite;
}

.ef-layer-two .ef-piece-2 {
  width: 140px;
  height: 140px;
  bottom: 80px;
  left: 0;
  animation: ef-piece-left 10s ease-in-out infinite;
}

.ef-layer-two .ef-piece-3 {
  width: 90px;
  height: 90px;
  top: 200px;
  left: 100px;
  animation: ef-piece-right 11s ease-in-out infinite;
}

.ef-layer-three .ef-piece-1 {
  width: 110px;
  height: 110px;
  top: 100px;
  left: 150px;
  animation: ef-piece-left 12s ease-in-out infinite;
}

.ef-layer-three .ef-piece-2 {
  width: 70px;
  height: 70px;
  bottom: 100px;
  right: 100px;
  animation: ef-piece-right 13s ease-in-out infinite;
}

.ef-layer-three .ef-piece-3 {
  width: 130px;
  height: 130px;
  top: 0;
  right: 0;
  animation: ef-piece-left 14s ease-in-out infinite;
}

@keyframes ef-piece-left {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(-30px) translateY(-20px) rotate(-10deg);
  }
}

@keyframes ef-piece-right {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(30px) translateY(20px) rotate(10deg);
  }
}

/* Code Text Layers */
.ef-layer-code-back,
.ef-layer-code-front {
  pointer-events: none;
}

.ef-code-back {
  font-size: 20rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.1);
  margin: 0;
  line-height: 1;
  filter: blur(20px);
  text-shadow: 0 0 50px rgba(255, 255, 255, 0.3);
  white-space: nowrap;
}

.ef-code-front {
  font-size: 20rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.2);
  margin: 0;
  line-height: 1;
  filter: blur(5px);
  white-space: nowrap;
}

/* Text Content Overlay */
.ef-parallax-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: #fff;
  pointer-events: none;
}

.ef-parallax-text > * {
  pointer-events: auto;
}

/* Typography with CSS Variables */
.ef-code {
  font-size: var(--ef-code-size, 6rem);
  font-weight: var(--ef-code-weight, 900);
  color: var(--ef-code-color, #fff);
  margin: 0 0 1rem 0;
  line-height: 1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.ef-title {
  font-size: var(--ef-title-size, 2rem);
  font-weight: var(--ef-title-weight, 600);
  color: var(--ef-title-color, #fff);
  margin: 0 0 1.5rem 0;
  opacity: 0.95;
}

.ef-description {
  font-size: var(--ef-description-size, 1.125rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, rgba(255, 255, 255, 0.9));
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 500px;
}

.ef-description p {
  margin: 0.5rem 0;
}

.ef-description p:first-child {
  margin-top: 0;
}

.ef-description p:last-child {
  margin-bottom: 0;
}

/* Button Container */
.ef-button-container {
  margin-top: 2rem;
}

.ef-button-container .flowscreen-error-button {
  font-size: var(--ef-button-size, 1rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, #fff);
  background: var(--ef-button-background, rgba(255, 255, 255, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--ef-button-radius, 50px);
  padding: 0.875rem 2rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.ef-button-container .flowscreen-error-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.ef-button-container .flowscreen-error-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .ef-code-back,
  .ef-code-front {
    font-size: 12rem;
  }
  
  .ef-code {
    font-size: 4rem;
  }
  
  .ef-title {
    font-size: 1.5rem;
  }
  
  .ef-description {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .ef-layer-circle {
    width: 400px;
    height: 400px;
  }
  
  .ef-layer-content {
    width: 300px;
    height: 300px;
  }
}

@media (max-height: 600px) {
  .ef-code-back,
  .ef-code-front {
    font-size: 10rem;
  }
  
  .ef-code {
    font-size: 3rem;
  }
  
  .ef-title {
    font-size: 1.25rem;
  }
  
  .ef-description {
    font-size: 0.9375rem;
  }
}`,
};
