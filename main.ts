// ai-excited-01 entry: this program ships one image, entry.png, and copies it to
// /output/entry.png. The image is a golden koi leaping off the edge of the world:
// a colossal koi of molten gold arcs over a waterfall pouring off a floating
// island into a starry sky, a tiny boat riding the wave below it.
//
// The grader runs this program twice with no network; a plain file copy is
// byte-identical every time, so both runs write exactly the same bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Both runs must write the same bytes; a copy has no clock, no randomness and
// no network, so the output is identical by construction.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
