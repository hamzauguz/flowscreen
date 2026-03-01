// Animated 404 error page template - inspired by CodePen animated 404 designs
// Features: animated 404 digits, interactive handle/lever, SVG elements, replay animation

import type { FlowScreenTemplate } from "../../types";

export const animated404Template: FlowScreenTemplate = {
  html: `<div class="ef-animated-404-wrapper flowscreen-error-container">
  <div class="ef-animated-404-container">
    <!-- SVG Background Elements -->
    <svg class="ef-animated-404-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ef-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="ef-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f093fb;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#4facfe;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <circle class="ef-svg-circle-1" cx="200" cy="150" r="80" fill="url(#ef-gradient-2)" />
      <circle class="ef-svg-circle-2" cx="1000" cy="650" r="120" fill="url(#ef-gradient-2)" />
      <ellipse class="ef-svg-ellipse-1" cx="600" cy="400" rx="200" ry="150" fill="url(#ef-gradient-2)" />
    </svg>
    
    <!-- Main Content -->
    <div class="ef-animated-404-content">
      <!-- 404 Number Display -->
      <div class="ef-animated-404-numbers" id="ef-animated-404-numbers">
        <span class="ef-number ef-number-4 ef-number-4-1">4</span>
        <span class="ef-number ef-number-0">0</span>
        <span class="ef-number ef-number-4 ef-number-4-2">4</span>
      </div>
      
      <!-- Title and Description -->
      <h2 class="ef-animated-404-title">{{title}}</h2>
      <div class="ef-animated-404-description">{{description}}</div>
      
      <!-- Interactive Handle/Lever -->
      <div class="ef-animated-404-handle-container">
        <div class="ef-animated-404-handle" id="ef-animated-404-handle" role="button" tabindex="0" aria-label="Replay animation">
          <div class="ef-handle-base"></div>
          <div class="ef-handle-lever"></div>
          <div class="ef-handle-grip"></div>
        </div>
        <span class="ef-handle-label">Pull to replay</span>
      </div>
      
      <!-- Button Container -->
      <div class="ef-animated-404-button-container">{{button}}</div>
    </div>
  </div>
</div>`,
  css: `/* Animated 404 Template - Scoped Styles */
.ef-animated-404-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  background: var(--ef-background, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  color: #fff;
}

.ef-animated-404-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* SVG Background */
.ef-animated-404-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
}

.ef-svg-circle-1 {
  animation: ef-svg-float-1 8s ease-in-out infinite;
  transform-origin: center;
}

.ef-svg-circle-2 {
  animation: ef-svg-float-2 10s ease-in-out infinite;
  transform-origin: center;
}

.ef-svg-ellipse-1 {
  animation: ef-svg-float-3 12s ease-in-out infinite;
  transform-origin: center;
}

@keyframes ef-svg-float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(30px, -20px) scale(1.1);
    opacity: 0.5;
  }
}

@keyframes ef-svg-float-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-40px, 30px) scale(1.15);
    opacity: 0.5;
  }
}

@keyframes ef-svg-float-3 {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(20px, 20px) scale(1.05) rotate(5deg);
    opacity: 0.4;
  }
}

/* Main Content */
.ef-animated-404-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
}

/* 404 Number Display */
.ef-animated-404-numbers {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  perspective: 1000px;
}

.ef-number {
  display: inline-block;
  font-size: var(--ef-code-size, 8rem);
  font-weight: var(--ef-code-weight, 900);
  color: var(--ef-code-color, #fff);
  line-height: 1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  opacity: 0;
  transform: translateY(-50px) rotateX(-90deg);
}

.ef-number-4-1 {
  animation: ef-number-appear-1 0.8s ease-out forwards;
}

.ef-number-0 {
  animation: ef-number-appear-2 0.8s ease-out 0.2s forwards;
}

.ef-number-4-2 {
  animation: ef-number-appear-3 0.8s ease-out 0.4s forwards;
}

@keyframes ef-number-appear-1 {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg) scale(0.5);
  }
  60% {
    transform: translateY(10px) rotateX(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
}

@keyframes ef-number-appear-2 {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg) scale(0.5);
  }
  60% {
    transform: translateY(10px) rotateX(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
}

@keyframes ef-number-appear-3 {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg) scale(0.5);
  }
  60% {
    transform: translateY(10px) rotateX(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
}

/* Bounce animation for replay */
.ef-number.ef-animate-bounce {
  animation: ef-number-bounce 0.6s ease-out;
}

@keyframes ef-number-bounce {
  0%, 100% {
    transform: translateY(0) rotateX(0deg) scale(1);
  }
  25% {
    transform: translateY(-20px) rotateX(10deg) scale(1.05);
  }
  50% {
    transform: translateY(0) rotateX(0deg) scale(1);
  }
  75% {
    transform: translateY(-10px) rotateX(5deg) scale(1.02);
  }
}

/* Title */
.ef-animated-404-title {
  font-size: var(--ef-title-size, 2rem);
  font-weight: var(--ef-title-weight, 600);
  color: var(--ef-title-color, #fff);
  margin: 0 0 1.5rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: ef-fade-in-up 0.6s ease-out 0.8s forwards;
}

@keyframes ef-fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Description */
.ef-animated-404-description {
  font-size: var(--ef-description-size, 1.125rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, rgba(255, 255, 255, 0.9));
  line-height: 1.6;
  margin: 0 0 2rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: ef-fade-in-up 0.6s ease-out 1s forwards;
}

.ef-animated-404-description p {
  margin: 0.5rem 0;
}

.ef-animated-404-description p:first-child {
  margin-top: 0;
}

.ef-animated-404-description p:last-child {
  margin-bottom: 0;
}

/* Handle/Lever Container */
.ef-animated-404-handle-container {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 0;
  animation: ef-fade-in-up 0.6s ease-out 1.2s forwards;
}

.ef-handle-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

/* Interactive Handle/Lever */
.ef-animated-404-handle {
  position: relative;
  width: 80px;
  height: 120px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-out;
}

.ef-animated-404-handle:hover {
  transform: scale(1.05);
}

.ef-animated-404-handle:active {
  transform: scale(0.95);
}

.ef-handle-base {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.ef-handle-lever {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 80px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transform-origin: bottom center;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.ef-animated-404-handle.ef-handle-pulled .ef-handle-lever {
  transform: translateX(-50%) rotate(-25deg);
}

.ef-handle-grip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.ef-animated-404-handle.ef-handle-pulled .ef-handle-grip {
  transform: translateX(-50%) translateY(5px);
}

.ef-animated-404-handle.ef-handle-pulling .ef-handle-lever {
  transform: translateX(-50%) rotate(-30deg);
}

.ef-animated-404-handle.ef-handle-pulling .ef-handle-grip {
  transform: translateX(-50%) translateY(8px);
}

/* Button Container */
.ef-animated-404-button-container {
  margin-top: 2rem;
  opacity: 0;
  animation: ef-fade-in-up 0.6s ease-out 1.4s forwards;
}

.ef-animated-404-button-container .flowscreen-error-button {
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

.ef-animated-404-button-container .flowscreen-error-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.ef-animated-404-button-container .flowscreen-error-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .ef-number {
    font-size: 5rem;
  }
  
  .ef-animated-404-title {
    font-size: 1.5rem;
  }
  
  .ef-animated-404-description {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .ef-animated-404-handle {
    width: 60px;
    height: 100px;
  }
  
  .ef-handle-lever {
    height: 65px;
  }
  
  .ef-handle-grip {
    width: 35px;
    height: 35px;
  }
}

@media (max-height: 600px) {
  .ef-number {
    font-size: 4rem;
  }
  
  .ef-animated-404-title {
    font-size: 1.25rem;
  }
  
  .ef-animated-404-description {
    font-size: 0.9375rem;
  }
  
  .ef-animated-404-handle-container {
    margin: 1rem 0;
  }
}`,
};
