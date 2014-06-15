BASE = .

main: lint

lint:
	./node_modules/.bin/jshint ./app.js
	./node_modules/.bin/jshint ./lib
	./node_modules/.bin/jshint ./routes

