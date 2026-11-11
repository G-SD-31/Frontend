// --------- Rezeptdaten ---------

const recipes = [
  {
    name: 'Pizza',
    prepTimeMinutes: 20,
    ingredients: ['Pizzateig', 'Tomaten', 'Käse'],
  },
  {
    name: 'Tomatensuppe',
    prepTimeMinutes: 10,
    ingredients: ['Tomaten', 'Zwiebel'],
  },
];

// --------- Rückblick: vorhandene Elemente ändern ---------

// Diese Beispiele bleiben auskommentiert: Das frühere h2 mit der ID
// recipe-name wurde durch die dynamisch erzeugten Karten ersetzt.
// Zum Ausprobieren zuerst <h2 id="recipe-name">Pizza</h2> in main ergänzen.
// Ohne dieses Element liefert die Suche null; textContent würde einen Fehler auslösen.
// const heading = document.querySelector('#recipe-name');
// heading.textContent = recipes[0].name;
// heading.setAttribute('class', 'heading'); // Die CSS-Klasse färbt den Hintergrund.

// Bei getElementById steht die ID ohne Hashtag-Zeichen:
// document.getElementById('recipe-name').textContent = 'Ofengemüse';

// --------- Eine Rezeptkarte erstellen ---------

const main = document.querySelector('main');

// Beim Aufruf bekommt recipe das aktuelle Rezeptobjekt aus der Schleife.
const createRecipeCard = (recipe) => {
  const card = document.createElement('article');
  const title = document.createElement('h2');
  const time = document.createElement('p');
  const ingredientList = document.createElement('ul');
  const button = document.createElement('button');

  // Tailwind-Klassen gestalten die dynamisch erzeugten Elemente.
  card.setAttribute('class', 'rounded-2xl border border-stone-200 bg-white p-6 shadow-sm');
  title.setAttribute('class', 'mb-2 text-2xl font-bold text-emerald-900');
  time.setAttribute('class', 'mb-5 text-sm text-stone-600');
  ingredientList.setAttribute('class', 'mt-5 list-disc space-y-1 pl-5 text-stone-700');
  button.setAttribute('class', 'rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700');

  // Der Event Listener läuft erst beim Klick. Jede Karte hat ihre eigene Liste.
  button.addEventListener('click', (event) => {
    console.log(event); // Das Event-Objekt des Klicks; Details hängen vom Klick und Browser ab.

    // Eine ausgeblendete Liste einblenden, eine sichtbare Liste wieder ausblenden.
    if (ingredientList.hidden) {
      ingredientList.hidden = false;
    } else {
      ingredientList.hidden = true; // Anfangs unsichtbar, aber weiterhin im DOM.
    }
  });

  // Für jede Zutat entsteht ein eigener Listeneintrag.
  for (const ingredient of recipe.ingredients) {
    const item = document.createElement('li');
    item.textContent = ingredient;
    ingredientList.appendChild(item);
  }

  title.textContent = recipe.name;
  time.textContent = 'Prep Time: ' + recipe.prepTimeMinutes;
  button.textContent = 'Zutaten anzeigen';
  ingredientList.hidden = true; // Anfangs unsichtbar, aber weiterhin im DOM.

  // Die Reihenfolge beim Anhängen bestimmt die Reihenfolge in der Karte.
  card.appendChild(title);
  card.appendChild(time);
  card.appendChild(button);
  card.appendChild(ingredientList);
  main.appendChild(card); // Erst jetzt erscheint die fertige Karte auf der Seite.
};

// --------- Alle Rezepte anzeigen ---------

for (const recipe of recipes) {
  createRecipeCard(recipe);
}
