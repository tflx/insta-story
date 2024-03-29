import type { Meta, StoryObj } from "@storybook/web-components"
import { html } from "lit"
import "./InstaStory"
import { InstaStory } from "./InstaStory"

const meta: Meta = {
  title: "InstaStory",
  component: "insta-story",
  parameters: {
    docs: {
      description: {
        // 👈 The description of the component
        component: "Description…",
      },
    },
    status: {
      type: "wip", // 'wip' | 'ready' 👈 The status of the component
    },
  },

  argTypes: {},
  args: {},
}
export default meta

export const Default: StoryObj<InstaStory> = {
  args: {},
  render: () => {
    return html`
      <insta-story width="500px" height="800px">
        <insta-chapter>
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://videos.pond5.com/iceland-drone-waterfall-rainbow-footage-071816011_main_xxl.mp4"
          ></video>
        </insta-chapter>
        <insta-chapter>
          <video
            src="https://videos.pond5.com/kayak-paddler-beneath-icebergs-greenland-footage-096059211_main_xxl.mp4"
          ></video>
        </insta-chapter>
      </insta-story>
    `
  },
}
