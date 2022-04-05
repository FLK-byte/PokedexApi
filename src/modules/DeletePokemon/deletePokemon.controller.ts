import { Body, Controller, Post } from "@nestjs/common";
import { deletePokemonService } from "./deletePokemon.service";
import { deletePokemonDto } from "./dto/deletePokemon.dto";

@Controller('deletePokemon')
export class deletePokemonController {
    constructor(private readonly DP: deletePokemonService) { }

    @Post()
    delPokemon(@Body() body: deletePokemonDto) {
        return this.DP.delPokemon(body)
    }
}