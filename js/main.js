
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAII? TEH DEDES!, makasih yaa selalu ada buat aka, terimakasih banget kalo aka ada apa apa sok lari ke teteh, teh dedes jangan asing karna udaa di anggap kaka kandung sendiri, SEMOGA SUKA COKLATNYAA YAA').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};