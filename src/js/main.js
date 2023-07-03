import '../scss/main.scss'
import {Reservation, submitReservation} from './reservations'

const submitBtn = document.querySelector('#reservation-form button');

if(submitBtn){
submitBtn.addEventListener('click', submitReservation);
}