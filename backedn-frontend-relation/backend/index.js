const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.static('dist'))

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/jokes', (req, res) => {
  const jokes = {
    jokes: [
      {
        id: 1,
        joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
        author: "Author1",
        category: "Science"
      },
      {
        id: 2,
        joke: "Why don't scientists trust atoms? Because they make up everything!",
        author: "Author2",
        category: "Science"
      },
      {
        id: 3,
        joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        author: "Author3",
        category: "Humor"
      },
      {
        id: 4,
        joke: "I threw a boomerang a few years ago. I now live in constant fear.",
        author: "Author4",
        category: "Humor"
      },
      {
        id: 5,
        joke: "Why don't skeletons fight each other? They don't have the guts.",
        author: "Author5",
        category: "Halloween"
      }
    ]
  };
  res.json(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
