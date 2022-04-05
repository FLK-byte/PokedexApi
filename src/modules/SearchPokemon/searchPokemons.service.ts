import { Injectable } from '@nestjs/common';
import { prisma } from '../../db/prisma';
import { searchPokemons } from './dto/searchPokemons.dto';

@Injectable()
export class ProcurarPokemonsService {
  async getHello(body: searchPokemons) {
    console.log(body.amount)
    
    if (body.amount >= 0) {
      const dados = await prisma.pokemons.findMany({
        take: Number(body.amount),
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

    const dados = await prisma.pokemons.findMany({
      take: 10,
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
