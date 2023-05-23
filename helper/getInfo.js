export default function getInfo(fire, moment, keyFrom){
  let date = localStorage.getItem('ipUsed')
  date = date ? JSON.parse(date) : null
  if(date){
    const currentDateTime = moment();

    const targetDate = moment(date);

    const diffInMinutes = currentDateTime.diff(targetDate, 'minutes');

    const isGreaterThan30Minutes = diffInMinutes > 30;

    console.log(isGreaterThan30Minutes);
    if(isGreaterThan30Minutes){
      localStorage.removeItem('ipUsed')
    }else{
      return null
    }
  }



  fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      if(ipAddress){
        fetch('http://ip-api.com/json/' + ipAddress)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            fire.firestore.collection('ipUsers').add({...data, ip: ipAddress, from: keyFrom}).then(() => {
              localStorage.setItem('ipUsed', JSON.stringify(new Date))
            })

          })
          .catch(error => {
            fire.firestore.collection('ipUsers').add({ip: ipAddress, from: keyFrom}).then(() => {
              localStorage.setItem('ipUsed', JSON.stringify(new Date))
            })
            console.error('Error:', error);
          });
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
