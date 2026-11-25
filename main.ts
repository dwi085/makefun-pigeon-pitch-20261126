import { mkdirSync, writeFileSync } from "node:fs";

// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// One line, at most 200 characters, in English: the elevator pitch a city
// pigeon gives to investors for its startup.
// Why this line: it is unmistakably a pigeon pitching a startup ("billboards
// on statues, paid in crumbs"), it lands two jokes fast ("zero churn — we eat
// it" and "my seed round is literally seeds"), and the angle — statue-top
// billboards monetised in crumbs — is one no other pigeon pitch uses.
const PITCH =
  "I'm a city pigeon pitching my startup: billboards on statues, paid in crumbs. Forty million daily users, zero churn — we eat it. My seed round is literally seeds.";

// The sealed scorer only accepts UTF-8 text of 1 to 200 characters, not
// only whitespace. Fail loudly here instead of shipping an invalid entry.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 chars, got ${PITCH.length}`);
}

// The grader runs from its own cwd as uid 65534, so write to the absolute
// /output path. Never delete /output itself — only ensure it exists.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
