export const getAvatarUrl = (color: string | null = null) => {
  if (!color) {
    return `https://placehold.co/100x100/gray/gray`;
  }

  return `https://placehold.co/100x100/${color}/${color}`;
};
