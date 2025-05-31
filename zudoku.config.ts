export default {
  title: "Marketplace API",
  description: "Документація API для торгової платформи",
  basePath: "/marketplace-docs",
  outputDir: "./dist", // обязательно для GitHub Pages
  docsDir: "./docs",    // 🔧 указываем путь к MDX-файлам
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
}
