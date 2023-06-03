import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsController } from './locations/locations.controller';

@Module({
  imports: [],
  controllers: [AppController, LocationsController],
  providers: [AppService],
})
export class AppModule { }