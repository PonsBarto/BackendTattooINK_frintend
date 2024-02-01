import axios from "axios";

//llamada a la api para obtener los datos de los personajes
export const bringAllCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    return res.data.results;
}


