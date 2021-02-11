import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '2m', target: 100 }, // below normal load
//     { duration: '5m', target: 100 },
//     { duration: '2m', target: 200 }, // normal load
//     { duration: '5m', target: 200 },
//     { duration: '2m', target: 300 }, // around the breaking point
//     { duration: '5m', target: 300 },
//     { duration: '2m', target: 400 }, // beyond the breaking point
//     { duration: '5m', target: 400 },
//     { duration: '10m', target: 0 }, // scale down. Recovery stage.
//   ],
// }

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 1000,
    },
  },
};

export default function () {
  // http.get('http://localhost:3030/api/productdetails/777');
  http.get('http://localhost:3030/api/checkout/777');
  // sleep(1);
}