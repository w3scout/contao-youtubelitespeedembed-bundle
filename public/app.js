/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/app.scss":
/*!*************************!*\
  !*** ./assets/app.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js":
/*!******************************************************************!*\
  !*** ./node_modules/@justinribeiro/lite-youtube/lite-youtube.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiteYTEmbed: () => (/* binding */ LiteYTEmbed)
/* harmony export */ });
class LiteYTEmbed extends HTMLElement {
    constructor() {
        super();
        this.isIframeLoaded = false;
        this.setupDom();
    }
    static get observedAttributes() {
        return ['videoid', 'playlistid', 'videoplay', 'videotitle'];
    }
    connectedCallback() {
        this.addEventListener('pointerover', () => LiteYTEmbed.warmConnections(this), {
            once: true,
        });
        this.addEventListener('click', () => this.addIframe());
    }
    get videoId() {
        return encodeURIComponent(this.getAttribute('videoid') || '');
    }
    set videoId(id) {
        this.setAttribute('videoid', id);
    }
    get playlistId() {
        return encodeURIComponent(this.getAttribute('playlistid') || '');
    }
    set playlistId(id) {
        this.setAttribute('playlistid', id);
    }
    get videoTitle() {
        return this.getAttribute('videotitle') || 'Video';
    }
    set videoTitle(title) {
        this.setAttribute('videotitle', title);
    }
    get videoPlay() {
        return this.getAttribute('videoplay') || 'Play';
    }
    set videoPlay(name) {
        this.setAttribute('videoplay', name);
    }
    get videoStartAt() {
        return this.getAttribute('videoStartAt') || '0';
    }
    get autoLoad() {
        return this.hasAttribute('autoload');
    }
    get autoPause() {
        return this.hasAttribute('autopause');
    }
    get noCookie() {
        return this.hasAttribute('nocookie');
    }
    get posterQuality() {
        return this.getAttribute('posterquality') || 'hqdefault';
    }
    get posterLoading() {
        return (this.getAttribute('posterloading') ||
            'lazy');
    }
    get params() {
        return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
    }
    set params(opts) {
        this.setAttribute('params', opts);
    }
    set posterQuality(opts) {
        this.setAttribute('posterquality', opts);
    }
    get disableNoscript() {
        return this.hasAttribute('disablenoscript');
    }
    setupDom() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        let nonce = '';
        if (window.liteYouTubeNonce) {
            nonce = `nonce="${window.liteYouTubeNonce}"`;
        }
        shadowDom.innerHTML = `
      <style ${nonce}>
        :host {
          --aspect-ratio: var(--lite-youtube-aspect-ratio, 16 / 9);
          --aspect-ratio-short: var(--lite-youtube-aspect-ratio-short, 9 / 16);
          --frame-shadow-visible: var(--lite-youtube-frame-shadow-visible, yes);
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          aspect-ratio: var(--aspect-ratio);
        }

        @media (max-width: 40em) {
          :host([short]) {
            aspect-ratio: var(--aspect-ratio-short);
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder, slot[name=image]::slotted(*) {
          object-fit: cover;
          width: 100%;
        }

        @container style(--frame-shadow-visible: yes) {
          #frame::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
            height: 60px;
            width: 100%;
            z-index: 1;
          }
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <slot name="image">
            <source id="webpPlaceholder" type="image/webp">
            <source id="jpegPlaceholder" type="image/jpeg">
            <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
          </slot>
        </picture>
        <button id="playButton" part="playButton"></button>
      </div>
    `;
        this.domRefFrame = shadowDom.querySelector('#frame');
        this.domRefImg = {
            fallback: shadowDom.querySelector('#fallbackPlaceholder'),
            webp: shadowDom.querySelector('#webpPlaceholder'),
            jpeg: shadowDom.querySelector('#jpegPlaceholder'),
        };
        this.domRefPlayButton = shadowDom.querySelector('#playButton');
    }
    setupComponent() {
        const hasImgSlot = this.shadowRoot.querySelector('slot[name=image]');
        if (hasImgSlot.assignedNodes().length === 0) {
            this.initImagePlaceholder();
        }
        this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
        if (this.autoLoad || this.isYouTubeShort() || this.autoPause) {
            this.initIntersectionObserver();
        }
        if (!this.disableNoscript) {
            this.injectSearchNoScript();
        }
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            this.setupComponent();
            if (this.domRefFrame.classList.contains('activated')) {
                this.domRefFrame.classList.remove('activated');
                this.shadowRoot.querySelector('iframe').remove();
                this.isIframeLoaded = false;
            }
        }
    }
    injectSearchNoScript() {
        const eleNoScript = document.createElement('noscript');
        this.prepend(eleNoScript);
        eleNoScript.innerHTML = this.generateIframe();
    }
    generateIframe(isIntersectionObserver = false) {
        let autoplay = isIntersectionObserver ? 0 : 1;
        const wantsNoCookie = this.noCookie ? '-nocookie' : '';
        let embedTarget;
        if (this.playlistId) {
            embedTarget = `?listType=playlist&list=${this.playlistId}&`;
        }
        else {
            embedTarget = `${this.videoId}?`;
        }
        if (this.autoPause) {
            this.params = `enablejsapi=1`;
        }
        if (this.isYouTubeShort()) {
            this.params = `loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`;
            autoplay = 1;
        }
        return `
<iframe credentialless frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${wantsNoCookie}.com/embed/${embedTarget}autoplay=${autoplay}&${this.params}"
></iframe>`;
    }
    addIframe(isIntersectionObserver = false) {
        if (!this.isIframeLoaded) {
            const iframeHTML = this.generateIframe(isIntersectionObserver);
            this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
            this.domRefFrame.classList.add('activated');
            this.isIframeLoaded = true;
            this.attemptShortAutoPlay();
            this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded', {
                detail: {
                    videoId: this.videoId,
                },
                bubbles: true,
                cancelable: true,
            }));
        }
    }
    initImagePlaceholder() {
        this.testPosterImage();
        this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.domRefImg?.fallback?.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
    }
    async testPosterImage() {
        setTimeout(() => {
            const webpUrl = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
            const img = new Image();
            img.fetchPriority = 'low';
            img.referrerPolicy = 'origin';
            img.src = webpUrl;
            img.onload = async (e) => {
                const target = e.target;
                const noPoster = target?.naturalHeight == 90 && target?.naturalWidth == 120;
                if (noPoster) {
                    this.posterQuality = 'hqdefault';
                }
                const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
                this.domRefImg.webp.srcset = posterUrlWebp;
                const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
                this.domRefImg.fallback.loading = this.posterLoading;
                this.domRefImg.jpeg.srcset = posterUrlJpeg;
                this.domRefImg.fallback.src = posterUrlJpeg;
                this.domRefImg.fallback.loading = this.posterLoading;
            };
        }, 100);
    }
    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isIframeLoaded) {
                    LiteYTEmbed.warmConnections(this);
                    this.addIframe(true);
                    observer.unobserve(this);
                }
            });
        }, options);
        observer.observe(this);
        if (this.autoPause) {
            const windowPause = new IntersectionObserver((e, o) => {
                e.forEach(entry => {
                    if (entry.intersectionRatio !== 1) {
                        this.shadowRoot
                            .querySelector('iframe')
                            ?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                });
            }, { threshold: 1 });
            windowPause.observe(this);
        }
    }
    attemptShortAutoPlay() {
        if (this.isYouTubeShort()) {
            setTimeout(() => {
                this.shadowRoot
                    .querySelector('iframe')
                    ?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }, 2000);
        }
    }
    isYouTubeShort() {
        return (this.getAttribute('short') === '' &&
            window.matchMedia('(max-width: 40em)').matches);
    }
    static addPrefetch(kind, url) {
        const linkElem = document.createElement('link');
        linkElem.rel = kind;
        linkElem.href = url;
        linkElem.crossOrigin = 'true';
        document.head.append(linkElem);
    }
    static warmConnections(context) {
        if (LiteYTEmbed.isPreconnected || window.liteYouTubeIsPreconnected)
            return;
        LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
        LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
        if (!context.noCookie) {
            LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
            LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
            LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
            LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
        }
        else {
            LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
        }
        LiteYTEmbed.isPreconnected = true;
        window.liteYouTubeIsPreconnected = true;
    }
}
LiteYTEmbed.isPreconnected = false;
customElements.define('lite-youtube', LiteYTEmbed);
//# sourceMappingURL=lite-youtube.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ "./assets/app.scss");
/* harmony import */ var _justinribeiro_lite_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @justinribeiro/lite-youtube */ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdEQUFnRDtBQUMzRztBQUNBLGlCQUFpQjtBQUNqQixhQUFhLElBQUksY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHlEQUF5RDtBQUM1RyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhby15b3V0dWJlbGl0ZXNwZWVkZW1iZWQtYnVuZGxlLy4vYXNzZXRzL2FwcC5zY3NzIiwid2VicGFjazovL2NvbnRhby15b3V0dWJlbGl0ZXNwZWVkZW1iZWQtYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BqdXN0aW5yaWJlaXJvL2xpdGUteW91dHViZS9saXRlLXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vY29udGFvLXlvdXR1YmVsaXRlc3BlZWRlbWJlZC1idW5kbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29udGFvLXlvdXR1YmVsaXRlc3BlZWRlbWJlZC1idW5kbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbnRhby15b3V0dWJlbGl0ZXNwZWVkZW1iZWQtYnVuZGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29udGFvLXlvdXR1YmVsaXRlc3BlZWRlbWJlZC1idW5kbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250YW8teW91dHViZWxpdGVzcGVlZGVtYmVkLWJ1bmRsZS8uL2Fzc2V0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGNsYXNzIExpdGVZVEVtYmVkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzSWZyYW1lTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0dXBEb20oKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3ZpZGVvaWQnLCAncGxheWxpc3RpZCcsICd2aWRlb3BsYXknLCAndmlkZW90aXRsZSddO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyb3ZlcicsICgpID0+IExpdGVZVEVtYmVkLndhcm1Db25uZWN0aW9ucyh0aGlzKSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZElmcmFtZSgpKTtcbiAgICB9XG4gICAgZ2V0IHZpZGVvSWQoKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZpZGVvaWQnKSB8fCAnJyk7XG4gICAgfVxuICAgIHNldCB2aWRlb0lkKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2aWRlb2lkJywgaWQpO1xuICAgIH1cbiAgICBnZXQgcGxheWxpc3RJZCgpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldEF0dHJpYnV0ZSgncGxheWxpc3RpZCcpIHx8ICcnKTtcbiAgICB9XG4gICAgc2V0IHBsYXlsaXN0SWQoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3BsYXlsaXN0aWQnLCBpZCk7XG4gICAgfVxuICAgIGdldCB2aWRlb1RpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZpZGVvdGl0bGUnKSB8fCAnVmlkZW8nO1xuICAgIH1cbiAgICBzZXQgdmlkZW9UaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmlkZW90aXRsZScsIHRpdGxlKTtcbiAgICB9XG4gICAgZ2V0IHZpZGVvUGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2aWRlb3BsYXknKSB8fCAnUGxheSc7XG4gICAgfVxuICAgIHNldCB2aWRlb1BsYXkobmFtZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmlkZW9wbGF5JywgbmFtZSk7XG4gICAgfVxuICAgIGdldCB2aWRlb1N0YXJ0QXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmlkZW9TdGFydEF0JykgfHwgJzAnO1xuICAgIH1cbiAgICBnZXQgYXV0b0xvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnYXV0b2xvYWQnKTtcbiAgICB9XG4gICAgZ2V0IGF1dG9QYXVzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdhdXRvcGF1c2UnKTtcbiAgICB9XG4gICAgZ2V0IG5vQ29va2llKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ25vY29va2llJyk7XG4gICAgfVxuICAgIGdldCBwb3N0ZXJRdWFsaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcnF1YWxpdHknKSB8fCAnaHFkZWZhdWx0JztcbiAgICB9XG4gICAgZ2V0IHBvc3RlckxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcmxvYWRpbmcnKSB8fFxuICAgICAgICAgICAgJ2xhenknKTtcbiAgICB9XG4gICAgZ2V0IHBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIGBzdGFydD0ke3RoaXMudmlkZW9TdGFydEF0fSYke3RoaXMuZ2V0QXR0cmlidXRlKCdwYXJhbXMnKX1gO1xuICAgIH1cbiAgICBzZXQgcGFyYW1zKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3BhcmFtcycsIG9wdHMpO1xuICAgIH1cbiAgICBzZXQgcG9zdGVyUXVhbGl0eShvcHRzKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwb3N0ZXJxdWFsaXR5Jywgb3B0cyk7XG4gICAgfVxuICAgIGdldCBkaXNhYmxlTm9zY3JpcHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZW5vc2NyaXB0Jyk7XG4gICAgfVxuICAgIHNldHVwRG9tKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dEb20gPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgbGV0IG5vbmNlID0gJyc7XG4gICAgICAgIGlmICh3aW5kb3cubGl0ZVlvdVR1YmVOb25jZSkge1xuICAgICAgICAgICAgbm9uY2UgPSBgbm9uY2U9XCIke3dpbmRvdy5saXRlWW91VHViZU5vbmNlfVwiYDtcbiAgICAgICAgfVxuICAgICAgICBzaGFkb3dEb20uaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlICR7bm9uY2V9PlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLS1hc3BlY3QtcmF0aW86IHZhcigtLWxpdGUteW91dHViZS1hc3BlY3QtcmF0aW8sIDE2IC8gOSk7XG4gICAgICAgICAgLS1hc3BlY3QtcmF0aW8tc2hvcnQ6IHZhcigtLWxpdGUteW91dHViZS1hc3BlY3QtcmF0aW8tc2hvcnQsIDkgLyAxNik7XG4gICAgICAgICAgLS1mcmFtZS1zaGFkb3ctdmlzaWJsZTogdmFyKC0tbGl0ZS15b3V0dWJlLWZyYW1lLXNoYWRvdy12aXNpYmxlLCB5ZXMpO1xuICAgICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFzcGVjdC1yYXRpbzogdmFyKC0tYXNwZWN0LXJhdGlvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MGVtKSB7XG4gICAgICAgICAgOmhvc3QoW3Nob3J0XSkge1xuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiB2YXIoLS1hc3BlY3QtcmF0aW8tc2hvcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNmcmFtZSwgI2ZhbGxiYWNrUGxhY2Vob2xkZXIsIGlmcmFtZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICNmcmFtZSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2ZhbGxiYWNrUGxhY2Vob2xkZXIsIHNsb3RbbmFtZT1pbWFnZV06OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQGNvbnRhaW5lciBzdHlsZSgtLWZyYW1lLXNoYWRvdy12aXNpYmxlOiB5ZXMpIHtcbiAgICAgICAgICAjZnJhbWU6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzExMSAtMjAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNwbGF5QnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY4IDQ4XCI+PHBhdGggZD1cIk02Ni41MiA3Ljc0Yy0uNzgtMi45My0yLjQ5LTUuNDEtNS40Mi02LjE5QzU1Ljc5LjEzIDM0IDAgMzQgMFMxMi4yMS4xMyA2LjkgMS41NWMtMi45My43OC00LjYzIDMuMjYtNS40MiA2LjE5Qy4wNiAxMy4wNSAwIDI0IDAgMjRzLjA2IDEwLjk1IDEuNDggMTYuMjZjLjc4IDIuOTMgMi40OSA1LjQxIDUuNDIgNi4xOUMxMi4yMSA0Ny44NyAzNCA0OCAzNCA0OHMyMS43OS0uMTMgMjcuMS0xLjU1YzIuOTMtLjc4IDQuNjQtMy4yNiA1LjQyLTYuMTlDNjcuOTQgMzQuOTUgNjggMjQgNjggMjRzLS4wNi0xMC45NS0xLjQ4LTE2LjI2elwiIGZpbGw9XCJyZWRcIi8+PHBhdGggZD1cIk00NSAyNCAyNyAxNHYyMFwiIGZpbGw9XCJ3aGl0ZVwiLz48L3N2Zz4nKTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgI3BsYXlCdXR0b246YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMTFweCAwIDExcHggMTlweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAjcGxheUJ1dHRvbixcbiAgICAgICAgI3BsYXlCdXR0b246YmVmb3JlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gICAgICAgICAgY3Vyc29yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUG9zdC1jbGljayBzdHlsZXMgKi9cbiAgICAgICAgLmFjdGl2YXRlZCB7XG4gICAgICAgICAgY3Vyc29yOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgICNmcmFtZS5hY3RpdmF0ZWQ6OmJlZm9yZSxcbiAgICAgICAgI2ZyYW1lLmFjdGl2YXRlZCA+ICNwbGF5QnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cImZyYW1lXCI+XG4gICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgIDxzbG90IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPHNvdXJjZSBpZD1cIndlYnBQbGFjZWhvbGRlclwiIHR5cGU9XCJpbWFnZS93ZWJwXCI+XG4gICAgICAgICAgICA8c291cmNlIGlkPVwianBlZ1BsYWNlaG9sZGVyXCIgdHlwZT1cImltYWdlL2pwZWdcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJmYWxsYmFja1BsYWNlaG9sZGVyXCIgcmVmZXJyZXJwb2xpY3k9XCJvcmlnaW5cIiBsb2FkaW5nPVwibGF6eVwiPlxuICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICA8YnV0dG9uIGlkPVwicGxheUJ1dHRvblwiIHBhcnQ9XCJwbGF5QnV0dG9uXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB0aGlzLmRvbVJlZkZyYW1lID0gc2hhZG93RG9tLnF1ZXJ5U2VsZWN0b3IoJyNmcmFtZScpO1xuICAgICAgICB0aGlzLmRvbVJlZkltZyA9IHtcbiAgICAgICAgICAgIGZhbGxiYWNrOiBzaGFkb3dEb20ucXVlcnlTZWxlY3RvcignI2ZhbGxiYWNrUGxhY2Vob2xkZXInKSxcbiAgICAgICAgICAgIHdlYnA6IHNoYWRvd0RvbS5xdWVyeVNlbGVjdG9yKCcjd2VicFBsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBqcGVnOiBzaGFkb3dEb20ucXVlcnlTZWxlY3RvcignI2pwZWdQbGFjZWhvbGRlcicpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRvbVJlZlBsYXlCdXR0b24gPSBzaGFkb3dEb20ucXVlcnlTZWxlY3RvcignI3BsYXlCdXR0b24nKTtcbiAgICB9XG4gICAgc2V0dXBDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGhhc0ltZ1Nsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPWltYWdlXScpO1xuICAgICAgICBpZiAoaGFzSW1nU2xvdC5hc3NpZ25lZE5vZGVzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRJbWFnZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21SZWZQbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGAke3RoaXMudmlkZW9QbGF5fTogJHt0aGlzLnZpZGVvVGl0bGV9YCk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0aXRsZScsIGAke3RoaXMudmlkZW9QbGF5fTogJHt0aGlzLnZpZGVvVGl0bGV9YCk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9Mb2FkIHx8IHRoaXMuaXNZb3VUdWJlU2hvcnQoKSB8fCB0aGlzLmF1dG9QYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZU5vc2NyaXB0KSB7XG4gICAgICAgICAgICB0aGlzLmluamVjdFNlYXJjaE5vU2NyaXB0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmIChvbGRWYWwgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9tUmVmRnJhbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmF0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tUmVmRnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNJZnJhbWVMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbmplY3RTZWFyY2hOb1NjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlTm9TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdub3NjcmlwdCcpO1xuICAgICAgICB0aGlzLnByZXBlbmQoZWxlTm9TY3JpcHQpO1xuICAgICAgICBlbGVOb1NjcmlwdC5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlSWZyYW1lKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlSWZyYW1lKGlzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYXV0b3BsYXkgPSBpc0ludGVyc2VjdGlvbk9ic2VydmVyID8gMCA6IDE7XG4gICAgICAgIGNvbnN0IHdhbnRzTm9Db29raWUgPSB0aGlzLm5vQ29va2llID8gJy1ub2Nvb2tpZScgOiAnJztcbiAgICAgICAgbGV0IGVtYmVkVGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5wbGF5bGlzdElkKSB7XG4gICAgICAgICAgICBlbWJlZFRhcmdldCA9IGA/bGlzdFR5cGU9cGxheWxpc3QmbGlzdD0ke3RoaXMucGxheWxpc3RJZH0mYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVtYmVkVGFyZ2V0ID0gYCR7dGhpcy52aWRlb0lkfT9gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9QYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBgZW5hYmxlanNhcGk9MWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNZb3VUdWJlU2hvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBgbG9vcD0xJm11dGU9MSZtb2Rlc3RicmFuZGluZz0xJnBsYXlzaW5saW5lPTEmcmVsPTAmZW5hYmxlanNhcGk9MSZwbGF5bGlzdD0ke3RoaXMudmlkZW9JZH1gO1xuICAgICAgICAgICAgYXV0b3BsYXkgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgXG48aWZyYW1lIGNyZWRlbnRpYWxsZXNzIGZyYW1lYm9yZGVyPVwiMFwiIHRpdGxlPVwiJHt0aGlzLnZpZGVvVGl0bGV9XCJcbiAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlblxuICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlJHt3YW50c05vQ29va2llfS5jb20vZW1iZWQvJHtlbWJlZFRhcmdldH1hdXRvcGxheT0ke2F1dG9wbGF5fSYke3RoaXMucGFyYW1zfVwiXG4+PC9pZnJhbWU+YDtcbiAgICB9XG4gICAgYWRkSWZyYW1lKGlzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNJZnJhbWVMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZUhUTUwgPSB0aGlzLmdlbmVyYXRlSWZyYW1lKGlzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgdGhpcy5kb21SZWZGcmFtZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGlmcmFtZUhUTUwpO1xuICAgICAgICAgICAgdGhpcy5kb21SZWZGcmFtZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuaXNJZnJhbWVMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hdHRlbXB0U2hvcnRBdXRvUGxheSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbGl0ZVlvdXR1YmVJZnJhbWVMb2FkZWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHRoaXMudmlkZW9JZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0SW1hZ2VQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgdGhpcy50ZXN0UG9zdGVySW1hZ2UoKTtcbiAgICAgICAgdGhpcy5kb21SZWZJbWcuZmFsbGJhY2suc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYCR7dGhpcy52aWRlb1BsYXl9OiAke3RoaXMudmlkZW9UaXRsZX1gKTtcbiAgICAgICAgdGhpcy5kb21SZWZJbWc/LmZhbGxiYWNrPy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke3RoaXMudmlkZW9QbGF5fTogJHt0aGlzLnZpZGVvVGl0bGV9YCk7XG4gICAgfVxuICAgIGFzeW5jIHRlc3RQb3N0ZXJJbWFnZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWJwVXJsID0gYGh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC8ke3RoaXMudmlkZW9JZH0vJHt0aGlzLnBvc3RlclF1YWxpdHl9LndlYnBgO1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuZmV0Y2hQcmlvcml0eSA9ICdsb3cnO1xuICAgICAgICAgICAgaW1nLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgICAgICBpbWcuc3JjID0gd2VicFVybDtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vUG9zdGVyID0gdGFyZ2V0Py5uYXR1cmFsSGVpZ2h0ID09IDkwICYmIHRhcmdldD8ubmF0dXJhbFdpZHRoID09IDEyMDtcbiAgICAgICAgICAgICAgICBpZiAobm9Qb3N0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ZXJRdWFsaXR5ID0gJ2hxZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RlclVybFdlYnAgPSBgaHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLyR7dGhpcy52aWRlb0lkfS8ke3RoaXMucG9zdGVyUXVhbGl0eX0ud2VicGA7XG4gICAgICAgICAgICAgICAgdGhpcy5kb21SZWZJbWcud2VicC5zcmNzZXQgPSBwb3N0ZXJVcmxXZWJwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RlclVybEpwZWcgPSBgaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3RoaXMudmlkZW9JZH0vJHt0aGlzLnBvc3RlclF1YWxpdHl9LmpwZ2A7XG4gICAgICAgICAgICAgICAgdGhpcy5kb21SZWZJbWcuZmFsbGJhY2subG9hZGluZyA9IHRoaXMucG9zdGVyTG9hZGluZztcbiAgICAgICAgICAgICAgICB0aGlzLmRvbVJlZkltZy5qcGVnLnNyY3NldCA9IHBvc3RlclVybEpwZWc7XG4gICAgICAgICAgICAgICAgdGhpcy5kb21SZWZJbWcuZmFsbGJhY2suc3JjID0gcG9zdGVyVXJsSnBlZztcbiAgICAgICAgICAgICAgICB0aGlzLmRvbVJlZkltZy5mYWxsYmFjay5sb2FkaW5nID0gdGhpcy5wb3N0ZXJMb2FkaW5nO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgaW5pdEludGVyc2VjdGlvbk9ic2VydmVyKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmICF0aGlzLmlzSWZyYW1lTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExpdGVZVEVtYmVkLndhcm1Db25uZWN0aW9ucyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJZnJhbWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QYXVzZSkge1xuICAgICAgICAgICAgY29uc3Qgd2luZG93UGF1c2UgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGUsIG8pID0+IHtcbiAgICAgICAgICAgICAgICBlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uY29udGVudFdpbmRvdz8ucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB7IHRocmVzaG9sZDogMSB9KTtcbiAgICAgICAgICAgIHdpbmRvd1BhdXNlLm9ic2VydmUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0ZW1wdFNob3J0QXV0b1BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzWW91VHViZVNob3J0KCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignaWZyYW1lJylcbiAgICAgICAgICAgICAgICAgICAgPy5jb250ZW50V2luZG93Py5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcIicgKyAncGxheVZpZGVvJyArICdcIixcImFyZ3NcIjpcIlwifScsICcqJyk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1lvdVR1YmVTaG9ydCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEF0dHJpYnV0ZSgnc2hvcnQnKSA9PT0gJycgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0MGVtKScpLm1hdGNoZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkUHJlZmV0Y2goa2luZCwgdXJsKSB7XG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rRWxlbS5yZWwgPSBraW5kO1xuICAgICAgICBsaW5rRWxlbS5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rRWxlbS5jcm9zc09yaWdpbiA9ICd0cnVlJztcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobGlua0VsZW0pO1xuICAgIH1cbiAgICBzdGF0aWMgd2FybUNvbm5lY3Rpb25zKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKExpdGVZVEVtYmVkLmlzUHJlY29ubmVjdGVkIHx8IHdpbmRvdy5saXRlWW91VHViZUlzUHJlY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBMaXRlWVRFbWJlZC5hZGRQcmVmZXRjaCgncHJlY29ubmVjdCcsICdodHRwczovL2kueXRpbWcuY29tLycpO1xuICAgICAgICBMaXRlWVRFbWJlZC5hZGRQcmVmZXRjaCgncHJlY29ubmVjdCcsICdodHRwczovL3MueXRpbWcuY29tJyk7XG4gICAgICAgIGlmICghY29udGV4dC5ub0Nvb2tpZSkge1xuICAgICAgICAgICAgTGl0ZVlURW1iZWQuYWRkUHJlZmV0Y2goJ3ByZWNvbm5lY3QnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20nKTtcbiAgICAgICAgICAgIExpdGVZVEVtYmVkLmFkZFByZWZldGNoKCdwcmVjb25uZWN0JywgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nKTtcbiAgICAgICAgICAgIExpdGVZVEVtYmVkLmFkZFByZWZldGNoKCdwcmVjb25uZWN0JywgJ2h0dHBzOi8vZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0Jyk7XG4gICAgICAgICAgICBMaXRlWVRFbWJlZC5hZGRQcmVmZXRjaCgncHJlY29ubmVjdCcsICdodHRwczovL3N0YXRpYy5kb3VibGVjbGljay5uZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExpdGVZVEVtYmVkLmFkZFByZWZldGNoKCdwcmVjb25uZWN0JywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tJyk7XG4gICAgICAgIH1cbiAgICAgICAgTGl0ZVlURW1iZWQuaXNQcmVjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cubGl0ZVlvdVR1YmVJc1ByZWNvbm5lY3RlZCA9IHRydWU7XG4gICAgfVxufVxuTGl0ZVlURW1iZWQuaXNQcmVjb25uZWN0ZWQgPSBmYWxzZTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGl0ZS15b3V0dWJlJywgTGl0ZVlURW1iZWQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0ZS15b3V0dWJlLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcC5zY3NzJztcbmltcG9ydCAnQGp1c3RpbnJpYmVpcm8vbGl0ZS15b3V0dWJlJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==