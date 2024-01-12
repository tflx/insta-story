import{u as b,f as x,i as f,s as y,x as g}from"./lit-element-v9ALQ4cc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},E=(e=C,t,s)=>{const{kind:r,metadata:i}=s;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(s.name,e),r==="accessor"){const{name:o}=s;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,l,e)},init(n){return n!==void 0&&this.C(o,void 0,e),n}}}if(r==="setter"){const{name:o}=s;return function(n){const l=this[o];t.call(this,n),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+r)};function c(e){return(t,s)=>typeof s=="object"?E(e,t,s):((r,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(e){return c({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return(t,s)=>{const{slot:r,selector:i}=e??{},a="slot"+(r?`[name=${r}]`:":not([name])");return P(t,s,{get(){const o=this.renderRoot?.querySelector(a),n=o?.assignedElements(e)??[];return i===void 0?n:n.filter(l=>l.matches(i))}})}}var $=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(e,t,s,r)=>{for(var i=r>1?void 0:r?I(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&$(t,s,i),i};let h=class extends y{constructor(){super(...arguments),this.load=!1,this.pause=!0,this.loaded=!1,this.playing=!1,this.active=!1,this.progress=0,this.prepareContent=()=>{this.isVideo&&(this.video.preload="metadata",this.video.autoplay=!1,this.video.muted=!0,this.video.loop=!1,this.video.controls=!1,this.video.playsInline=!0,this.video.pause(),this.video.onloadedmetadata=()=>{this.loaded=!0,this.dispatchEvent(new CustomEvent("loaded",{detail:{type:"video",length:this.video.duration}}))},this.video.addEventListener("timeupdate",()=>{const e=this.video.currentTime/this.video.duration*100;this.dispatchEvent(new CustomEvent("progress",{bubbles:!0,composed:!0,detail:{type:"video",progress:e}}))}),this.video.addEventListener("ended",()=>{this.dispatchEvent(new CustomEvent("ended",{bubbles:!0,composed:!0,detail:{type:"video"}}))}),this.active&&(this.video.readyState===4?this.video.play():this.video.addEventListener("canplaythrough",()=>{this.video.play()}))),this.isImage&&(this.image.loading="lazy",this.image.onload=()=>{this.loaded=!0,this.dispatchEvent(new CustomEvent("loaded",{bubbles:!0,composed:!0,detail:{type:"image"}}))})},this.toggle=e=>{this.active=e,this.pause=!e},this.pauseVideo=e=>{this.video&&e?this.video.pause():this.video&&!e&&this.video.play()},this.restart=()=>{this.video&&(this.video.currentTime=0)}}firstUpdated(){this.content=this.querySelector("video, img"),this.prepareContent()}get isVideo(){return this.content instanceof HTMLVideoElement}get isImage(){return this.content instanceof HTMLImageElement}get video(){return this.content}get image(){return this.content}willUpdate(e){e.has("load")&&this.load&&(this.isVideo?this.video.preload="auto":this.isImage&&(this.image.loading="eager")),e.has("pause")&&this.isVideo&&(this.pause?this.video.pause():(this.video.play(),this.video.currentTime=0))}disconnectedCallback(){super.disconnectedCallback()}render(){return g`
      <li style=${this.active?"display: block;":"display: none;"}>
        <slot></slot>
      </li>
    `}};h.styles=f`
    :host {
      display: block;
      height: 100%;
      grid-area: container;
    }
    li {
      position: relative;
      height: 100%;
    }
    

    ::slotted(video) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `;p([c({type:Boolean})],h.prototype,"load",2);p([c({type:Boolean})],h.prototype,"pause",2);p([u()],h.prototype,"loaded",2);p([u()],h.prototype,"playing",2);p([u()],h.prototype,"active",2);p([u()],h.prototype,"progress",2);h=p([w("insta-chapter")],h);var T=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=(e,t,s,r)=>{for(var i=r>1?void 0:r?O(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,s,i):o(i))||i);return r&&i&&T(t,s,i),i};let d=class extends y{constructor(){super(...arguments),this.width="500px",this.height="800px",this.active=0,this.mousedownTimer=void 0,this.mousedownCount=0,this.mouseDownThreshold=150,this.complete=!1,this.next=()=>{if(this.mousedownCount>this.mouseDownThreshold){this.mousedownCount=0;return}this.active!==this.chapters.length-1&&(this.active=this._next,this.updateInactiveProgress())},this.prev=()=>{if(this.mousedownCount>this.mouseDownThreshold){this.mousedownCount=0;return}this.active===0&&this.currentChapter.restart(),this.complete=!1,this.active=this._prev,this.updateInactiveProgress()},this.renderProgressBars=()=>this.chapters.map((e,t)=>g`
        <li>
          <progress value="0" max="100"></progress>
        </li>
      `),this.updateProgress=e=>{const t=e.detail.progress,s=this.active;this.progressBars||(this.progressBars=this.shadowRoot?.querySelectorAll("progress")),this.progressBars[s].value=t},this.updateInactiveProgress=()=>{this.progressBars||(this.progressBars=this.shadowRoot?.querySelectorAll("progress")),this.progressBars.forEach((e,t)=>{t!==this.active&&(e.value=t>this.active?0:100)})},this.handleEnded=()=>{if(this.active===this.chapters.length-1){this.complete=!0;return}this.next()},this.handlemousedown=e=>{this.currentChapter.pauseVideo(!0),this.mousedownTimer=setInterval(()=>{this.mousedownCount++})},this.handlemouseup=e=>{this.complete||this.currentChapter.pauseVideo(!1),clearInterval(this.mousedownTimer)}}firstUpdated(){if(this.chapters.length>0){this.requestUpdate();const e=this.chapters[this.active];e&&e.toggle(!0)}}get _next(){return this.active===this.chapters.length-1?this.active:this.active+1}get _prev(){return this.active===0?0:this.active-1}get currentChapter(){return this.chapters[this.active]}willUpdate(e){if(e.has("active")){const t=this.chapters[e.get("active")];t&&t.toggle(!1),this.currentChapter&&this.currentChapter.toggle(!0);const s=this.chapters[this._next];s&&(s.load=!0)}}render(){return g`
      <div class="wrapper">
        <button
          class="prev"
          @click=${this.prev}
          @mousedown="${this.handlemousedown}"
          @mouseup="${this.handlemouseup}"
        ></button>

        <ul class="progress">
          ${this.renderProgressBars()}
        </ul>

        <ul
          @progress="${this.updateProgress}"
          @ended="${this.handleEnded}"
          class="container"
          style="width: ${this.width}; height: ${this.height};"
        >
          <slot></slot>
        </ul>

        <button
          class="next"
          @click=${this.next}
          @mousedown="${this.handlemousedown}"
          @mouseup="${this.handlemouseup}"
        ></button>
      </div>
    `}};d.styles=f`
    .wrapper {
      display: inline-grid;
      grid-template-columns: [left-start content-start] 1fr [left-end right-start] 1fr [right-end content-end];
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul.progress {
      position: relative;
      z-index: 1;
      grid-area: content;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
      gap: 5px;
      align-self: start;
      margin: 5px;

      & li {
        height: 5px;
        display: flex;
      }
    }

    progress {
      height: 5px;
      width: 100%;
      -webkit-appearance: none;
      appearance: none;
      border: none;
      background: transparent;

      &::-webkit-progress-bar {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
      }

      &::-webkit-progress-value {
        background: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
      }
    }

    ul.container {
      overflow: hidden;
      height: 100%;
      grid-area: content;
      display: grid;
      grid-template-areas: "container";
    }

    button {
      position: relative;
      z-index: 2;
      appearance: none;
      border: none;
      background: transparent;
      width: 100%;
      height: 100%;

      &.prev {
        grid-area: left;
      }

      &.next {
        grid-area: right;
      }
    }
  `;v([c({type:String})],d.prototype,"width",2);v([c({type:String})],d.prototype,"height",2);v([u()],d.prototype,"active",2);v([_({})],d.prototype,"chapters",2);d=v([w("insta-story")],d);const S={title:"InstaStory",component:"insta-story",parameters:{docs:{description:{component:"Description…"}},status:{type:"wip"}},argTypes:{},args:{}},m={args:{},render:()=>g`
      <insta-story>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
      </insta-story>
    `};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return html\`
      <insta-story>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
      </insta-story>
    \`;
  }
}`,...m.parameters?.docs?.source}}};const j=["Default"];export{m as Default,j as __namedExportsOrder,S as default};
