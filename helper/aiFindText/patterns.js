export default function findValue(key, text) {
  switch (key) {
    case 'price':
      return findPrice(text)
    case 'bedrooms':
      return getNumberOfRooms(text, patterns.rooms)
    case 'bathrooms':
      return getNumberOfRooms(text, patterns.bathrooms)
    case 'pool':
      return hasPoolMention(text)
    case 'location':
      return findLocation(text)
  }
}

const patterns = {
  price: ['млн', 'mln', 'ml', 'мл', 'миллион',],
  rooms: [
    'спален', 'комнат', 'спальн', 'bedroom', 'bedrooms', 'bed room', 'спален есть', 'спальные места', 'спальная мест', 'спальное место', 'спальни',
    'спальня', 'спальней', 'комнаты', 'комнат', 'room', 'rooms', 'bed', 'beds', 'спальнями', 'комнатой', 'комната', 'комнате', 'спальню', 'спальнёй',
    'спальнях', 'спальнее', 'спальному', 'спальнами'
  ],
  bathrooms: ["ванн", "bath"],
  location: ['убуд', 'Букит', 'Чангу', 'Керобокан', 'Керабокан', 'Семиньяк'],
  pool: ['бассе', 'бассейн', 'pool']
}

function findPrice(text) {
  const priceRegex = new RegExp(`\\d+(\\.\\d+)?\\s*(${patterns.price.join('|')})`, 'gi');
  const matches = text.match(priceRegex);
  return matches ? matches[0] : null;
}

function getNumberOfRooms(text, pattern) {
  const regex = new RegExp(`(\\d+)\\s*(${pattern.join('|')})`, 'gi');
  const matches = text.match(regex);
  if (matches) {
    return matches.reduce((acc, val) => acc + parseInt(val), 0);
  }
  return null;
}

function hasPoolMention(text) {
  for (let pattern of patterns.pool) {
    if (text.toLowerCase().includes(pattern.toLowerCase())) {
      return true;
    }
  }
  return false;
}

function findLocation(text) {
  let foundIndex = text.length;
  let foundWord = null;

  for (const pattern of patterns.location) {
    const index = text.toLowerCase().indexOf(pattern.toLowerCase());
    if (index !== -1 && index < foundIndex) {
      foundIndex = index;
      foundWord = pattern;
    }
  }

  return foundWord;
}
