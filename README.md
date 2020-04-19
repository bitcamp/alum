# Bitcamp Alumni Portal

Basic auth pages that query an AWS lambda function, and redirect if matched.

## Lambda Setep
1. Create a new AWS lambda function. We named ours alumRedir. Use Python 3.8 as the enviroment. 
2. Paste the code from this repo's `lambda_function.py` into the editor on AWS.
3. Create enviroment variables `index`, `join`, and `password` and set them to their respective values.
4. Add a new trigger, and select API Gateway. Then, create an api and select HTTP api. It should have open security.
5. Edit the new API gatway. Specifically, go to CORS settings. Edit to match what's given below. Maybe it's not necessary to expose all of that, but it works for us.
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: *
Access-Control-Expose-Headers *
```
6. Update the url in `request.js` to point to your API gateway.

You should be done!

## Frontend setup
1. Replace the url in `.gitmodules` with whatever other repo contains your branding/styles (or remove alltogether).
2. Update `style.css` to reflect new colors/layout.
3. Replace meta information and images in `index.html` and `join.html`.
4. Update `Origin` header and `fetch` url in `request.js`.
5. Deploy! We use Github pages and route it to a subdomain of ours.
