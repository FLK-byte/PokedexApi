import { Module } from '@nestjs/common';
import { BuscarPokemonsController } from './app.controller';
import { BuscarPokemonsService } from './app.service';

@Module({
  imports: [],
  controllers: [BuscarPokemonsController],
  providers: [BuscarPokemonsService],
})
export class AppModule {}
