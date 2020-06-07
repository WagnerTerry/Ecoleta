//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//criar o objetoque irá fazer operações no banco de dados
//construtor ou classe = new
// node src/database/db.js > criar o banco de dados
const db = new sqlite3.Database("./src/database/database.db");

//utilizar o objeto de banco de dados , para nossas operações

module.exports = db;

db.serialize(() => {
  //Criar tabela com sql
  // crase ` > template literals
  // db.run(`
  //       CREATE TABLE IF NOT EXISTS places (
  //           id INTEGER PRIMARY KEY AUTOINCREMENT,
  //           image TEXT,
  //           name TEXT,
  //           address TEXT,
  //           address2 TEXT,
  //           state TEXT,
  //           city TEXT,
  //           items TEXT
  //       );
  //   `);
  //Inserir dados na tabela
  // const query = `
  // INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  // ) VALUES (?,?,?,?,?,?,?);`;
  // const values = [
  //   "http://",
  //   "Colectoria",
  //   "Guilherme Gemballa , Jardim América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos , Lâmpadas",
  // ];
  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Cadastrado com sucesso");
  //   console.log("this");
  // }
  // db.run(query, values, afterInsertData); // afterInsertData passando por referência
  // Consultar dados na tabela
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Aqui estão seus registros");
  //   console.log(rows);
  // });
  // Deletar um dado na tabela
  // db.run(`DELETE FROM places WHERE id = ? `, [1], function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("deletado com sucesso");
  // });
});
