up:
	docker compose up --build --remove-orphans

node:
	pnpm run build
	pnpm run start

traefik-up:
	docker-compose -f ./traefik.yml up -d traefik

future-up:
	docker-compose -f ./docker-compose-dev.yml up -d future