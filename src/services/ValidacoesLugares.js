export class ValidacoesLugares {
        
    static notEmpty(field){
        if (field.length > 0){
            return true
        } else {
            return false
        }
    }

    static validaCEP(cep){
        const cepNum = parseInt(cep)
        if (cep.length == 8 && cepNum == cep){
            return true
        } else {
            return false
        }
    }

}