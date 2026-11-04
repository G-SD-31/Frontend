// --------- if: Code nur bei erfüllter Bedingung ausführen ---------
const subtotal = 25;

if (subtotal >= 20) {
  console.log('Der Versand ist kostenlos.');
}

console.log('Die Prüfung ist fertig.'); // Läuft auch bei falscher Bedingung.

// --------- if / else: Zwischen zwei Wegen entscheiden ---------
if (subtotal < 20) {
  console.log('Der Versand kostet 2 Euro.');
} else {
  console.log('Der Versand ist kostenlos.');
}

// --------- else if: Eine weitere Bedingung prüfen ---------
// Zum Ausprobieren: subtotal oben auf 0, 15 oder 25 setzen.
if (subtotal === 0) {
  console.log('Es gibt noch keine Bestellung.');
} else if (subtotal < 20) {
  console.log('Der Versand kostet 2 Euro.');
} else {
  console.log('Der Versand ist kostenlos.');
}

// --------- Ternärer Operator: Einen von zwei Werten wählen ---------
// Bedingung ? Wert bei true : Wert bei false
const shippingLabel = subtotal >= 20 ? 'kostenlos' : '2 Euro';
console.log(shippingLabel);

// --------- switch: Einen bestimmten Wert vergleichen ---------
const shippingMethod = 'express'; // 'standard', 'express' oder z. B. 'pickup'

switch (shippingMethod) {
  case 'standard':
    console.log('Standardversand ausgewählt.');
    break; // Beendet das switch, damit der nächste Fall nicht mitläuft.
  case 'express':
    console.log('Expressversand ausgewählt.');
    break;
  default:
    console.log('Unbekannte Versandart.');
}

// --------- for: Mit einem Zähler wiederholen ---------
const packageCount = 3;

// Start bei 1; bis einschließlich 3; nach jedem Durchlauf um 1 erhöhen.
for (let packageNumber = 1; packageNumber <= packageCount; packageNumber++) {
  console.log('Paket ' + packageNumber + ' vorbereiten');
}

// --------- while: Erst prüfen, dann ausführen ---------
let remainingPackages = 3;

while (remainingPackages > 0) {
  console.log('Noch offen: ' + remainingPackages);
  remainingPackages--; // Ohne diese Änderung würde die Schleife nicht enden.
}

console.log('Übrig: ' + remainingPackages); // 0

// --------- do...while: Erst ausführen, dann prüfen ---------
const checkAgain = false; // Bei true würde diese Schleife nicht enden.

do {
  console.log('Status wurde geprüft.'); // Läuft trotz false einmal.
} while (checkAgain);

console.log('Prüfung beendet.');

// --------- continue: Den Rest eines Durchlaufs überspringen ---------
for (let packageNumber = 1; packageNumber <= 5; packageNumber++) {
  if (packageNumber === 3) {
    continue; // Paket 3 überspringen; danach geht es mit Paket 4 weiter.
  }
  console.log('Paket ' + packageNumber + ' vorbereiten'); // 1, 2, 4, 5
}

// --------- break: Die ganze Schleife beenden ---------
for (let packageNumber = 1; packageNumber <= 5; packageNumber++) {
  if (packageNumber === 3) {
    break; // Vor der Ausgabe von Paket 3 aufhören.
  }
  console.log('Paket ' + packageNumber + ' vorbereiten'); // 1, 2
}

console.log('Weiter nach der Schleife.');
