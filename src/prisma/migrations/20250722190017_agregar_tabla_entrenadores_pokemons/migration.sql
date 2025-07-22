-- CreateTable
CREATE TABLE "entrenadores_pokemons" (
    "entrenador_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,

    CONSTRAINT "entrenadores_pokemons_pkey" PRIMARY KEY ("entrenador_id","pokemon_id")
);

-- AddForeignKey
ALTER TABLE "entrenadores_pokemons" ADD CONSTRAINT "entrenadores_pokemons_entrenador_id_fkey" FOREIGN KEY ("entrenador_id") REFERENCES "entrenadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrenadores_pokemons" ADD CONSTRAINT "entrenadores_pokemons_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
