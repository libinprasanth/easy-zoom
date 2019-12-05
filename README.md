# EasyZoom

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0. 

## Description 
EasyZoom is crated based on jQuery Zoom and elevateZoom-plus, but it's fully angular based open source code. You can use your projects.  [Demo](https://angular-3c4fd.web.app/angular-easy-zoom)

## Installation

To install this library, run:

```bash
npm i angular-easy-zoom
```

## Usage

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EasyZoomModule } from 'angular-easy-zoom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EasyZoomModule
  ],
  providers: [
	  
	],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
Once the library is imported, you can use its component in your Angular application:
```html
<lib-easy-zoom
  [thumbImage]="smallImage" 
  [fullImage]="fullImage"
  [imageTitle]="Welcome"
  [enableLens]="true"
  [enableScrollZoom]="true"
  [lensWidth]="150"
  [lensHeight]="150"
  [circularLens]="true" 
  [maxZoomRatio]="5"
  [scrollStepSize]="0.1"
>
</lib-easy-zoom>
```
## Options
| Option        | Default value | Description |
| ------------- | ------------- | ----------- |
| thumbImage    | none          | (Required) Thumbnail for zoom image. |
| Content Cell  | Content Cell  | (Required) Original High quality image, it's required when user zoom the image. |
| imageTitle    | none          | Alt tag of image. |
| enableLens    | false         | If enabled only a small portion around the mouse cursor will actually magnify instead of the entire image area. |
| enableScrollZoom    | false          | Boolean that toggles if the mouse wheel should be captured when hovering over the image to adjust magnification. |
| lensWidth     | 100           | Width of the lens, if enabled. |
| lensHeight    | 100           | Height of the lens, if enabled. |
| lensColor     | #000          | Border color of the lens, if enabled. |
| maxZoomRatio  | 2          | Upper limit on how much zoom can be applied with scrollZoom enabled. See below for details. |
| minZoomRatio    | baseRatio          | Lower limit on how much zoom can be applied with scrollZoom enabled. See below for details. |
| circularLens    | false          | Make the lens circular instead of square. This will only look good if width and height are equal. |
 

### Donate!
Like my Work! [Donate](https://www.paypal.me/LibinPrasanth)