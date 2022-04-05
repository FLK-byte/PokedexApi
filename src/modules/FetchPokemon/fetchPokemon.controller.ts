import { Body, Controller, Get, Post } from '@nestjs/common';
import { fetchPokemon } from './dto/fetchPokemon.dto';
import { fetchPokemonService } from './fetchPokemon.service';

@Controller('pokemon')
export class fetchPokemonController {
  constructor(private readonly FPService: fetchPokemonService) {}

  @Post()
  getHello(@Body() body: fetchPokemon) {
    return this.FPService.getHello(body);
  }

  @Get()
  getLast() {
    return this.FPService.getLast();
  }
}
