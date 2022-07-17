import { Module } from '@nestjs/common';
import allModules from './features/AllModules';

@Module({
  imports: allModules,
})
export class AppModule { }
