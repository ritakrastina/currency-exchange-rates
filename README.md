# Currency Exchange Rates

Angular based single page application for currency exchange rates (current and historical). [Live demo.](https://ritakrastina.github.io/currency-exchange-rates/)

Data source from [Foreign exchange rates API](https://exchangeratesapi.io/).

## Built with

- HTML5, CSS
- [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6
- [Bootstrap](https://getbootstrap.com/) version 4.3.1
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap) version 5.5.0

## Development

To run application, clone `master` branch locally, execute folowing commands and open browser on http://localhost:4200/.
```
npm install -g @angular/cli
npm install
npm ng serve
```

## Building

Run `ng build` to build the project. Result will be stored in the `dist/currency-exchange-rates` directory. Use the `--prod` flag for a production build.

## Development in Docker

To run application in docker container, have installed [Docker](https://www.docker.com/).

Create application production build using command `ng build --prod`.

Then locate to docker terminal, change directory to application location using `cd` command and execute folowing commands to build an image and run it in a container.
```
docker build -t currency-exchange-rates-image .
docker run --name currency-exchange-rates-container -d -p 8080:80 currency-exchange-rates-image
```

 Open browser on http://localhost:8080/ where the application is running in docker container.
