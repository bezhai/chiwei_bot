# Makefile

# 定义变量
IMAGE_NAME=front-end-app
CONTAINER_NAME=front-end-container
HOST_PORT=3000
CONTAINER_PORT=3000
ENV_FILE=../.env

# 默认目标，当你只输入 make 时执行
default: run

# 构建 Docker 镜像
build:
	docker build -t $(IMAGE_NAME) .

# 运行 Docker 容器
run: build
	docker run -d --name $(CONTAINER_NAME) --env-file $(ENV_FILE) -p $(HOST_PORT):$(CONTAINER_PORT) -v /usr/src/app/node_modules $(IMAGE_NAME)

# 停止并移除 Docker 容器
clean:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

# 停止、移除容器并移除镜像
distclean: clean
	docker rmi $(IMAGE_NAME)

# 防止 Makefile 冲突
.PHONY: default build run clean distclean