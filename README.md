# vastegrond-api-nodejs-server

Dit is de back-end voor de vastegrond-react-app (front-end). Om de front-end te runnen zie Readme in de [vastegrond-react-app](https://github.com/mcgunit/vastegrond-react-app)

## How-to voor local development

Gebruik docker-compose om deze api te starten. Er worden 3 builds gedaan:

- De api zelf

- Een MongoDB

- Een NGINX

### In linux

Open een terminal voor volgende commando in om het project te bouwen:

```
    sudo docker-compose build
```

Voer volgende commando in om het project te starten:

```
    sudo docker-compose up
```

Voer volgende commando in om het project te stoppen:

```
    sudo docker-compose down
```

### Voor Windows en MacOs

Docker heeft een interface om docker-compose.yml bestanden in te laden en te monitoren. 

- [Docker Desktop] (https://www.docker.com/products/docker-desktop/) met docker-compose plugin
