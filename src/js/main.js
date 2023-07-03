import '../scss/main.scss'
import {Reservation, submitReservation} from './reservations'

const submitBtn = document.querySelector('#reservation-form button');
submitBtn.addEventListener('click', submitReservation);