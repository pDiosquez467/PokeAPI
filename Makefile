start-db:
	cd ./db && docker compose up -d  

stop-db:
	cd ./db && docker stop pokemon-postgres

start-backend:
	cd ./backend && npm run dev

run-backend:
	start-db start-backend 
