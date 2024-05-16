### Preparation before start the project
install node.js
uses npm install all package and dependency 
### Set system environment variables
All required system environment variables are inside config.js, please check config.js
### How start back-end chat?
node index.js in loacl testing terminal
### Docker 
#### docker build
docker build -t back-end:1.4 .
### docker tag and push
docker tag back-end:1.4 'your_docker_repository_name'
docker push 'your_docker_repository_name'
#### run mongodb
sudo docker run -it -p 27017:27017 --name mongodb mongo 
or 
sudo docker run -d -p 27017:27017 --name mongodb mongo 
#### run back-end image in loacl environment 
docker run -p 30000:30000 -p 8082:8082 --name back_end_chat --env-file env.list --link mongodb:mongoDB back-end:1.4 
#### run back-end image in Linux environment
env > env.list 
sudo docker run -p 30000:30000 -p 8082:8082 --name back_end_chat --env-file env.list --link mongodb:mongoDB 'your_docker_repository_name'  

sudo docker run -d -p 30000:30000 -p 8082:8082 --name back_end_chat --env-file env.list --link mongodb:mongoDB 'your_docker_repository_name' 
### docker operation
sudo docker ps 
sudo docker stop 
sudo docker start
sudo docker ps -a 
sudo docker rm 
sudo docker image ls/docker images
sudo docker rmi 
sudo docker login -u username -p password
### system envrionment setting on host machine
echo "export TOKEN_KEY='your_token_key_value'" >> ~/.zshrc
echo "export REFRESH_TOKEN_KEY='your_refresh_token_key_value'" >> ~/.zshrc
echo "export MEMBERSHIP_VERIFY_KEY='your_membership_verify_key_value'" >> ~/.zshrc
echo "export SERVER_PORT='your_server_port_value'" >> ~/.zshrc
echo "export SOCKET_SERVER_PORT='your_socket_server_port_value'" >> ~/.zshrc
echo "export OPENAI_API_KEY='your_openai_api_key_value'" >> ~/.zshrc
echo "export MONGO_URL='your_mongo_url_value'" >> ~/.zshrc
source ~/.zshrc
echo $TOKEN_KEY

