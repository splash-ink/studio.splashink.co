# Welcome a board 🍻 
This component contains alot of reusable widgets (utils) listed above:
Component Name | Selector | Shared? | Type | APIs
--- | --- | --- | --- | ---
**Banner** | `spl-ph-banner-widget` | No | Dumb | WIP
**Filter** | `spl-ph-filter-widget` | No | Dumb | WIP
**Gallery** | `spl-ph-gallery-widget` | No | Dumb | `[data]`[*](#gallery-model) - **required** to display gallery info. 

Check the Usage Mode section to more information about the [widgets above](#usage-mode).

### Usage Mode:
##### Gallery Widget
Gallery uses a Data Model to engage each Galley that'll be displayed in the future.
```typescript
export interface GalleryModel {
    name: string; // gallery name
    description: string; // little description about the gallery.
    thumbnail: string; // the specific URL cover photography or thumbnail to display gallery.
    tags: string []; // i.e.: photography; products; web; ...;
    photos?: ImageModel []; // [WIP]
}
```

```html
    // Template
    <spl-ph-gallery *ngFor="let gallery of galleries" [data]="gallery"></spl-ph-banner>
```
