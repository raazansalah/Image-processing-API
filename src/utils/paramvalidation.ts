function isValidParam(
  filename: string | undefined,
  width: number | undefined,
  height: number | undefined
): boolean {
  if (filename && width && height && height > 0 && width > 0) {
    return true;
  } else return false;
}

export default isValidParam;
