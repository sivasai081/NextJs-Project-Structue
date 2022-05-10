#### build docker image from latest sources
`docker build -t healthlligence/careassistant-ai .`

#### tag the image with version and healthlligence acr
`docker tag <imageid>  healthlligence.azurecr.io/healthlligence/careassistant-ai`

#### push latest image to ACR
`docker push healthlligence.azurecr.io/healthlligence/careassistant-ai`

#### pull docker image from ACR
`docker pull healthlligence.azurecr.io/healthlligence/careassistant-ai`

#### stop the existing container
`docker stop <containerid>`

#### pull the image from repository
`docker pull healthlligence.azurecr.io/healthlligence/careassistant-ai`

#### run the container
`docker run --name careassistant-ai  -d -p 3000:3000 <imageid>`

### check container logs
`docker logs <contiainerid>`

#### restart nginx server
`systemctl restart nginx.service`

