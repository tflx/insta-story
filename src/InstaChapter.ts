import { css, html, LitElement, PropertyValueMap } from 'lit'
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js'


/**
 * Slider in the style of Apple TV
 * 
 * @element insta-chapter
 * @slot Video or image
 * @attribute speed - The speed of the slide transition
 * @fires loaded - When the content is loaded with a detail object of type (image|video) and the length of video in seconds
 * 
 */

@customElement('insta-chapter')
export class InstaChapter extends LitElement {
  static styles = css`
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
  `
  
  @property({ type: Boolean }) load = false
  @property({ type: Boolean }) pause = true
  @state() loaded = false
  @state() playing = false
  @state() active = false
  @state() progress = 0
  content!: HTMLVideoElement | HTMLImageElement;

  

  protected firstUpdated(): void {
    this.content = this.querySelector('video, img') as HTMLVideoElement | HTMLImageElement
    this.prepareContent()
  }

  private get isVideo() {
    return this.content instanceof HTMLVideoElement
  }
  
  private get isImage() {
    return this.content instanceof HTMLImageElement
  }

  private get video() {
    return this.content as HTMLVideoElement
  }
  
  private get image() {
    return this.content as HTMLImageElement
  }

  protected willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      if (changedProperties.has('load')) {
        if (this.load) {
          if (this.isVideo) {
            this.video.preload = 'auto'
          } else if (this.isImage) {
            this.image.loading = 'eager'
          }
        }
      }
      
      if (changedProperties.has('pause')) {
        if (this.isVideo) {
          if (this.pause) {
            this.video.pause()
           } else {
            this.video.play()
            this.video.currentTime = 0
           }
        }
      }
  }

  private prepareContent = () => {    
    if (this.isVideo) {
      this.video.preload = 'metadata'
      this.video.autoplay = false
      this.video.muted = true
      this.video.loop = false
      this.video.controls = false
      this.video.playsInline = true
      this.video.pause()

      this.video.onloadedmetadata = () => {
        this.loaded = true
        this.dispatchEvent(new CustomEvent('loaded', { detail: { type: 'video', length: this.video.duration } }))
      }

      this.video.addEventListener('timeupdate', () => {
        const progress = (this.video.currentTime / this.video.duration) * 100;        
        this.dispatchEvent(new CustomEvent('progress', { bubbles: true, composed: true, detail: { type: 'video', progress: progress } }))
      })

      this.video.addEventListener('ended', () => {
        this.dispatchEvent(new CustomEvent('ended', { bubbles: true, composed: true, detail: { type: 'video' } }))
      })

      if (this.active) {
        if (this.video.readyState === 4) this.video.play()
        else {
          this.video.addEventListener('canplaythrough', () => {
            this.video.play()
          })
        }
      }
    }

    if (this.isImage) {
      this.image.loading = 'lazy'
      this.image.onload = () => {
        this.loaded = true
        this.dispatchEvent(new CustomEvent('loaded', { bubbles: true, composed: true, detail: { type: 'image' } }))
      }
    }
  }

  public toggle = (value:boolean) => {
    this.active = value
    this.pause = !value
    // if (!this.active && this.video) this.video.currentTime = 0
  }

  public pauseVideo = (value:boolean) => {
    if (this.video && value) this.video.pause()
    else if (this.video && !value) this.video.play()
  }

  public restart = () => {
    if (this.video) this.video.currentTime = 0
  }


  disconnectedCallback(): void {
    super.disconnectedCallback()
  }

  render() {   
    return html`
      <li style=${this.active ? 'display: block;' : 'display: none;'}>
        <slot></slot>
      </li>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'insta-chapter': InstaChapter
  }
}
