function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se light mode, add img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Felipe Boross Carvalho, com blusa cinza, cobrindo os olhos por causa da luz."
    )
  } else {
    //se não estive light mode, add img padrão
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Felipe Boross Carvalho, com blusa cinza, sorrindo."
    )
  }
}
