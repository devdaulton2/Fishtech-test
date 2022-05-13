let APIRUL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIRUL = 'http://localhost:3000'
        break
    case 'fishtech-test-app-client.herokuapp.com':
        APIRUL = 'https://fishtech-test-app.herokuapp.com'
}

export default APIRUL