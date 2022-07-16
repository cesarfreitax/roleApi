import Database from "../infra/configDb.js";

class DatabaseMetodosLugar {

    static createTableLugar() {
        const lugar = `CREATE TABLE IF NOT EXISTS lugar (
            id_lugar INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_do_lugar VARCHAR,
            bairro VARCHAR,
            descricao VARCHAR,
            link VARCHAR
        )`

        return new Promise((resolve, reject) => {
            Database.run(lugar, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve('Tabela criada com sucesso!')
                }
            })
        })
    }

}

export default DatabaseMetodosLugar;