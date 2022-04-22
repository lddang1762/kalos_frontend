//TODO: fetch actual ICON

const getIconURI = (symbol: string | undefined): string => {
  if (!symbol) {
    return "https://gravatar.com/avatar/cd9ada7741?d=identicon";
  }
  return "";
};

export default getIconURI;
