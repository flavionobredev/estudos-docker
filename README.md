<img src="https://www.cloudsavvyit.com/p/uploads/2021/01/6dc7b5a0.jpeg?height=200p&trim=2,2,2,2&crop=16:9" alt="" >

<br>

# Deploy com Docker Swarm

O intuito desse repositório e ficar guardando artefatos importantes para uma boa publicação de aplicações utilizando `Docker Swarm`.

## Boas Práticas

Existem diversas formas para fazer deploy de stacks utilizando docker swarm, mas nem todas são otimizadas o suficiente para o que todos buscam hoje em dia: **atualização com 0 downtime!**.

Existem alguns conceitos do docker importantes acerca desse assunto, como: configurações de _update_, configurações de _rollback_, paralelismo, replicas, healthcheck, etc. Mais abaixo discorro sobre alguns desses tópicos.

### `update_config`

### `rollback_config`

### `replicas`

### `healthcheck`

<br>

## Iniciar Swarm

Para iniciar o docker swarm, basta digitar no terminal o seguinte comando:

> `docker swarm init --advertise-addr 192.168.1.12`

Após isso, o docker swarm será iniciado e você verá um token disponível no terminal. Esse token serve para voce conectar outra máquina a mesma rede swarm.
