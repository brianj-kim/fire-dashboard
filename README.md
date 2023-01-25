## Fire Dashboard
This project is for building a production level web application by utilizing Google Authentication API (email and password authentication) and Firestore. Firestore is used for taking memo from users. It can be created, edited, and deleted.

## Reproducing the repo
If you want to checkout the web application, you need to config your own firebase config and Google Authentication API config.
The config file should be '.env.local' and the examples are below:

<pre><code>
VITE_API_KEY = 
VITE_AUTH_DOMAIN = 
VITE_PROJECT_ID = 
VITE_STORAGE_BUCKET = 
VITE_MESSAGEIN_ID = 
VITE_APP_ID = 
VITE_MEASURE_ID = 
</code></pre>

- This project initialized with vite/React/TypeScript. So you have to have prefix for the config elements like 'VITE_'.