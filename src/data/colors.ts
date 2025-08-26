
export const getColorName = (seed: string) => {
  // Generate a hash code based on the user's name
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const r = ((hash & 0xff) % 155) + 100; // Ensures the red component is within the bright range
  const g = (((hash >> 8) & 0xff) % 155) + 100; // Ensures the green component is within the bright range
  const b = (((hash >> 16) & 0xff) % 155) + 100; // Ensures the blue component is within the bright range

  const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)}`;

  return hexColor;
};
