# ngconf-googlemaps
[![Known Vulnerabilities](https://snyk.io/test/github/SaiSurya9999/ngconf-googlemaps/badge.svg)](https://snyk.io/test/github/SaiSurya9999/ngconf-googlemaps)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

> ![ngconf-googlemaps](https://img.icons8.com/color/48/000000/google-maps-new.png "API Integration")  Google Map API Integration


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-googlemaps "ngconf-googlemaps Demo") 

## Step - 1

> npm i ngconf-googlemaps --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-googlemaps "ngconf-search")  

import NgconfGooglemapModule in **app.module.ts** file.  
**app.module.ts**
```javascript
import { NgconfGooglemapModule } from 'ngconf-googlemap';
 imports: [
    NgconfGooglemapModule
  ]
  ```

## Step - 2
Declare options object in app.component.ts file for customization.
**app.component.ts**
 ```javascript
   options: any = {
    mapHeight: "500px",
    mapWidth: "100%",
    initialPointer: true,
    mode: "CLICK",
    lat: 28.5355,
    long: 77.3910
  };
  
  onMarkerUpdate(event:any){
      console.log(event);
  }
```
**app.component.html**
In your template use the component selecter and call as followed. That's it you have successfully integrated Google Maps in your project.
```html
<ngconf-googlemap (latlong)="onMarkerUpdate($event)"
API_KEY="YOUR_GOOGLE_MAP_API_KEY" [options]="options" ></ngconf-googlemap>
```

## Output Event (latlong)
This event is emitted when you use the component in CLICK mode where user is allowed to make pointers on the map. So when ever user makes a point on the map that coordinates can be accessed using latlong event.
```javascript
// OUTPUT Format of the latlong event for reference
{
          lat: 28.06,
          long: 32.96
}
```

## Options Available
Here is the Object Interface that has to be followed for Options configuration.  
MODE: CLICK or VIEW [ In CLICK mode user can click on the map and create map pointer. In VIEW mode user can only see the map but cannot perform any operation on it. ]
```javascript
export interface options {
  mode: string, // CLICK or VIEW
  initialPointer: Boolean // true or false
  lat: any, // Latitude
  long: any, // Longitude
  mapHeight: string, // Height in px or % or any CSS unit
  mapWidth: string, // Width in px or % or any CSS unit
}
/* 
Default Options if options is not given to the component
 options: any = {
    mapHeight: "500px",
    mapWidth: "100%",
    initialPointer: false,
    mode: "CLICK",
    lat: 28.5355,
    long: 77.3910
 };
*/
```
> That's it you are good to go. Happy Coding :)
