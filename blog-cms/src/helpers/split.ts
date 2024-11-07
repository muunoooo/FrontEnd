export const splitStr = (text: string, lenght: number): string => {
  if (text.length <= lenght) {
    return text;
  } else {
    return text.substring(0, lenght) + "...";
  }
};
