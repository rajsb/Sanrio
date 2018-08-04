// console.log("Typescript is transpiled.")

//specify root module details

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)