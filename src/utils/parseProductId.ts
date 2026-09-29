export function parseProductId(
  value: string | undefined,
): number | null {
  if (value === undefined || !/^\d+$/.test(value)) {
    return null;
  }

  const id = Number(value);
  return id > 0 ? id : null;
}