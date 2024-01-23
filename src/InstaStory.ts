import { css, html, LitElement, PropertyValueMap } from "lit"
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from "lit/decorators.js"
import { InstaChapter } from "./InstaChapter"
import "./InstaChapter"

/**
 * Slider in the style of Apple TV
 *
 * @element insta-story
 * @slot The <insta-chapter> items *
 * @attribute width - The width of the slider
 * @attribute height - The height of the slider
 *
 */

@customElement("insta-story")
export class InstaStory extends LitElement {
  static styles = css`
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
  `

  @property({ type: String }) width = "auto"
  @property({ type: String }) height = "auto"
  @state() active = 0
  @queryAssignedElements({}) chapters!: Array<InstaChapter>
  progressBars: NodeListOf<HTMLProgressElement> | undefined
  mousedownTimer: number | undefined = undefined
  mousedownCount = 0
  mouseDownThreshold = 150
  complete = false

  protected firstUpdated(): void {
    if (this.chapters.length > 0) {
      this.requestUpdate()
      const current = this.chapters[this.active]
      if (current) current.toggle(true)
    }
  }

  private get _next() {
    return this.active === this.chapters.length - 1
      ? this.active
      : this.active + 1
  }

  private get _prev() {
    return this.active === 0 ? 0 : this.active - 1
  }

  private get currentChapter() {
    return this.chapters[this.active]
  }

  private next = () => {
    if (this.mousedownCount > this.mouseDownThreshold) {
      this.mousedownCount = 0
      return
    }

    if (this.active === this.chapters.length - 1) return
    this.active = this._next
    this.updateInactiveProgress()
  }

  private prev = () => {
    if (this.mousedownCount > this.mouseDownThreshold) {
      this.mousedownCount = 0
      return
    }

    if (this.active === 0) this.currentChapter.restart()
    this.complete = false
    this.active = this._prev
    this.updateInactiveProgress()
  }

  protected willUpdate(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (changedProperties.has("active")) {
      const old = this.chapters[changedProperties.get("active") as number]
      if (old) old.toggle(false)

      if (this.currentChapter) this.currentChapter.toggle(true)

      const next = this.chapters[this._next]
      if (next) next.load = true
    }
  }

  private renderProgressBars = () => {
    return this.chapters.map((chapter, index) => {
      return html`
        <li>
          <progress value="0" max="100"></progress>
        </li>
      `
    })
  }

  private updateProgress = (e: CustomEvent) => {
    const progress = e.detail.progress
    const index = this.active
    if (!this.progressBars)
      this.progressBars = this.shadowRoot?.querySelectorAll(
        "progress"
      ) as NodeListOf<HTMLProgressElement>
    this.progressBars[index].value = progress
  }

  private updateInactiveProgress = () => {
    if (!this.progressBars)
      this.progressBars = this.shadowRoot?.querySelectorAll(
        "progress"
      ) as NodeListOf<HTMLProgressElement>
    this.progressBars.forEach((progressBar, i) => {
      if (i !== this.active) progressBar.value = i > this.active ? 0 : 100
    })
  }

  private handleEnded = () => {
    if (this.active === this.chapters.length - 1) {
      this.complete = true
      return
    }
    this.next()
  }

  private handlemousedown = (e: MouseEvent) => {
    this.currentChapter.pauseVideo(true)
    this.mousedownTimer = setInterval(() => {
      this.mousedownCount++
    }) as unknown as number
  }

  private handlemouseup = (e: MouseEvent) => {
    if (!this.complete) this.currentChapter.pauseVideo(false)
    clearInterval(this.mousedownTimer)
  }

  render() {
    return html`
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
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "insta-story": InstaStory
  }
}
