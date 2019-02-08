install:
	npm install
	cd app && npm install

dev:
	cd app && npm run dev

production:
	cd app && npm run build
	npm start

build:
	cd app && npm run build


