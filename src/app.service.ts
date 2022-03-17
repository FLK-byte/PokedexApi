import { Injectable } from '@nestjs/common';
import { prisma } from './db/prisma';

@Injectable()
export class BuscarPokemonsService {
  async getHello() {
    const dados = await prisma.pokemons.findMany({
      take:10, 
      select:{Name:true, Pokedex_Number:true}
    })
    
    return dados
  }
}
