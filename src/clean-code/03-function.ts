(() => {
  // función para obtener información de una película por Id
  function getinfoMovie(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getInfoActor(actorId: string) {
    console.log({ actorId });
  }

  // funcion para obtener el bio del actor por el id
  function getBioActor(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  interface movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }
})();
