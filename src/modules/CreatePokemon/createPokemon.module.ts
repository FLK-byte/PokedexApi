import { Module } from '@nestjs/common';
import { createPokemonController } from './createPokemon.controller';
import { createPokemonService } from './createPokemon.service';


@Module({
  imports: [],
  controllers: [createPokemonController],
  providers: [createPokemonService],
})
export class CreatePokemonModule {}
