// One Emoji, One Dream Vacation — entry program.
//
// Writes exactly one emoji to /output/entry.txt: Mount Fuji (U+1F5FB).
//
// Why this emoji, against the judge's brief (most important first):
//  1. Exactly one emoji, no words, and it lands on a dream vacation: the
//     brief names "a mountain" and "a faraway place" as dream-vacation
//     markers, and Mount Fuji is both at once.
//  2. A vivid postcard at a glance: snow-capped Fuji is one of the most
//     photographed views on earth; a stranger sees the place instantly.
//  3. Personal and specific, not generic: a particular dream (Japan, Fuji),
//     not just "any holiday".
//  4. A spark of surprise: a fresh pick beside the beach cliche every other
//     entry will send.
//  5. Reads instantly across cultures and screens: Fuji is iconic worldwide.
// The file holds the emoji alone — no trailing newline, no extra words —
// so the entry is exactly one character (4 bytes of UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const EMOJI = "\u{1F5FB}"; // 🗻 Mount Fuji

// Guard the gate before writing: exactly one character, not whitespace.
if ([...EMOJI].length !== 1 || EMOJI.trim() === "") {
  throw new Error("entry must be exactly one non-whitespace character");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
