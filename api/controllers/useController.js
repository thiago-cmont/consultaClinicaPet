const connection = require("../database/connection");
const responseModel = {
  succes: false,
  data: [],
  error: [],
};

module.exports = {
  async getConsultas(req, res) {
    const response = { ...responseModel };
    const [, data] = await connection.query(`
    SELECT * FROM consultas3
    `);
    return res.json(data);
  },

  async getConsulta(req, res) {
    const response = { ...responseModel };
    const { dia, mes } = req.body;
    const [, data] = await connection.query(`
    SELECT * FROM consultas3 WHERE dia='${dia}' AND mes='${mes}'
    `);
    return res.json(data);
  },

  async createConsulta(req, res) {
    const response = { ...responseModel };
    console.log(req.body);
    const { cpf, nome, nomeDoPet, tipoDePet, email, dia, mes, hora } = req.body;
    const [, affectRows] = await connection.query(`
    INSERT INTO consultas3 VALUES ('${nome}', '${email}', '${cpf}', '${nomeDoPet}', '${tipoDePet}', '${hora}', '${dia}', '${mes}')
    `);
    response.succes = affectRows > 0;
    return res.json(response);
  },
};
