export const nav = {
  items: [
    {
      title: "home",
      activePaths: ["/"],
      href: "/",
      authState: "ANY",
      icon: "home",
    },
    {
      title: "My Blog",
      activePaths: ["/blog", "/blog/post/[slug]"],
      href: "/blog",
      authState: "ANY",
      icon: "archive",
    },
    {
      title: "About",
      activePaths: ["/about", "/about-me", "/uses"],
      href: null,
      authState: "ANY",
      icon: "user-4",
      children: {
        items: [
          {
            title: "About Me",
            activePaths: ["/about-me"],
            href: "/about-me",
            authState: "ANY",
          },
          {
            title: "Uses",
            activePaths: ["/uses"],
            href: "/uses",
            authState: "ANY",
          },
          {
            title: "Parks",
            activePaths: ["/parks"],
            href: "/parks",
            authState: "ANY",
          },
          {
            title: "Board Games",
            activePaths: ["/board-games"],
            href: "/board-games",
            authState: "ANY",
          },
        ],
      },
    },
    {
      title: "Projects",
      activePaths: ["/projects"],
      href: "/projects",
      authState: "NONE",
      icon: "resume",
    },
    {
      title: "Models",
      activePaths: ["/models", "/models/model/[slug]"],
      href: "/models",
      authState: "ANY",
      icon: "paper-plane-1",
    },
    {
      title: "Gallery",
      activePaths: ["/gallery", "/gallery/album/[slug]"],
      href: "/gallery",
      authState: "ANY",
      icon: "albums",
    },
    {
      title: "Account",
      activePaths: ["/account"],
      href: null,
      authState: "ANY",
      icon: "user-account",
      children: {
        items: [
          {
            title: "Login",
            activePaths: ["/account/login"],
            href: "/account/login",
            authState: "LOGGED_OUT",
          },
          {
            title: "My Account",
            activePaths: ["/account/my-account"],
            href: "/account/my-account",
            authState: "LOGGED_IN",
          },
          {
            title: "Admin Panel",
            activePaths: ["https://admin.christopherleemiller.me"],
            href: "https://admin.christopherleemiller.me",
            authState: "LOGGED_IN",
            requiredRole: ["ADMINISTRATOR"],
          },
          {
            title: "Logout",
            activePaths: ["/account/logout"],
            href: "/api/auth/signout",
            authState: "LOGGED_IN",
          },
        ],
      },
    },
  ],
};
