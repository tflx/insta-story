# InstaStory Component

The `insta-story` is a custom web component built using LitElement. It is a slider styled similar to Apple TV.

## Usage

To use this component, you need to import it in your project and then use the custom HTML tag `insta-story`.

```html
<insta-story width="500" height="300">
  <insta-chapter>Chapter 1</insta-chapter>
  <insta-chapter>Chapter 2</insta-chapter>
  <!-- Add more chapters as needed -->
</insta-story>

Attributes width: The width of the slider. This is a required attribute. height:
The height of the slider. This is a required attribute. Slots The
<insta-chapter>
  items: These are the individual chapters or slides in the story. You can add
  as many insta-chapter elements as you need. Importing the Component Make sure
  to import the insta-story component in your JavaScript or TypeScript file: ;
  Styling You can style the insta-story component using CSS. The component uses
  Shadow DOM, so you can use CSS custom properties for styling.</insta-chapter
>
```
