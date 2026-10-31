export const formatUser = ({ id, name, email, address: { city } }) =>
  `${id}. ${name} | ${email} | ${city}`;