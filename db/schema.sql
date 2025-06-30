CREATE TABLE pokemons (
    id SERIAL INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    habilidades VARCHAR(255),  
    nivel_poder INT CHECK (nivel_poder BETWEEN 0 AND 100),
    imagen VARCHAR(255),
    altura REAL,
    peso REAL,
    descripcion VARCHAR(255),
    evoluciona_de INT REFERENCES pokemons(id),
    evoluciona_a INT REFERENCES pokemons(id)
);

CREATE TABLE entrenadores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    origen VARCHAR(50),
    escuela VARCHAR(50),
    medallas VARCHAR(255),
    pokemon_default INT REFERENCES pokemons(id),
    edad INT CHECK (edad >= 0),
    experiencia INT CHECK (experiencia >= 0)
);

CREATE TABLE combates (
    id SERIAL PRIMARY KEY,
    entrenador1_id INT REFERENCES entrenadores(id),
    pokemon1_id INT REFERENCES pokemons(id),
    pokemon2_id INT REFERENCES pokemons(id),
    entrenador2_id INT REFERENCES entrenadores(id),
    lugar VARCHAR(50),
    evento VARCHAR(100),
    ganador_id INT REFERENCES pokemons(id),
    fecha DATE,
    rondas INT CHECK (rondas > 0),
    descripcion VARCHAR(255)
);
