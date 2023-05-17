export default function findValue(key, text) {
  switch (key) {
    case 'price':
      return findPrice(text)
    case 'bedrooms':
      return getNumberOfRooms(text, patterns.rooms)
    case 'bathrooms':
      return getNumberOfRooms(text, patterns.bathrooms)
    case 'pool':
      return hasWordsInAText(text, patterns.pool)
    case 'location':
      return findLocation(text)
    case 'cleaning':
      return hasWordsInAText(text, patterns.cleaning)
    case 'garden':
      return hasWordsInAText(text, patterns.garden)
    case 'parking':
      return hasWordsInAText(text, patterns.parking)
    case 'available':
      return findFreeDate(text, patterns.parking)
  }
}

const patterns = {
  price: ['млн', 'mln', 'ml', 'мл', 'миллион', 'милл', 'мил', 'в мес'],
  rooms: [
    'спален', 'комнат', 'спальн', 'bedroom', ' -мя спал', 'х комн', '-мя спал', 'bedrooms', 'bed room', 'спален есть', 'спальные места', 'спальная мест', 'спальное место', 'спальни',
    'спальня', 'спальней', 'комнаты', 'комнат', 'room', 'rooms', 'bed', 'beds', 'спальнями', 'комнатой', 'комната', 'комнате', 'спальню', 'спальнёй',
    'спальнях', 'спальнее', 'спальному', 'спальнами'
  ],
  bathrooms: ["ванн", "bath"],
  location: ['убуд', 'Букит', 'Чангу', 'Керобокан', 'Керабокан', 'Семиньяк', 'Umalas', 'Умалас', 'Куты', 'Кута'],
  pool: ['бассе', 'бассейн', 'pool'],
  cleaning: ['Уборк', 'cleaning'],
  garden: ['Сад', 'сад', 'garden'],
  parking: ['parking', 'гараж', 'паркин'],
}

function findPrice(text) {
  const priceRegex = new RegExp(`\\d+(\\.\\d+)?\\s*(${patterns.price.join('|')})`, 'gi');
  const matches = text.match(priceRegex);
  if (matches) {
    return matches[0]
  } else {
    const res = findPrice(text)
    return res ? res : null;
  }

  function findPrice(text) {
    const regex = /цена\D*(\d{1,3}(?:\.\d{3})+)/gi; // Регулярное выражение для поиска упоминаний цены
    const matches = text.match(regex); // Находим все совпадения с регулярным выражением

    if (matches && matches.length > 0) {
      for (let i = 0; i < matches.length; i++) {
        const priceText = matches[i].replace(/\s/g, '').replace(/\./g, ''); // Удаляем пробелы и точки
        const priceMatch = priceText.match(/\d+/); // Находим числовое значение цены

        if (priceMatch) {
          // Извлекаем числовое значение цены
          return parseFloat(priceMatch[0])
        }
      }
    }

    return null; // Если цена не найдена, возвращаем null
  }
}

function getNumberOfRooms(text, pattern) {
  const regex = new RegExp(`(\\d+)\\s*(${pattern.join('|')})`, 'gi');
  const matches = text.match(regex);
  if (matches) {
    return matches.reduce((acc, val) => acc + parseInt(val), 0);
  }
  return null;
}


function hasWordsInAText(text, patterns) {
  for (let pattern of patterns) {
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

function findFreeDate(text) {
  const regex = /(\b\d{1,2}\s*(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\b|\b\d{1,2}\.\d{1,2}\b)/g;
  const matches = text.match(regex);

  if (matches && matches.length > 0) {
    return matches[0];
  } else if (text.includes('свободна') || text.includes('доступна')) {
    return 'Available';
  } else {
    return 'Available';
  }

}

