import { Injectable } from '@nestjs/common';
import { prisma } from '../../db/prisma';
import { createPokemonDto } from './dto/createPokemon.dto';

@Injectable()
export class createPokemonService {
    async createPokemon(body: createPokemonDto) {
        const pokemon = await prisma.pokemons.create({     
            data:{
                Name: body.Name, 
                Pokedex_Number : body.pokedexNumber,
                ATK : body.ATK,
                DEF : body.DEF,
                STA : body.STA,
                Type_1 : body.Type_1,
                Type_2 : body.Type_2,
                STAT_TOTAL : body.STAT_TOTAL

            } 
        })

        const check = await prisma.pokemons.findMany({
            where : {
                Name : body.Name
            }
        })

        console.log(check)

        return pokemon

    }
}
