import { Controller, Get } from '@nestjs/common';
import { BuscarPokemonsService } from './app.service';

@Controller('pokemons')
export class BuscarPokemonsController {
  constructor(private readonly BPService: BuscarPokemonsService) {}

  @Get()
  getHello() {
    return this.BPService.getHello();
  }
}
