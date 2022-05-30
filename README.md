## Instalar maven

```shell
sudo apt-get update && sudo apt install default-jdk -y && java -version && wget https://downloads.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz -P /tmp && sudo tar xf /tmp/apache-maven-*.tar.gz -C /opt && sudo nano /etc/profile.d/maven.sh
```

```shell
export JAVA_HOME=/usr/lib/jvm/default-java
export M3_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}
```

```shell
sudo chmod +x /etc/profile.d/maven.sh && source /etc/profile.d/maven.sh && sudo apt-get update && sudo apt-get -y install maven && mvn -version
```

```shell
git clone https://github.com/lima-anderson/dockerized-application.git
```

```shell
cd dockerized-application/back/
```

```shell
mvn clean install
```

```shell
cd /home/vagrant/dockerized-application/back/
```

```shell
docker build . -t spring
```


```shell
cd /home/vagrant/dockerized-application/front/
```

```shell
docker build . -t react
```
