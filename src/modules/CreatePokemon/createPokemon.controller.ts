import { Body, Controller, Get, Post } from '@nestjs/common';
import { createPokemonDto } from './dto/createPokemon.dto';
import { createPokemonService } from './createPokemon.service';

@Controller('createPokemon')
export class createPokemonController {
  constructor(private readonly CPService: createPokemonService) {}

  @Post()
  getHello(@Body() body: createPokemonDto) {
    return this.CPService.createPokemon(body);
  }
}
