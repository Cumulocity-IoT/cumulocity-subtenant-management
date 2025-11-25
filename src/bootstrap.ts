import './polyfills';
import './ng1';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideBootstrapMetadata } from '@c8y/ngx-components';
import { BootstrapMetaData } from '@c8y/bootstrap';

declare const __MODE__: string;
if (__MODE__ === 'production') {
  enableProdMode();
}

export function bootstrap(metadata: BootstrapMetaData) {
  return platformBrowserDynamic(provideBootstrapMetadata(metadata))
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
