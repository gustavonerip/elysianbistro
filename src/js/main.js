import '../scss/main.scss'
import {Reservation, submitReservation} from './reservations'
import {addFrame} from './layout'

const submitBtn = document.querySelector('#reservation-form button');

if(submitBtn){
submitBtn.addEventListener('click', submitReservation);
}

document.addEventListener('DOMContentLoaded', addFrame);