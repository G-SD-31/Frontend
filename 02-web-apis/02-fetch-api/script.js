// --------- Endpoint ---------
// Ein Endpoint ist eine konkrete Adresse einer API.
// An diese Adresse schicken wir einen Request. Hier liefert /users/ die Benutzerdaten.
const url = 'https://jsonplaceholder.typicode.com/users/';

// --------- Benutzernamen auf der Seite anzeigen ---------
// data bekommt beim Aufruf das gelesene Benutzer-Array.
const renderUsers = (data) => {
  const body = document.querySelector('body');
  const list = document.createElement('ul');
  body.appendChild(list);

  for (const user of data) {
    const item = document.createElement('li');
    item.textContent = user.name;
    list.appendChild(item); // Jeder Name bekommt einen Listeneintrag in der ul.
  }
};

// --------- Promise mit then, catch und finally ---------
const request = fetch(url); // fetch gibt ein Promise zurück, noch keine Benutzerdaten.

request
  .then((response) => {
    // Auch bei einem HTTP-Fehler wie 404 liefert fetch eine Response.
    if (!response.ok) {
      throw new Error('Fehler');
    }

    // Das Promise zurückgeben, damit der nächste Callback die gelesenen Daten bekommt.
    return response.json();
  })
  .then((data) => {
    console.log(data); // Array mit Benutzern aus der API-Antwort.

    renderUsers(data);
  })
  .catch((error) => {
    console.log(error.message); // Bei HTTP-Fehlern: Fehler; sonst abhängig vom Fehler.
  })
  .finally(() => {
    console.log('Promise ended'); // Promise ended (nach Erfolg oder Fehler).
  });

// -----------------------------------------------------------------------------
//                         async und await
// -----------------------------------------------------------------------------
const loadUsers = async () => {
  try {
    // await pausiert diesen Funktionsaufruf. Der Code außerhalb läuft weiter.
    const response = await fetch(url);
    console.log(response); // Response-Objekt; Status und Inhalt hängen von der Antwort ab.

    if (!response.ok) {
      throw new Error('Fehler');
    }

    // Auch das Lesen und Umwandeln des JSON-Inhalts ist asynchron.
    const data = await response.json();
    console.log(data); // Array mit Benutzern aus der API-Antwort.
    renderUsers(data);
  } catch (error) {
    console.log(error.message); // Bei HTTP-Fehlern: Fehler; sonst abhängig vom Fehler.
  } finally {
    console.log('Promise ended'); // Promise ended (nach Erfolg oder Fehler).
  }
};

// --------- Aufruf und Reihenfolge ---------
loadUsers(); // Startet die Funktion und gibt ein Promise zurück.

console.log('ENDE'); // ENDE (vor den Ausgaben nach await).
// Beide Varianten starten einen eigenen Request und laufen unabhängig voneinander.
// ENDE erscheint zuerst. Danach können sich die Ausgaben beider Varianten mischen.
// Innerhalb der async-Variante: Response-Objekt → Benutzer-Array → Promise ended.
// Beide Varianten rufen renderUsers auf. Bei Erfolg erscheinen deshalb zwei Listen.
