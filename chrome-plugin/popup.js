let urlTarget = ''
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  let getButton  = document.getElementById('get_consent')
  let urlInput  = document.getElementById('url')
  registerClickEvent(getButton);
  registerInputEvent(urlInput);
});
function registerClickEvent(getButton) {
  getButton.addEventListener("click", async () => {
    fetch(urlTarget).then(r => console.log(r)).catch(() => console.log('error'));
  });
}

function registerInputEvent(urlInput) {
  urlInput.addEventListener("input", async (e) => {
    urlTarget = e.srcElement.value;
  });
}

