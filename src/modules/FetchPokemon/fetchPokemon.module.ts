import { Module } from '@nestjs/common';
import { fetchPokemonController } from './fetchPokemon.controller';
import { fetchPokemonService } from './fetchPokemon.service';

@Module({
  imports: [],
  controllers: [fetchPokemonController],
  providers: [fetchPokemonService],
})
export class FetchPokemonModule {}
