import { Module } from '@nestjs/common';
import { ProcurarPokemonsController } from './searchPokemons.controller';
import { ProcurarPokemonsService } from './searchPokemons.service';

@Module({
  imports: [],
  controllers: [ProcurarPokemonsController],
  providers: [ProcurarPokemonsService],
})
export class SearchPokemonsModule {}
