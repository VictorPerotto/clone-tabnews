import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as Sum;");
  console.log(result.rows);
  response.status(200).json({ descricao: "Funcionou" });
}

export default status;
