export const validatePhone = (value) => {

  if (value.length <= 10) return false;
  if (/(^(\+8801|8801|01|1))[1|3-9]{1}(\d){8}$/i.test(value))
    return true;
  return false;
}