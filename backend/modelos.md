## `Pokemons`

| Campo            | Tipo de dato sugerido | Descripción                                 |
|------------------|------------------------|---------------------------------------------|
| `id`             | UUID / Integer         | Identificador único del Pokémon             |
| `nombre`         | String                 | Nombre del Pokémon                          |
| `tipo`           | String / Array         | Tipo o tipos del Pokémon (ej. Agua, Fuego)  |
| `habilidades`    | Array<String>          | Lista de habilidades especiales             |
| `nivel_poder`    | Integer                | Nivel de poder del Pokémon (0–100 aprox.)   |
| `imagen_url`     | String (URL)           | URL de imagen oficial o fan-art             |
| `altura`         | Float                  | Altura del Pokémon en metros                |
| `peso`           | Float                  | Peso del Pokémon en kilogramos              |
| `descripcion`    | String                 | Breve descripción o historia                |
| `evoluciona_de`  | ID (opcional)          | ID del Pokémon anterior (si evoluciona)     |
| `evoluciona_a`   | ID (opcional)          | ID del Pokémon siguiente (si evoluciona)    |

---

## `Entrenadores`

| Campo             | Tipo de dato sugerido | Descripción                                        |
|-------------------|------------------------|----------------------------------------------------|
| `id`              | UUID / Integer         | Identificador único del entrenador                 |
| `nombre`          | String                 | Nombre completo del entrenador                     |
| `nacionalidad`    | String                 | País o región de origen                            |
| `escuela`         | String (opcional)      | Escuela de entrenamiento Pokémon                   |
| `medallas`        | Array<String>          | Lista de medallas obtenidas                        |
| `pokemon_default` | ID                     | ID del Pokémon que lidera su equipo                |
| `edad`            | Integer                | Edad del entrenador                                |
| `experiencia`     | Integer (años)         | Años de experiencia como entrenador             

---

## ⚔️ `Combates`

| Campo              | Tipo de dato sugerido | Descripción                                             |
|--------------------|------------------------|---------------------------------------------------------|
| `id`               | UUID / Integer         | Identificador único del combate                         |
| `entrenador_1_id`  | ID                     | ID del primer entrenador                                |
| `pokemon_1_id`     | ID                     | Pokémon elegido por el entrenador 1                     |
| `pokemon_2_id`     | ID                     | Pokémon elegido por el entrenador 2                     |
| `entrenador_2_id`  | ID                     | ID del segundo entrenador                               |
| `lugar`            | String                 | Ubicación del combate                                   |
| `evento`           | String (opcional)      | Nombre del torneo o evento especial                     |
| `ganador_id`       | ID                     | ID del Pokémon o entrenador ganador                     |
| `fecha`            | Date                   | Fecha del combate                                       |
| `rondas`           | Integer                | Número de rondas que duró el combate                    |
| `resumen`          | String (opcional)      | Breve resumen del combate o comentarios destacados      |

