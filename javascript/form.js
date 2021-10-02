const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#correoEmpresa");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // prevenir el reloaded de la pagina

  const form = new FormData(this);

  $buttonMailto.setAttribute(
    "href",
    `mailto:santyago5395@gmail.com?subject= ${form.get(
      "asunto"
    )} &body= [nombre: ${form.get("name")}| Correo: ${form.get("email")}]:
     ${form.get("message")}`
  );

  $buttonMailto.click();
}
