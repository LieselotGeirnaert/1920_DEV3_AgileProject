import "./style.css";
{


  const loadJSON = async () => {
    const url = `./src/assets/data/quotes.json`;

    const response = await fetch(url);
    const quotesObject = await response.json();
    getRandomQuote(quotesObject);
  }

  const getRandomQuote = quotesObject => {
    console.log(quotesObject.quotes.length);

    let randomNumber = Math.floor((Math.random() * quotesObject.quotes.length));
    let randomQuote = quotesObject.quotes[randomNumber].quote;
    console.log(randomQuote);
  };

  const getAllQuotes = quotesObject => {
    quotes.forEach(quote => {
      const $li = document.createElement(`li`);
      $li.classList.add(`xxx`);

      $li.innerHTML = `  `;
      $list.appendChild($li);
    })
  }

  const init = () => {
    console.log(`test`);
    loadJSON();

    getAllQuotes();
  };

  init();
}
