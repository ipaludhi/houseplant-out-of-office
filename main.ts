// The Houseplant Out-of-Office — entry program (Node 22, stdlib only).
// Writes one original out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The line: a plant that died during a meeting about
// synergy, whose last words were "water me" — the neglect is the joke,
// the meeting is the murder weapon, and the last words are the punchline.
// Gate self-check: 1-120 chars enforced below, so a future edit that
// lengthens the line fails loudly instead of shipping an invalid entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Automatic reply: your plant is dead. It died during a meeting about synergy. Its last words were \'water me\'.';

// Writes exactly the line, no trailing newline: the gate counts characters
// (1-120), so the file is 108 characters / 108 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`line must be 1-120 characters, got ${LINE.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
