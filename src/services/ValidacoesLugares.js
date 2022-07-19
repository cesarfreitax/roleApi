export class ValidacoesFornecedores {
        
    static notEmpty(field){
        if (field.length > 0){
            return true
        } else {
            return false
        }
    }

    static validaCEP(cep){
        if ((cep.toString()).length = 8){
            return true
        } else {
            return false
        }
    }
    
}