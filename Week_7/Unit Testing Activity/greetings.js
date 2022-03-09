export function greet(name) {
  if (name === null || name === undefined) return 'Hello there!';
  if (typeof name === typeof []) {
    if (name.length > 0) {
      let names = '';
      name.forEach((elm) => {
        names += ', ' + elm;
      });
      return 'Hello' + names;
    }
    return 'Hello there!';
  }
  if (name === name.toUpperCase()) {
    return 'HELLO ' + name + '!';
  }

  return 'Hello, ' + name;
}
