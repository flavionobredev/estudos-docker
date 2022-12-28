# Estudos Docker

Este repositório contém os estudos realizados sobre Docker. Cada pasta contém um estudo sobre um assunto específico.

## Docker

Docker é uma plataforma de código aberto para desenvolvimento, envio e execução de aplicativos. Docker permite que você separe seus aplicativos de sua infraestrutura para que você possa entregar software rapidamente. Com Docker, você gerencia sua infraestrutura de aplicativos e pode entregar software em qualquer lugar.

## Docker Compose

Docker Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres. Com o Compose, você usa um arquivo YAML para configurar seus serviços de aplicativos. Em seguida, com um comando, você cria e inicia todos os serviços a partir de sua configuração.

## Docker Swarm

O Docker Swarm é um orquestrador de contêineres nativo do Docker. Ele permite que você gerencie contêineres distribuídos como um cluster de hosts. O Docker Swarm é um orquestrador de contêineres nativo do Docker. Ele permite que você gerencie contêineres distribuídos como um cluster de hosts.

## Dockerfile

Um Dockerfile é um arquivo de texto que contém todos os comandos necessários para criar uma imagem de contêiner. Um Dockerfile é um arquivo de texto que contém todos os comandos necessários para criar uma imagem de contêiner.

# Instalação

## Docker Engine

Para instalar o Docker Engine, siga as instruções do site oficial: https://docs.docker.com/engine/install/

### Instalação no Ubuntu (ou WSL2 com Ubuntu 20.04)

```bash

# remove versões antigas
sudo apt-get remove docker docker-engine docker.io containerd runc

# atualiza o apt
sudo apt-get update

# instala pacotes para permitir que o apt use um repositório via HTTPS
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# adiciona a chave GPG oficial do Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# setup do repositório do Docker
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# atualiza o apt
sudo apt-get update

# instala o docker engine
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# adiciona o usuário ao grupo docker
sudo usermod -aG docker $USER

# reinicia o docker e o wsl. em seguida, inicie o serviço do docker
sudo service docker start

# verificar se tudo está ok
docker run hello-world

```


