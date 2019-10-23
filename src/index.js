import "./style.css";
{
  let allQuotesObject;

  const loadJSON = async () => {
    const url = `./src/assets/data/quotes.json`;
    const response = await fetch(url);
    const quotesObject = await response.json();
    allQuotesObject = quotesObject;
  }

  const getRandomQuote = () => {
    let randomNumber = Math.floor((Math.random() * allQuotesObject.quotes.length));
    let randomQuote = allQuotesObject.quotes[randomNumber].quote;
    console.log(randomQuote);

    const $quote = document.querySelector('.quoterandom');
    console.log($quote);
    $quote.innerHTML = randomQuote;
  };

  // const getAllQuotes = quotesObject => {
  //   quotes.forEach(quote => {
  //     const $li = document.createElement(`li`);
  //     $li.classList.add(`xxx`);

  //     $li.innerHTML = `  `;
  //     $list.appendChild($li);
  //   })
  // }

  const init = () => {
    console.log(`test`);
    loadJSON();

    const $randomButton = document.querySelector('.quotebutton__random');
    $randomButton.addEventListener('click', getRandomQuote);

    // getAllQuotes();
  };

  init();
}
