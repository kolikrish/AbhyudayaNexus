# GradientSmokeText Component

A reusable React component that creates a gradient-masked text with a layered smoke/blur effect.

## Usage

```tsx
import GradientSmokeText from '@/components/ui/GradientSmokeText'

// Basic usage
<GradientSmokeText 
  text="Bihan'25"
  subtitle="The grand welcome for the newest wave of RCCIIT."
/>

// Custom styling
<GradientSmokeText 
  text="Your Text Here"
  subtitle="Optional subtitle"
  textSize="clamp(3rem, 10vw, 6rem)"
  subtitleSize="text-xl md:text-2xl"
  className="my-custom-class"
  showSubtitle={true}
  gradientImage="/path/to/your/gradient.jpg"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **required** | The main text to display |
| `subtitle` | `string` | `undefined` | Optional subtitle text |
| `className` | `string` | `''` | Additional CSS classes for the wrapper |
| `textSize` | `string` | `'clamp(4.5rem, 12vw, 8rem)'` | CSS font-size value for main text |
| `subtitleSize` | `string` | `'text-2xl md:text-3xl lg:text-4xl'` | Tailwind classes for subtitle |
| `gradientImage` | `string` | `'/assets/gradient%20bg.jpg'` | Path to gradient background image |
| `showSubtitle` | `boolean` | `true` | Whether to show the subtitle |

## Features

- **3-Layer Smoke Effect**: 
  - Main text (sharp & clear)
  - ::before pseudo-element (20px blur, 60% opacity)
  - ::after pseudo-element (40px blur, 40% opacity)
  - Extra smoke layer (60px blur, 30% opacity)
- **Gradient Text Masking**: Uses background-clip to create gradient-filled text
- **Fully Responsive**: Uses clamp() for fluid typography
- **Customizable**: All visual aspects can be customized via props
