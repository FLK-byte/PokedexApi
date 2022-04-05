import { Module } from '@nestjs/common';
import { deletePokemonController } from './deletePokemon.controller';
import { deletePokemonService } from './deletePokemon.service';

@Module({
    imports: [],
    controllers: [deletePokemonController],
    providers: [deletePokemonService],
})

export class DeletePokemonModule { }
