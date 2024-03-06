function sendEmail(){
    var params = {
      userName : document.getElementById('userName').value,
      userEmail : document.getElementById('userEmail').value,
      userPhone : document.getElementById('userPhone').value,
      userLocation : document.getElementById('userLocation').value,
      userLotArea : document.getElementById('userLotArea').value,
      userNumCorner : document.getElementById('userNumCorner').value,
      userPurpose : document.getElementById('userPurpose').value
    }
    emailjs.init({
        publicKey: 't1NJjDd5QqzKeBUjK',
    });
    
    emailjs.send('service_m4g4lpv', 'template_y5a041h', params).then(function() {
      alert('Request Form Sent!');
    })
    
  }
  
 



  