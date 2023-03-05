function clean(value) {
  if (typeof value === 'string') {
    if (value.length === 0) return null;

    if (!isNaN(+value)) return parseInt(value)
  }

  return value;
}

function formToObject(form) {
  let formData = new FormData(form);

  let obj = {};

  let entries = formData.entries();

  for (let entry of entries) obj[entry[0]] = clean(entry[1]);

  return obj;
}

export function submitHandler(callback) {
  return function (event) {
    event.preventDefault();

    callback(formToObject(event.target));
  };
}