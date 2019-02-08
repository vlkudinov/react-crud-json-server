install:
	npm install
	cd app && npm install

production:
	cd app && npm run build
	npm start

build:
	cd app && npm run build


