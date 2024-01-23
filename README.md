# InstaStory Component

The `insta-story` is a custom web component built using LitElement. 

## Usage

To use this component, you need to import it in your project and then use the custom HTML tag `insta-story`.
Each item in the story is a `insta-chapter` element. You can add as many chapters as you want.

```html
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
  <!-- Add more chapters as needed -->
</insta-story>
```

## Attributes

| Attribute | Description               | Type   | Default |
| --------- | ------------------------- | ------ | ------- |
| width     | The width of the slider in css unit | string | 'auto'  |
| height    | The height of the slider in css unit. | string | 'auto'  |
