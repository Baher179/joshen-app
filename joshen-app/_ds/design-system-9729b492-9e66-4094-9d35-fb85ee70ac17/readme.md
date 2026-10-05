# iOS & iPadOS 26 — design system

A complete, code-backed extraction of the attached **iOS and iPadOS 26 (Community)** Figma
kit, re-themed onto the brand's own type. Every colour, size, radius, material and type
value here is transcribed from that file — odd values (13.333px segment labels, 27px safe
areas, 39pt toggle knobs, 58px sheet bottom radius) are the design, not rounding errors.

## What's here

| Layer | Files |
| --- | --- |
| Global CSS | `styles.css` → the `tokens/` closure |
| Primitives | `tokens/colors.css` (90 colour variables × 4 modes), `materials.css`, `spacing.css`, `radius.css`, `elevation.css`, `typography.css`, `motion.css` |
| Brand layer | `tokens/fonts.css` (self-hosted faces), `tokens/theme.css` |
| Semantic layer | `tokens/semantic.css` |
| Components | 34 React components under `components/` |

## The three-layer token model

1. **Primitives** — the raw extracted values. `--accents-blue`, `--labels-secondary`,
   `--material-regular-bg`, `--type-body-size`. Never referenced by a product screen.
2. **Theme** (`tokens/theme.css`) — the *only* file a consuming product edits.
   `--theme-accent`, `--theme-font-display`, `--theme-control-radius`.
3. **Semantic** (`tokens/semantic.css`) — role names components consume:
   `--content-primary`, `--surface-grouped-card`, `--action-destructive-fill`.

Components reference **only** layer 3. Re-branding means editing layer 2 and nothing else.

## Colour modes

The source ships four modes; all four are here as CSS scopes on `colors.css`:

| Mode | Selector |
| --- | --- |
| Light | `:root` |
| Dark | `.dark` / `[data-theme="dark"]` |
| Accessible (Light) | `.increase-contrast` / `[data-contrast="high"]` |
| Accessible (Dark) | `.dark.increase-contrast` |

## Type

The kit's eleven-style iOS ladder — Large Title 34/41 down to Caption 2 11/13, with the
exact tracking values (Body -0.43, Subheadline -0.23, Footnote -0.08) — is preserved as
both custom properties and `.ios-*` utility classes. The **faces** are the brand's,
self-hosted in `fonts/`:

- **Thmanyah Serif Display** → `--theme-font-display` (titles)
- **Thmanyah Sans** → `--theme-font-text` (UI, controls, labels)
- **Thmanyah Serif Text** → `--theme-font-reading` (long-form copy)
- Montserrat (`--font-brand`) and IBM Plex Sans Arabic (`--font-brand-arabic`) are wired
  and available as alternates.

Dynamic Type is exposed as `--dynamic-type-xsmall` … `--dynamic-type-ax5` for scaling a
whole screen to a content-size category.

## Iconography — read this before using `Icon`

The source kit draws **every** symbol as a private-use codepoint in SF Pro
(e.g. `U+100184`). SF Pro is Apple-licensed, so no font binary ships here and those
glyphs render only where the real face is installed. `components/foundations/sf-symbols.js`
maps the names the kit uses to their codepoints. In any surface that must read on
non-Apple platforms, pass `Icon`'s `fallback` prop or supply your own SVG set.

## Components

**Foundations** — Text, Material, Separator, Icon
**Controls** — Button, IconButton, Toggle, Slider, Stepper, SegmentedControl, PageControl, ProgressBar, ActivityIndicator, PopUpButton
**Bars** — StatusBar, NavigationBar, TabBar, Toolbar, SearchField
**Lists** — List, ListRow, ListSectionHeader, ListFooter, SwipeActions
**Forms** — TextField, TextArea, PickerWheel, DatePicker
**Overlays** — Alert, ActionSheet, Sheet, Popover, Menu, Scrim
**Content** — Badge, EmptyState, Notification, ActivityView
**Navigation** — Sidebar, SidebarRow, DeviceFrame, HomeIndicator

Each has a sibling `.d.ts` (typed props, documented against the source variants) and a
`.prompt.md` (when to use it, with a working snippet).

## Composing a screen

```jsx
<DeviceFrame device="iphone">
  <StatusBar />
  <NavigationBar variant="large-title" title="Library" subtitle="12 albums" />
  <List appearance="inset" header={<ListSectionHeader title="Network" />}>
    <ListRow title="Wi-Fi" trailing={<Toggle on={on} onChange={setOn} />} separator={false} />
    <ListRow title="Bluetooth" value="On" accessory="disclosure" />
  </List>
  <TabBar selected={0} tabs={[{ label: 'Home' }, { label: 'Search' }]} />
</DeviceFrame>
```

## Rules that matter

- **44pt minimum touch target.** Never smaller, at any control size.
- **Materials need something behind them.** A blur material on a flat background looks
  like a flat fill — put content, a wallpaper or a gradient underneath.
- **16px list inset, 25px floating-bar inset.** Those two numbers set the horizontal
  rhythm of every iPhone screen in the kit.
- **One accent per product.** Point `--theme-accent` at it; don't scatter system accents
  across a UI as decoration.
- **Vibrant label colours on translucent surfaces only** (menus, popovers) — they're
  designed to sit over blur.

## Known gaps

- SF Pro / SF Compact and the SF Symbol glyphs are not redistributable (see above).
- `tokens/motion.css` is documented as platform defaults: the source is a static kit and
  declares no timing curves.
- The Figma file listed no TEXT/EFFECT styles, so `tokens/figma/fig-typography.css` is
  empty by design — the type ladder was transcribed from the Text Styles frames instead.
