export default {
  title: "Marketplace API",
  description: "Документація API для торгової платформи",
<<<<<<< HEAD
  basePath: "/marketplace-docs",
  outputDir: "./dist", // обязательно для GitHub Pages
  docsDir: "./docs",    // 🔧 указываем путь к MDX-файлам
=======
  basePath: "/marketplace-docs", // добавляем basePath для GitHub Pages
>>>>>>> fd730112151ec19050714d4f7211fd8aec73f560
  openapi: {
    file: "./marketplace-api.yaml"
  },
  navigation: [
    { label: "About", href: "/about" }
  ],
  sidebar: {
    "/": [
      { type: "doc", id: "installation", label: "Installation" },
      { type: "doc", id: "authorization", label: "Authorization" },
      { type: "doc", id: "about", label: "About" }
    ]
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> fd730112151ec19050714d4f7211fd8aec73f560
