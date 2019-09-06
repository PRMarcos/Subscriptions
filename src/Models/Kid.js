export const ValidateKid = kid => {
  let errors = {};

  if (kid.KidName.trim() === "") {
    errors.KidName = "Nome precisa ser preenchido";
  }

  if (kid.KidChurch.trim() === "") {
    errors.KidChurch = "Igreja precisa ser preenchida";
  }

  if (kid.KidAge.trim() === "") {
    errors.KidAge = "Idade precisa ser preenchida";
  }

  if (kid.KidCity.trim() === "") {
    errors.KidCity = "Cidade precisa ser preenchida";
  }

  if (kid.KidParent.trim() === "") {
    errors.KidParent = "Responsável precisa ser preenchido";
  }

  if (kid.Phone.trim() === "") {
    errors.Phone = "Telefone precisa ser preenchido";
  }

  if (kid.PaymentDay.trim() === "") {
    errors.PaymentDay = "Data de pagamento precisa ser preenchida";
  }

  return errors;
};
