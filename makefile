up:
	docker compose up --build --remove-orphans

node:
	pnpm run build
	pnpm run start

traefik-up:
	docker-compose -f ./traefik.yml up -d traefik

future:
	docker-compose -f ./docker-compose-dev.yml up future

deploy:
	docker-compose -f ./docker-compose.yml up future

deploy-d:
	docker-compose -f ./docker-compose.yml down

network:
	docker network create coolify-infra
	docker network create deploy
	docker network create generated_default
