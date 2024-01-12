# InstaStory Component

The `insta-story` is a custom web component built using LitElement. It is a slider styled similar to Apple TV.

## Usage

To use this component, you need to import it in your project and then use the custom HTML tag `insta-story`.

```html
<insta-story width="500" height="300">
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
  <!-- Add more chapters as needed -->
</insta-story>
```

## Attributes

| Attribute | Description               | Type   | Default |
| --------- | ------------------------- | ------ | ------- |
| width     | The width of the slider.  | string | 'auto'  |
| height    | The height of the slider. | string | 'auto'  |
