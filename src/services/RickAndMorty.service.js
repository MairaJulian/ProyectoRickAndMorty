import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {
    //aca tengo un servicio que es una capa especializada en comunicarse con apis
    async getAllPersonajes(){
        const response = await fetch(API_RM.PERSONAJES());
        //interceptor(para despues interceptar solicitudes y tratarlas de una manera distinta)
        return response.json()
        //esto me va a traer todos los prsonajes
    }

    async getPersonajeById(id){
        const response = await fetch(API_RM.PERSONAJES_BY_ID(id));
        //interceptor(para despues interceptar solicitudes y tratarlas de una manera distinta)
        return response.json()
        //esto me va a traer de a un solo personaje
    }

}

export default new RickAndMortyService()