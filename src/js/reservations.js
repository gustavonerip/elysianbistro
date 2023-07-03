// Reservations system
export class Reservation {
    constructor(name, lastname, email, phone, date, time, guests) {
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.phone = phone;
      this.date = date;
      this.time = time;
      this.guests = guests;
    }

    isValid(){
      if(!this.name || !this.lastname || !this.email || !this.phone || !this.date || !this.time || !this.guests){
        return false;
      }
      return true;
    }
}

export function submitReservation() {

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dateInput = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value; 

    let dateParts = dateInput.split('-');
    let year = dateParts[0];
    let month = dateParts[1];
    let day = dateParts[2];

    let dateObj = new Date(year, month - 1, day);
    let formattedMonth = dateObj.toLocaleString('default', {month: 'long'});

    let formattedDate = `${formattedMonth} ${day}, ${year}`;
    
    let reservation = new Reservation(name, lastName, email, phone, formattedDate, time, guests);
    
    if(!reservation.isValid()){
      alert('Please fill all the fields correctly');
      return;
    }
    const formContainer = document.getElementById('reservation-form');
    const resoStatus = document.getElementById('reso-status-message');

    formContainer.innerHTML = `
      <div class="reservation-message">
        <p>Thank you ${name}!</p>
        <p>We look forward to welcome you to Elysian Bistro.</p>
        <p>Follow your reservation details:</p>
        <ul>
          <li>Date: ${formattedDate}</li>
          <li>Time: ${time}</li>
          <li>Number of guests: ${guests}</li>
        </ul>
      </div>
    `;
    resoStatus.innerHTML = 'Reservation successful!';
    
    return false;
}