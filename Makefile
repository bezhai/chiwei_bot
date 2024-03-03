IMAGE_NAME=registry-vpc.cn-hongkong.aliyuncs.com/chiwei/bot_website
IMAGE_TAG=v1.0.1
CONTAINER_NAME=front-end-container
HOST_PORT=3000
CONTAINER_PORT=3000

pull:
	docker pull $(IMAGE_NAME):$(IMAGE_TAG)

run-front: pull
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true
	docker run -d --name $(CONTAINER_NAME) -p $(HOST_PORT):$(CONTAINER_PORT) -v /usr/src/app/node_modules $(IMAGE_NAME):$(IMAGE_TAG)

start:
	git pull
	export $(grep -v '^#' .env | xargs)
	docker compose up -d --build

start-dev:
	docker compose up --build

down:
	docker compose down

restart:
	git pull
	export $(grep -v '^#' .env | xargs)
	docker compose build
	docker compose down
	docker compose up -d