const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault(); // prevenir el reloaded de la pagina

  const form = new FormData(this); //guarda el dato

  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    },
  });

  if (response.ok) {
    this.reset();
    alert("Despacho exitoso");
  }
}
