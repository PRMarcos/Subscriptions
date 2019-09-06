export const validateForm = values => {
  let errors = {};

  if (values.Name.trim() === "") {
    errors.Name = "Nome precisa ser preenchido";
  }

  if (values.Church.trim() === "") {
    errors.Church = "Igreja precisa ser preenchida";
  }

  if (values.Age.trim() === "") {
    errors.Age = "Idade precisa ser preenchida";
  }

  if (values.City.trim() === "") {
    errors.City = "Cidade precisa ser preenchida";
  }

  if (values.Phone.trim() === "") {
    errors.Phone = "Telefone precisa ser preenchido";
  }

  if (values.PaymentDay.trim() === "") {
    errors.PaymentDay = "Data de pagamento precisa ser preenchida";
  }
  return errors;
};
