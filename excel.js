const scriptURL = 'https://script.google.com/macros/s/AKfycbywhmmmSFPEKC3rtsopAeynsZ-OnpJYJ_CqFZ9vT1Uw2yzPlPTx2wP-jptMg8BhKok/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You  Very Soon..."))
    .catch(error => console.error('Error!', error.message))
})