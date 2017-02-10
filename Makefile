NAME=xogroup/toki-config-file
VERSION=latest

test:
	node_modules/.bin/lab test --assert code --coverage --lint --verbose --coverage-path /test/unit

install:
	@rm -rf ./node_modules
	npm install

.PHONY: test instal