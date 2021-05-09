const caesar = (str, shift, action) => {
  let arr = str.split("");
  if (shift > 26) {
    shift = shift - 26 * Math.floor(shift / 26);
  }
  if (action === "decode")
    return (
      arr
        .map((e) => {
          let codeChar = Number(e.codePointAt(0));

          if (codeChar > 64 && codeChar < 91) {
            let char = String.fromCodePoint(codeChar - Number(shift));
            if (char < "A") char = String.fromCharCode(char.charCodeAt(0) + 26);
            return char;
          } else if (codeChar > 96 && codeChar < 123) {
            let char = String.fromCodePoint(codeChar - Number(shift));
            if (char < "a") char = String.fromCharCode(char.charCodeAt(0) + 26);
            return char;
          } else return e;
        })
        .join("") + "\n"
    );
  if (action === "encode")
    return (
      arr
        .map((e) => {
          let codeChar = Number(e.codePointAt(0));

          if (codeChar > 64 && codeChar < 91) {
            let char = String.fromCodePoint(codeChar + Number(shift));
            if (char > "Z") char = String.fromCharCode(char.charCodeAt(0) - 26);
            return char;
          } else if (codeChar > 96 && codeChar < 123) {
            let char = String.fromCodePoint(codeChar + Number(shift));
            if (char > "z") char = String.fromCharCode(char.charCodeAt(0) - 26);
            return char;
          } else return e;
        })
        .join("") + "\n"
    );
};

module.exports = { caesar };
