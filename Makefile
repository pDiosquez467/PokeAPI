.PHONY: start-db stop-db start-backend run-backend

start-db:
	cd ./db && docker compose up -d

stop-db:
	cd ./db && docker compose down

start-backend:
	cd ./backend && npm run dev

run-backend: start-db
	$(MAKE) start-backend
