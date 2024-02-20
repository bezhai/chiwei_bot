start:
	docker compose up -d --build

start-dev:
	docker compose up --build

down:
	docker compose down

restart:
	git pull
	docker compose build
	docker compose down
	docker compose up -d

start_v2:
	git pull
	docker compose -f docker-compose-dev.yml build
	docker compose -f docker-compose-dev.yml up -d