install: 
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

start1:
	npx babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npx eslint .