import { Body, Controller, Get, Post } from '@nestjs/common';
import { searchPokemons } from './dto/searchPokemons.dto';
import { ProcurarPokemonsService } from './searchPokemons.service';

@Controller('pokemons')
export class ProcurarPokemonsController {
  constructor(private readonly BPService: ProcurarPokemonsService) {}

  @Post()
  getHello(@Body() body: searchPokemons) {
    return this.BPService.getHello(body);
  }
}
