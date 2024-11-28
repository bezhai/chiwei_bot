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