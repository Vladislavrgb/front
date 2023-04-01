let myMap = new Map ();
myMap.set('Собственность', 'Квартира');
myMap.set('Город', 'Омск');
myMap.set('Район', 'Центральный');

for(let key of myMap.keys()) {
  console.log("Ключ -",key,"Значение -",myMap.get(key));
}