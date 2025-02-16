import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 100,
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
    // Make a GET request to the target URL
    http.post(
        'http://localhost:3000/orders',
        JSON.stringify({ product: "Laptop", quantity: 1 }),
        { headers: { "Content-Type": "application/json" } }
    );

    // Sleep for 1 second to simulate real-world usage
    sleep(1);
}