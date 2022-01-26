
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  let getButton  = document.getElementById('get_consent')
  getButton.addEventListener("click", async () => {
    console.log('click button')
  //   fetch("https://www.google.com").then(r => console.log(r)).catch(() => console.log('error'))
  });
});
