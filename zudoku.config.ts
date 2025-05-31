export default {
  title: "Marketplace API",
  description: "Документація API для торгової платформи",
  // Важно: указываем basePath с завершающим слешем
  basePath: "/marketplace-docs/",
  openapi: {
    file: "./marketplace-api.yaml"
  },
  navigation: [
    // Здесь можно использовать относительные ссылки — тогда zudoku подставит basePath автоматически
    { label: "About", href: "about" },
    { label: "Installation", href: "installation" },
    { label: "Authorization", href: "authorization" }
  ],
  sidebar: {
    "/": [
      { type: "doc", id: "installation", label: "Installation" },
      { type: "doc", id: "authorization", label: "Authorization" },
      { type: "doc", id: "about", label: "About" }
    ]
  }
}
