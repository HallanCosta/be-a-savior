export type User = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

/**
 * Format phone number to (00) 00000-0000
 * @param {string} v - Value input onChange
 */
function phoneMasked(v: string) {
  var len = 0;

  v = v.replace(/\D/g, "");
  v = v.replace(/\-/g, "");
  v = v.replace(/\./g, "");

  len = v.length;

  v = v.replace(/^(\d\d)(\d)/g, "($1) $2");

  if (len > 10) {
    v = v.replace(/(\d{5})(\d)/, "$1-$2").slice(0, 15);
  } else {
    v = v.replace(/(\d{4})(\d)/, "$1-$2").slice(0, 14);
  }

  return v;
}

/**
 * Format phone number to 00000000000
 * @param {string} v - Value input onChange
 */
function phoneUnMasked(v: string) {
  return v.replace(/[^\d]/g, "");
}

export const phoneFormat = {
  phoneMasked: function(value: string) {
    const formattedPhone = phoneMasked(value);
    return formattedPhone;
  },

  phoneUnMasked: function(value: string) {
    const unFormattedPhone = phoneUnMasked(value);
    return unFormattedPhone;
  }
}