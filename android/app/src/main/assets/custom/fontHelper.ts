export const getFontFamily = (font = 'Inter', weight: string) => {
  switch (weight) {
    case '100':
      return `${font}-Thin`;
    case '200':
      return `${font}-ExtraLight`;
    case '300':
      return `${font}-Light`;
    case '400':
      return `${font}-Regular`;
    case '500':
      return `${font}-Medium`;
    case '600':
      return `${font}-SemiBold`;
    case '700':
      return `${font}-Bold`;
    case '800':
      return `${font}-ExtraBold`;
    case '900':
      return `${font}-Black`;
    default:
      return `${font}-Regular`;
  }
};
