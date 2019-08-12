#docker build -t saleskey:latest -f dev.Dockerfile . 
#docker run saleskey yarn lint

#core
FROM node:10-alpine
LABEL maintainer="adhityan"
LABEL product="@saleskey/project"
LABEL trademark="Gamechange Solutions"

#create directories
RUN mkdir /code
WORKDIR /code

#backend
COPY yarn.lock ./
COPY package.json ./
COPY shared/package.json ./shared/
COPY core/package.json ./core/
COPY app/package.json ./app/

#adapter
COPY adapters/default/package.json ./adapters/default/

#install packages
RUN yarn install --production=false

#frontend
#COPY frontend/yarn.lock ./frontend/
#COPY frontend/package.json ./frontend/
#COPY frontend/consumer/package.json ./frontend/consumer/
#COPY frontend/shared/package.json ./frontend/shared/
#COPY frontend/admin/package.json ./frontend/admin/
#WORKDIR /code/frontend

#install packages
#RUN yarn install

#Copy source code
#WORKDIR /code
#COPY . .

#set app as working
WORKDIR /code/app
EXPOSE 9000

#Run test
#CMD [ "yarn", "serve:dev" ]
