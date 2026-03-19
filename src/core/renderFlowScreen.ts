// Render flow screen - framework-agnostic. Templates from registry; unknown id falls back to "basic".

import type { TemplateType } from "./registry";
import { getTemplateSafe } from "./registry";
import type { FlowScreenTemplate } from "../templates/types";
import type { FlowScreenSchema } from "../schema";
import type { FlowScreenTheme } from "../types";

export interface RenderFlowScreenOptions {
  /** Template ID (e.g. "basic", "error-minimal"). Unknown ids fall back to "basic". */
  template: TemplateType | string;
  schema: FlowScreenSchema;
  container?: HTMLElement | string;
  theme?: FlowScreenTheme;
  /** Pre-resolved template (e.g. from React component). When set, registry is not used. */
  templateOverride?: FlowScreenTemplate;
}

export function renderFlowScreen(options: RenderFlowScreenOptions): void {
  if (typeof document === "undefined") {
    throw new Error(
      "renderFlowScreen can only be used in a browser environment"
    );
  }

  const { template, schema, container, theme, templateOverride } = options;

  if (!schema || schema.type !== "error" || !Array.isArray(schema.blocks)) {
    throw new Error("Invalid schema: expected FlowScreenSchema with blocks array");
  }

  const templateData = templateOverride ?? getTemplateSafe(String(template));
  const targetContainer =
    typeof container === "string"
      ? document.querySelector(container)
      : container || document.body;

  if (!targetContainer) {
    throw new Error(`Container element not found`);
  }

  // Inject CSS
  const styleId = `flowscreen-${template}-style`;
  const existingStyle = document.getElementById(styleId) as HTMLStyleElement | null;
  if (existingStyle) {
    if (existingStyle.textContent !== templateData.css) {
      existingStyle.textContent = templateData.css;
    }
  } else {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = templateData.css;
    document.head.appendChild(style);
  }

  // Inject theme CSS if provided (container-level only)
  let themeCss = "";
  if (theme) {
    const themeStyleId = `flowscreen-${template}-theme-${Date.now()}`;
    const themeStyle = document.createElement("style");
    themeStyle.id = themeStyleId;

    if (theme.fontFamily) {
      themeCss += `.flowscreen-container { font-family: ${theme.fontFamily} !important; }\n`;
    }

    if (theme.background) {
      if (template === "error-parallax") {
        themeCss += `.ef-parallax-wrapper { background: ${theme.background} !important; }\n`;
      } else if (template === "error-animated") {
        themeCss += `.ef-animated-404-wrapper { background: ${theme.background} !important; }\n`;
      } else if (template === "error-sad-bear") {
        themeCss += `.ef-sad-bear-wrapper { background: ${theme.background} !important; }\n`;
      } else if (template === "error-character-illustration") {
        themeCss += `.ef-character-illustration-wrapper { background: ${theme.background} !important; }\n`;
      } else if (template === "error-sleeping-moon") {
        themeCss += `.ef-sleeping-moon-container-star { background: ${theme.background} !important; }\n`;
      } else if (template === "error-amazon") {
        themeCss += `.ef-amazon { background: ${theme.background} !important; }\n`;
      } else if (template === "error-mailchimp") {
        themeCss += `.ef-mailchimp { background: ${theme.background} !important; }\n`;
      } else if (template === "error-mailchimp-pro") {
        themeCss += `.ef-mailchimp-pro { background: ${theme.background} !important; }\n`;
      } else if (template === "empty-basic") {
        themeCss += `.ef-empty-basic { background: ${theme.background} !important; }\n`;
      } else if (template === "empty-no-results") {
        themeCss += `.ef-empty-no-results { background: ${theme.background} !important; }\n`;
      } else if (template === "empty-inside-out") {
        themeCss += `.ef-empty-inside-out { background: ${theme.background} !important; }\n`;
      } else if (template === "empty-not-found-666") {
        themeCss += `.ef-empty-not-found-666 { background: ${theme.background} !important; }\n`;
      } else if (template === "maintenance-basic") {
        themeCss += `.ef-maintenance-basic { background: ${theme.background} !important; }\n`;
      } else if (template === "maintenance-under-construction") {
        themeCss += `.ef-maintenance-under-construction { background: ${theme.background} !important; }\n`;
      } else if (template === "maintenance-offline") {
        themeCss += `.ef-maintenance-offline { background: ${theme.background} !important; }\n`;
      } else if (template === "maintenance-electric-pro") {
        themeCss += `.ef-maintenance-electric-pro { background: ${theme.background} !important; }\n`;
      } else if (template === "maintenance-playful-road") {
        themeCss += `.ef-maintenance-playful-road { background: ${theme.background} !important; }\n`;
      } else {
        themeCss += `.flowscreen-container { background-color: ${theme.background} !important; }\n`;
      }
    }

    if (themeCss) {
      themeStyle.textContent = themeCss;
      document.head.appendChild(themeStyle);
    }
  }

  // Extract blocks for placeholder replacement
  const textBlocks = schema.blocks.filter((block) => block.type === "text");
  const code = textBlocks[0]?.content || "";
  const title = textBlocks[1]?.content || "";
  const description = textBlocks[2]?.content || "";
  const hint = textBlocks[3]?.content || "";

  // Build description HTML (description + hint)
  const descriptionParts: string[] = [];
  if (description) {
    descriptionParts.push(`<p>${escapeHtml(description)}</p>`);
  }
  if (hint) {
    descriptionParts.push(`<p>${escapeHtml(hint)}</p>`);
  }
  const descriptionHtml = descriptionParts.join("");

  // Replace placeholders in template HTML
  let html = templateData.html;

  html = html.replace(/\{\{code\}\}/g, escapeHtml(code));
  html = html.replace(/\{\{title\}\}/g, escapeHtml(title));

  const timestamp =
    new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
  html = html.replace(/\{\{timestamp\}\}/g, escapeHtml(timestamp));

  const rayId = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
  html = html.replace(/\{\{rayId\}\}/g, rayId);

  html = html.replace(/\{\{description\}\}/g, descriptionHtml);

  // For templates that use flowscreen-error-message div
  if (html.includes('class="flowscreen-error-message"')) {
    const errorMessages =
      template === "error-cloudflare"
        ? description
          ? `<p>${escapeHtml(description)}</p>`
          : ""
        : textBlocks
            .slice(1)
            .map((block) => `<p>${escapeHtml(block.content)}</p>`)
            .join("");
    html = html.replace(
      /<div\s+class="flowscreen-error-message"\s*><\/div>/g,
      `<div class="flowscreen-error-message">${errorMessages}</div>`
    );
  }

  html = html.replace(/\{\{hint\}\}/g, escapeHtml(hint));

  targetContainer.innerHTML = html;

  // Inject parallax JavaScript for parallax template
  if (template === "error-parallax") {
    const scriptId = `flowscreen-${template}-script`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.textContent = `
      (function() {
        const wrapper = document.querySelector('.ef-parallax-wrapper');
        const scene = document.getElementById('ef-parallax-scene');
        if (!wrapper || !scene) return;

        const layers = scene.querySelectorAll('.ef-parallax-layer[data-depth]');

        function syncWrapperHeight() {
          const parent = wrapper.parentElement;
          const parentRect = parent ? parent.getBoundingClientRect() : null;
          const parentH = parentRect ? parentRect.height : 0;

          // If parent has a measurable height, fill it. Otherwise, fill the remaining viewport height
          // (useful for layouts with a top bar above the embedded content).
          let targetH = parentH;
          if (!targetH || targetH < 1) {
            const top = wrapper.getBoundingClientRect().top;
            targetH = Math.max(1, window.innerHeight - top);
          }

          wrapper.style.height = targetH + 'px';
          wrapper.style.minHeight = targetH + 'px';
        }

        syncWrapperHeight();

        let ro;
        if (typeof ResizeObserver !== 'undefined') {
          ro = new ResizeObserver(syncWrapperHeight);
          ro.observe(wrapper);
          if (wrapper.parentElement) ro.observe(wrapper.parentElement);
        } else {
          window.addEventListener('resize', syncWrapperHeight);
        }

        function updateParallax(e) {
          const rect = scene.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const mouseX = (e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || centerX) - centerX;
          const mouseY = (e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || centerY) - centerY;

          layers.forEach(function(layer) {
            const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
            const moveX = (mouseX * depth) / 10;
            const moveY = (mouseY * depth) / 10;
            layer.style.transform = 'translate(calc(-50% + ' + moveX + 'px), calc(-50% + ' + moveY + 'px))';
          });
        }

        scene.addEventListener('mousemove', updateParallax);
        scene.addEventListener('touchmove', updateParallax);

        scene.addEventListener('mouseleave', function() {
          layers.forEach(function(layer) {
            layer.style.transform = 'translate(-50%, -50%)';
          });
        });
      })();
    `;
    document.head.appendChild(script);
  }

  if (template === "error-animated") {
    const scriptId = `flowscreen-${template}-script`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.textContent = `
      (function() {
        const container = document.querySelector('.ef-animated-404-wrapper');
        if (!container) return;

        function syncWrapperHeight() {
          const parent = container.parentElement;
          const parentRect = parent ? parent.getBoundingClientRect() : null;
          const parentH = parentRect ? parentRect.height : 0;

          let targetH = parentH;
          if (!targetH || targetH < 1) {
            const top = container.getBoundingClientRect().top;
            targetH = Math.max(1, window.innerHeight - top);
          }

          container.style.height = targetH + 'px';
          container.style.minHeight = targetH + 'px';
        }

        syncWrapperHeight();
        if (typeof ResizeObserver !== 'undefined') {
          const ro = new ResizeObserver(syncWrapperHeight);
          ro.observe(container);
          if (container.parentElement) ro.observe(container.parentElement);
        } else {
          window.addEventListener('resize', syncWrapperHeight);
        }
        
        const numbersContainer = container.querySelector('#ef-animated-404-numbers');
        if (numbersContainer) {
          const codeText = '${code}' || '404';
          const codeDigits = codeText.toString().split('').slice(0, 3);
          
          const numberElements = numbersContainer.querySelectorAll('.ef-number');
          numberElements.forEach(function(el, index) {
            if (codeDigits[index]) {
              el.textContent = codeDigits[index];
            }
          });
        }
        
        const handle = container.querySelector('#ef-animated-404-handle');
        const numbers = container.querySelectorAll('.ef-number');
        
        if (!handle || !numbers.length) return;
        
        let isPulling = false;
        let hasPulled = false;
        
        function replayAnimation() {
          numbers.forEach(function(num) {
            num.classList.remove('ef-animate-bounce');
            num.style.animation = 'none';
          });
          
          void numbersContainer.offsetWidth;
          
          numbers[0].style.animation = 'ef-number-appear-1 0.8s ease-out forwards';
          numbers[1].style.animation = 'ef-number-appear-2 0.8s ease-out 0.2s forwards';
          numbers[2].style.animation = 'ef-number-appear-3 0.8s ease-out 0.4s forwards';
        }
        
        function triggerBounce() {
          numbers.forEach(function(num) {
            num.classList.add('ef-animate-bounce');
          });
          
          setTimeout(function() {
            numbers.forEach(function(num) {
              num.classList.remove('ef-animate-bounce');
            });
          }, 600);
        }
        
        handle.addEventListener('mousedown', function(e) {
          e.preventDefault();
          isPulling = true;
          handle.classList.add('ef-handle-pulling');
        });
        
        document.addEventListener('mouseup', function() {
          if (isPulling) {
            isPulling = false;
            handle.classList.remove('ef-handle-pulling');
            
            if (!hasPulled) {
              handle.classList.add('ef-handle-pulled');
              hasPulled = true;
            }
            
            triggerBounce();
            replayAnimation();
          }
        });
        
        handle.addEventListener('touchstart', function(e) {
          e.preventDefault();
          isPulling = true;
          handle.classList.add('ef-handle-pulling');
        });
        
        document.addEventListener('touchend', function() {
          if (isPulling) {
            isPulling = false;
            handle.classList.remove('ef-handle-pulling');
            
            if (!hasPulled) {
              handle.classList.add('ef-handle-pulled');
              hasPulled = true;
            }
            
            triggerBounce();
            replayAnimation();
          }
        });
        
        handle.addEventListener('click', function(e) {
          e.preventDefault();
          if (!hasPulled) {
            handle.classList.add('ef-handle-pulled');
            hasPulled = true;
          }
          triggerBounce();
          replayAnimation();
        });
        
        handle.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!hasPulled) {
              handle.classList.add('ef-handle-pulled');
              hasPulled = true;
            }
            triggerBounce();
            replayAnimation();
          }
        });
      })();
    `;
    document.head.appendChild(script);
  }

  if (template === "error-sad-bear") {
    const scriptId = `flowscreen-${template}-script`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    const escapedCode = JSON.stringify(code || "");
    const escapedTitle = JSON.stringify(title || "Not found");
    const glitchChars = [
      "`", "¡", "™", "£", "¢", "∞", "§", "¶", "•", "ª", "º", "–", "≠", "å", "ß", "∂", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "≈", "ç", "√", "∫", "˜", "µ", "≤", "≥", "÷", "/", "?", "░", "▒", "▓", "<", ">", "/",
    ].join("");

    script.textContent =
      "(function() {" +
      "  const container = document.querySelector('.ef-sad-bear-wrapper');" +
      "  if (!container) return;" +
      "  function syncWrapperHeight() {" +
      "    const parent = container.parentElement;" +
      "    const parentRect = parent ? parent.getBoundingClientRect() : null;" +
      "    const parentH = parentRect ? parentRect.height : 0;" +
      "    let targetH = parentH;" +
      "    if (!targetH || targetH < 1) {" +
      "      const top = container.getBoundingClientRect().top;" +
      "      targetH = Math.max(1, window.innerHeight - top);" +
      "    }" +
      "    container.style.height = targetH + 'px';" +
      "    container.style.minHeight = targetH + 'px';" +
      "  }" +
      "  syncWrapperHeight();" +
      "  if (typeof ResizeObserver !== 'undefined') {" +
      "    const ro = new ResizeObserver(syncWrapperHeight);" +
      "    ro.observe(container);" +
      "    if (container.parentElement) ro.observe(container.parentElement);" +
      "  } else {" +
      "    window.addEventListener('resize', syncWrapperHeight);" +
      "  }" +
      "  const codeElement = container.querySelector('#ef-sad-bear-code');" +
      "  const codeMessageElement = container.querySelector('#ef-sad-bear-code-message');" +
      "  const GLITCH_CHARS = " +
      JSON.stringify(glitchChars) +
      ".split('');" +
      "  function createGlitchyText(element, text) {" +
      "    if (!element || !text) return;" +
      "    const readableSpan = document.createElement('span');" +
      "    readableSpan.className = 'ef-sad-bear-glitchy-text__char--readable';" +
      "    readableSpan.textContent = text;" +
      "    element.appendChild(readableSpan);" +
      "    text.split('').forEach(function(char, idx) {" +
      "      const charSpan = document.createElement('span');" +
      "      charSpan.className = 'ef-sad-bear-glitchy-text__char';" +
      "      charSpan.setAttribute('aria-hidden', 'true');" +
      "      charSpan.setAttribute('data-char', char);" +
      "      charSpan.textContent = char;" +
      "      const count = Math.random() * 5 + 1;" +
      "      charSpan.style.setProperty('--ef-sad-bear-count', count);" +
      "      for (let i = 0; i < 10; i++) {" +
      "        const randomChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];" +
      "        charSpan.style.setProperty('--ef-sad-bear-char-' + i, '\"' + randomChar + '\"');" +
      "      }" +
      "      element.appendChild(charSpan);" +
      "    });" +
      "  }" +
      "  const codeText = " +
      escapedCode +
      ";" +
      "  const titleText = " +
      escapedTitle +
      ";" +
      "  if (codeElement) { createGlitchyText(codeElement, codeText); }" +
      "  if (codeMessageElement && titleText) { createGlitchyText(codeMessageElement, titleText); }" +
      "  function updatePosition(e) {" +
      "    if (e.acceleration && e.acceleration.x !== null) {" +
      "      container.style.setProperty('--ef-sad-bear-X', e.acceleration.x);" +
      "      container.style.setProperty('--ef-sad-bear-Y', e.acceleration.y);" +
      "    } else {" +
      "      const x = (e.pageX || e.clientX || 0) / window.innerWidth - 0.5;" +
      "      const y = (e.pageY || e.clientY || 0) / window.innerHeight - 0.5;" +
      "      container.style.setProperty('--ef-sad-bear-X', x);" +
      "      container.style.setProperty('--ef-sad-bear-Y', y);" +
      "    }" +
      "  }" +
      "  container.addEventListener('mousemove', updatePosition);" +
      "  if (window.DeviceMotionEvent) { window.ondevicemotion = updatePosition; }" +
      "})();";
    document.head.appendChild(script);
  }

  if (template === "error-character-illustration") {
    const scriptId = `flowscreen-${template}-script`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    const escapedCode = JSON.stringify(code || "404");

    script.textContent =
      "(function() {" +
      "  const container = document.querySelector('.ef-character-illustration-wrapper');" +
      "  if (!container) return;" +
      "  function syncWrapperHeight() {" +
      "    const parent = container.parentElement;" +
      "    const parentRect = parent ? parent.getBoundingClientRect() : null;" +
      "    const parentH = parentRect ? parentRect.height : 0;" +
      "    let targetH = parentH;" +
      "    if (!targetH || targetH < 1) {" +
      "      const top = container.getBoundingClientRect().top;" +
      "      targetH = Math.max(1, window.innerHeight - top);" +
      "    }" +
      "    container.style.height = targetH + 'px';" +
      "    container.style.minHeight = targetH + 'px';" +
      "  }" +
      "  syncWrapperHeight();" +
      "  if (typeof ResizeObserver !== 'undefined') {" +
      "    const ro = new ResizeObserver(syncWrapperHeight);" +
      "    ro.observe(container);" +
      "    if (container.parentElement) ro.observe(container.parentElement);" +
      "  } else {" +
      "    window.addEventListener('resize', syncWrapperHeight);" +
      "  }" +
      "  const codeText = " +
      escapedCode +
      ";" +
      "  const codeDigits = codeText.toString().split('').slice(0, 3);" +
      "  const fourElement = container.querySelector('#ef-character-illustration-four-1');" +
      "  const zeroElement = container.querySelector('#ef-character-illustration-zero');" +
      "  const fourElement2 = container.querySelector('#ef-character-illustration-four-2');" +
      "  if (fourElement && codeDigits[0]) { fourElement.textContent = codeDigits[0]; }" +
      "  if (zeroElement && codeDigits[1]) { zeroElement.textContent = codeDigits[1]; }" +
      "  if (fourElement2 && codeDigits[2]) { fourElement2.textContent = codeDigits[2]; }" +
      "})();";
    document.head.appendChild(script);
  }

  if (template === "error-sleeping-moon") {
    const scriptId = `flowscreen-${template}-script`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.textContent = `
      (function() {
        const container = document.querySelector('.ef-sleeping-moon-wrapper');
        if (!container) return;

        function syncWrapperHeight() {
          const parent = container.parentElement;
          const parentRect = parent ? parent.getBoundingClientRect() : null;
          const parentH = parentRect ? parentRect.height : 0;
          let targetH = parentH;
          if (!targetH || targetH < 1) {
            const top = container.getBoundingClientRect().top;
            targetH = Math.max(1, window.innerHeight - top);
          }
          container.style.height = targetH + 'px';
          container.style.minHeight = targetH + 'px';
        }

        syncWrapperHeight();
        if (typeof ResizeObserver !== 'undefined') {
          const ro = new ResizeObserver(syncWrapperHeight);
          ro.observe(container);
          if (container.parentElement) ro.observe(container.parentElement);
        } else {
          window.addEventListener('resize', syncWrapperHeight);
        }
      })();
    `;
    document.head.appendChild(script);
  }
}

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
