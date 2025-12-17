export interface Logo {
  url: string;
  src: string;
  alt: string;
}

// Menu Links Interface
export interface Menu {
  title: string;
  url: string;
}

// Auth Links Interface
export interface Auth {
  login: {
    title: string;
    url: string;
  };
  signup: {
    title: string;
    url: string;
  };
}
