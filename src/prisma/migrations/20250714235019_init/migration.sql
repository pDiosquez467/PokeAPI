-- CreateTable
CREATE TABLE "combates" (
    "id" SERIAL NOT NULL,
    "entrenador1_id" INTEGER NOT NULL,
    "pokemon1_id" INTEGER NOT NULL,
    "pokemon2_id" INTEGER NOT NULL,
    "entrenador2_id" INTEGER NOT NULL,
    "lugar" VARCHAR(50),
    "evento" VARCHAR(100),
    "ganador_id" INTEGER,
    "fecha" DATE,
    "rondas" INTEGER,
    "descripcion" VARCHAR(255),

    CONSTRAINT "combates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entrenadores" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "origen" VARCHAR(50),
    "escuela" VARCHAR(50),
    "medallas" VARCHAR(255),
    "pokemon_default" INTEGER,
    "edad" INTEGER,
    "experiencia" INTEGER,

    CONSTRAINT "entrenadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "habilidades" VARCHAR(255),
    "nivel_poder" INTEGER,
    "imagen" VARCHAR(255),
    "altura" REAL NOT NULL,
    "peso" REAL NOT NULL,
    "descripcion" VARCHAR(255),
    "evoluciona_de" INTEGER,
    "evoluciona_a" INTEGER,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "combates" ADD CONSTRAINT "combates_entrenador1_id_fkey" FOREIGN KEY ("entrenador1_id") REFERENCES "entrenadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "combates" ADD CONSTRAINT "combates_entrenador2_id_fkey" FOREIGN KEY ("entrenador2_id") REFERENCES "entrenadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "combates" ADD CONSTRAINT "combates_ganador_id_fkey" FOREIGN KEY ("ganador_id") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "combates" ADD CONSTRAINT "combates_pokemon1_id_fkey" FOREIGN KEY ("pokemon1_id") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "combates" ADD CONSTRAINT "combates_pokemon2_id_fkey" FOREIGN KEY ("pokemon2_id") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "entrenadores" ADD CONSTRAINT "entrenadores_pokemon_default_fkey" FOREIGN KEY ("pokemon_default") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "fk_evoluciona_a" FOREIGN KEY ("evoluciona_a") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "fk_evoluciona_de" FOREIGN KEY ("evoluciona_de") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
