import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { appService } from './app.service';
import { CreatePokemonModule } from './modules/CreatePokemon/createPokemon.module';
import { DeletePokemonModule } from './modules/DeletePokemon/deletePokemon.module';
import { FetchPokemonModule } from './modules/FetchPokemon/fetchPokemon.module';
import { SearchPokemonsModule } from './modules/SearchPokemon/searchPokemons.module';


@Module({
  imports: [SearchPokemonsModule,FetchPokemonModule,CreatePokemonModule,DeletePokemonModule],
  controllers: [appController],
  providers: [appService],
})
export class AppModule {}
