import { prisma } from '../../db/prisma';
import { Injectable } from "@nestjs/common";
import { deletePokemonDto } from "./dto/deletePokemon.dto";

@Injectable()
export class deletePokemonService {
    async delPokemon(body: deletePokemonDto) {
        if (body.pokedexNumber) {
            const dados = await prisma.pokemons.delete({
                where: {
                    Pokedex_Number: Number(body.pokedexNumber)
                }
            })
            return dados
        } else if (body.name) {
            const pk = await prisma.pokemons.findMany({
                where: {
                    Name: body.name
                },
                select: {
                    Pokedex_Number: true
                }
            })
            const dados = await prisma.pokemons.delete({
                where: {
                    Pokedex_Number: pk[0].Pokedex_Number
                }
            })
            return { dados, pk }

        }

    }
}