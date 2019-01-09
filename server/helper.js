const cyrillicToTranslit = require("cyrillic-to-translit-js");

const transliterate = text =>
  cyrillicToTranslit({ preset: "usa" }).transform(
    text
      .toLowerCase()
      .replace(/, /g, ",")
      .replace(/[,]/g, "-")
      .replace(/[/.!?;]*/g, ""),
    "-"
  );

module.exports = {
  transliterate
};
