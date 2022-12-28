# Network interna com docker-compose

Ao rodar projetos com docker-compose, é comum que você precise criar uma rede interna para que os containers se comuniquem entre si. Para isso, você pode criar uma rede interna no docker-compose.yml e definir os containers que devem estar nessa rede.

## Problema
Todavia, existem cenários onde você tem dois ou mais projetos que precisam se comunicar entre si. Esses projetos podem ter diferentes configurações de redes e você pode não ter acesso as configurações deles.

### Formas de resolver

#### 1. Criar uma rede externa
O caso mais ideal é criar uma rede externa e definir os containers que devem estar nessa rede.

exemplo:
```yml
version: '3.7'
services:
  app:
    image: nginx
    networks:
      - app-network
networks:
  app-network:
    external: true
```

note que a rede `app-network` é definida como externa, ou seja, ela já deve existir no docker antes de executar `docker compose up`.

> Para criar uma rede externa, basta executar `docker network create app-network --driver bridge`

#### 2. Comunicar-se pelo host-gateway

Nesse caso, você pode definir o container que precisa se comunicar com outro container como `host-gateway`. Isso faz com que o container se comunique com o outro container pela *rede interna do docker* (geralmente 172.xx.0.1).

exemplo:
```yml
version: '3.7'
services:
  app:
    image: nginx
    networks:
      - app-network
    extra_hosts:
      - "host.docker.internal:host-gateway"
```
Note que o container `app` está na rede `app-network` e também possui um host chamado `host.docker.internal` que aponta para o ip geral do host docker.

> O `host-gateway` é um alias para o host docker, resolvendo seu endereço ip.


## Execução

Para executar o projeto, basta executar `docker compose up` na pasta `api` e `client`. O client irá se comunicar com a api pelo `host.docker.interal` (rede interna do docker).

Para finalizar, basta executar `docker compose down` na pasta `api` e `client`.

## Conclusão

Esse é um exemplo simples de como você pode criar uma rede interna no docker-compose e como você pode se comunicar com outros containers que não estão na mesma rede.