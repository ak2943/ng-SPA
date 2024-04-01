import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { Mastercomponent} from './app.Mastercomponent';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [Mastercomponent],
})
export class AppServerModule {}
