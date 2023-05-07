// import axios from 'axios';
// const Stripe = require('stripe');
// import { showAlert } from './alerts';
// const stripe = Stripe(
//   'pk_test_51N4TY7SIuMKodooj1NZJGqIFQWJFJ6iuoNDBYjUDGzi2aaCNw5ZTogrJZvOM6iOYuNEaiQow5AHj4umZR3EtJo4p00ewzvYBRm'
// );

// export const bookTour = async (tourId) => {
//   try {
//     // 1) Get checkout session from API
//     const session = await axios(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
//     );
//     // console.log(session);

//     // 2) Create checkout form + chanre credit card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id,
//     });
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };
