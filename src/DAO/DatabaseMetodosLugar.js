import Database from "../infra/configDb.js";

class DatabaseMetodosLugar {

    static createTableLugar() {
        const lugar = `CREATE TABLE IF NOT EXISTS lugar (
            id_lugar INTEGER PRIMARY KEY,
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

    static postLugar(lugar) {
        const query = `INSERT INTO lugar (nome_do_lugar, bairro, descricao, link) VALUES (?, ?, ?, ?)`;

        const body = Object.values(lugar);

        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if(e){
                    reject(e.message);
                } else {
                    resolve({ "Mensagem": "Lugar adicionado com sucesso!" })
                }
            })
        })
    };

    static updateLugarById(lugar, id) {
        const query = `UPDATE lugar SET (nome_do_lugar, bairro, descricao, link) = (?, ?, ?, ?) WHERE id_lugar = ?`;

        const body = Object.values(lugar);

        return new Promise( (resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve( {"Mensagem": "Lugar alterado com sucesso!"})
                }
            })
        })
    };

    static getLugarById(id) {
        const query = `SELECT * FROM lugar WHERE id_lugar = ?`;

        return new Promise( (resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e){
                    reject(e.message);
                } else {
                    resolve(result);
                }
            })
        })
    };

    static getLugares() {
        const query = `SELECT * FROM lugar`;

        return new Promise ( (resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e){
                    reject(e.message);
                } else {
                    resolve(result);
                }
            })
        })
    };

    static deleteLugarById(id) {
        const query = `DELETE FROM lugar WHERE id_lugar = ?`;

        return new Promise ( (resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e){
                    reject(e.message);
                } else {
                    resolve({"Mensagem": "Lugar deletado com sucesso!"})
                }
            })
        })


    }

}

export default DatabaseMetodosLugar;