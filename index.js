#!/usr/bin/env node

const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const WHITE = "\x1b[37m";

const cText = (text, color) => {
  if (color == null) {
    color = WHITE;
  }
  return color + text + RESET;
};
console.log(cText("###################################", YELLOW));
console.log(cText("  Hello!", GREEN));
console.log(cText("  I'm username, some call me firstname!", YELLOW));
console.log(cText(`  GitHub: https://github.com/username`, WHITE));
console.log(cText("  Have a great life!", GREEN));
console.log(cText("###################################", YELLOW));
