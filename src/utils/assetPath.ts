// Builds a correct URL for public assets for both root domains and GitHub Pages base paths.
// BASE_URL always ends with a trailing slash, so we must not add an extra slash.
export function assetPath(path: string): string {
  const clean = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
