interface FooterItem {
  title: string;
  links: { [key: string]: string };
}

const FooterItems: FooterItem[] = [
  {
    title: "About",
    links: {
      "Contact Us": "#",
      FAQ: "#",
      "White Paper": "#",
    },
  },
  {
    title: "Developers",
    links: {
      Github: "#",
      Documentation: "#",
      Audtis: "#",
    },
  },
  {
    title: "Community",
    links: {
      Telegram: "#",
      Discord: "#",
      Facebook: "#",
      Twitter: "#",
    },
  },
];

export default FooterItems;
