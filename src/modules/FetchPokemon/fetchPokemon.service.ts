import { Injectable, Req } from '@nestjs/common';
import { prisma } from '../../db/prisma';
import { fetchPokemon } from './dto/fetchPokemon.dto';

@Injectable()
export class fetchPokemonService {
    async getHello(body: fetchPokemon) {
        if (body.name) {
            const dados = await prisma.pokemons.findMany({
                where: {
                    Name: body.name
                },
                select: {
                    Name: true,
                    Pokedex_Number: true,
                    Type_1: true,
                    Type_2: true,
                    STAT_TOTAL: true,
                    ATK: true,
                    DEF: true,
                    STA: true,
                }
            })
            return dados

        } else if (body.pokedexNumber >= 0) {
            const dados = await prisma.pokemons.findMany({
                where: {
                    Pokedex_Number: Number(body.pokedexNumber)
                },
                select: {
                    Name: true,
                    Pokedex_Number: true,
                    Type_1: true,
                    Type_2: true,
                    STAT_TOTAL: true,
                    ATK: true,
                    DEF: true,
                    STA: true,
                }
            })
            return dados

        } else {

            const dados = await prisma.pokemons.findMany({
                select: {
                    Name: true,
                    Pokedex_Number: true,
                    Type_1: true,
                    Type_2: true,
                    STAT_TOTAL: true,
                    ATK: true,
                    DEF: true,
                    STA: true,
                }
            })
            return dados

            
        }
        

    }
    async getLast(){
        const teste = await prisma.pokemons.findMany({
            select: {
                Name: true,
                Pokedex_Number: true,
                Type_1: true,
                Type_2: true,
                STAT_TOTAL: true,
                ATK: true,
                DEF: true,
                STA: true,
            }
        })

        return teste[teste.length-1].Pokedex_Number
    }
}
