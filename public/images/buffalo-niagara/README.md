# Buffalo Niagara photos

The client did not deliver Buffalo Niagara–specific photos with the onboarding
checklist. Until those arrive, the Buffalo location page reuses imagery from
our Clarence Center flagship.

When the client sends Buffalo photos, drop them into this directory organized
the same way as `../clarence-center/` (hero/, exterior/, interior/, units/,
drive-up/, security/, signage/), run the photo pipeline to convert to WebP,
and update `src/lib/images.ts` to point the `buffalo-niagara` entries at the
new files.
