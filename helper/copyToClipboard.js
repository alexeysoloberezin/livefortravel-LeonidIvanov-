export default function copyToClipboard(textToCopy){
  if(!textToCopy) return

  // создаем новый элемент textarea
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // выделяем весь текст внутри textarea
  textarea.select();

  // копируем выделенный текст в буфер обмена
  document.execCommand('copy');

  // удаляем созданный textarea
  document.body.removeChild(textarea);

  console.log('Текст скопирован в буфер обмена:', textToCopy);
}


//
// function getMesasges(){
//   const els = document.querySelectorAll('.message.spoilers-container')
//   let res = ``
//
//   els.forEach((item, index) => res += `Text,object ${index + 1}: ${item.textContent} + \n==============\n`)
//
//   console.log(res)
// }
// getMesasges()
