function status(request, response) {
  response.status(200).json({
    descricao: "Funcionou de novo?",
  });
}

export default status;
