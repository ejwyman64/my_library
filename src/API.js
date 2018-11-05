const searchQuery = "lord of the rings";

fetch("https://www.googleapis.com/books/v1/volumes?q=ender%27s%20game.json").then(response => console.log(response));



fetch('https://my-library-220222.firebaseio.com/books.json', {
  method: 'POST',
  body: JSON.stringify({
    author: "Herman Melville",
    title: "Moby Dick",
    pageCount: 585
  })
})