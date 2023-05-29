up:
	docker compose up --build --remove-orphans

node:
	pnpm run build
	pnpm run start