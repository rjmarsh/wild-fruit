export const port = process.env.ST_PORT || 8888;

function configError(message) {
  console.error(message);
  process.exit(1);
}
