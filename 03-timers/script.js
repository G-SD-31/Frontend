// --------- Einen Timer planen und abbrechen ---------
const showMessage = () => {
  console.log('Die Nachricht ist da'); // Keine Ausgabe, weil der Timer unten abgebrochen wird.
};

// Die Funktion übergeben, ohne sie hier selbst aufzurufen.
const timeout = setTimeout(showMessage, 2000);
clearTimeout(timeout);
// Zum Ausprobieren: clearTimeout(timeout) auskommentieren.
// Dann erscheint die Nachricht nach etwa zwei Sekunden.

// --------- Reihenfolge mit setTimeout ---------
const inner = () => {
  console.log('2. inner'); // 2. inner (erst nach „3. outer endet“)
};

const outer = () => {
  console.log('1. outer beginnt'); // 1. outer beginnt
  // Auch mit 0 Millisekunden läuft der Callback erst nach dem aktuellen Code.
  setTimeout(inner, 0);
  console.log('3. outer endet'); // 3. outer endet
};

outer();
// Reihenfolge in der Konsole: 1. outer beginnt → 3. outer endet → 2. inner

// --------- Einen Zähler regelmäßig aktualisieren ---------
const counterOutput = document.querySelector('#counter');
let counter = 0;
counterOutput.textContent = counter; // Auf der Seite steht zuerst 0.

const updateCounter = () => {
  // Dieselbe Variable wird bei jedem Aufruf um eins erhöht.
  counter++;
  counterOutput.textContent = counter; // Auf der Seite: 1 → 2 → 3

  if (counter >= 3) {
    // Die gespeicherte ID beendet weitere Aufrufe dieses Intervalls.
    clearInterval(interval);
  }
};

// Der erste Aufruf kommt nach etwa einer Sekunde, nicht sofort.
// Die Abstände können länger sein; der Zähler misst keine genaue Zeit.
const interval = setInterval(updateCounter, 1000);
// Nach drei Aufrufen bleibt die 3 stehen. Neuladen startet wieder bei 0.
