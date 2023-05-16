import findValue from "~/helper/aiFindText/patterns";

export default function findText(text){
  return {
    startText: text,
    price: findValue('price', text),
    bedrooms: findValue('bedrooms', text),
    bathrooms: findValue('bathrooms', text),
    pool: findValue('pool', text),
    location: findValue('location', text),
  }
}
