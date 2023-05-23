import findValue from "~/helper/aiFindText/patterns";

export default function findText(text){
  return {
    price: findValue('price', text),
    bedrooms: findValue('bedrooms', text),
    bathrooms: findValue('bathrooms', text),
    pool: findValue('pool', text),
    location: findValue('location', text),
    cleaning: findValue('cleaning', text),
    garden: findValue('garden', text),
    parking: findValue('parking', text),
    available: findValue('available', text)
  }
}

export const getMessages = `
  function getMessages(){
  const imgsRes = []
  const imgs = document.querySelectorAll('.tgme_widget_message_photo_wrap')
  imgs.forEach(img => {
    const computedStyles = getComputedStyle(img);
    const backgroundImage = computedStyles.getPropertyValue("background-image");

    const regex = /url\\("([^"]+)"\\)/;
    const matches = backgroundImage.match(regex);

    if (matches && matches.length > 1) {
      const imageUrl = matches[1];
      imgsRes.push(imageUrl)
    }
  })

  let text = document.querySelector('.tgme_widget_message_text')
  let link = document.querySelector('.link_anchor')
  let ava = document.querySelector('.tgme_widget_message_user_photo img')
  let linkUser = document.querySelector('.tgme_widget_message_user>a')
  let owner = document.querySelector('.tgme_widget_message_owner_name')
  let date = document.querySelector('.tgme_widget_message_date .datetime')

  if(text && imgsRes.length > 0){
    const ss = {
      imgs: imgsRes,
      text: text.textContent.replace(/\\./g, '.<br>'),
      link: link ? link.href : null,
      ava: ava ? ava.src : null,
      linkUser: linkUser ? linkUser.href : null,
      owner: owner ? owner.href : null,
      date: date ? date.getAttribute('datetime') : null,
    }
    console.log(ss)

    const textarea = document.createElement('textarea');

      textarea.value = JSON.stringify(ss);

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);
  }
}
getMessages()
`
