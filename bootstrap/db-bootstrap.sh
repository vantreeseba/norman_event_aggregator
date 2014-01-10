#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y postgresql

sudo -u postgres psql -c "CREATE USER web_worker WITH PASSWORD 'pass';
						  CREATE DATABASE web_worker owner web_worker;"
sudo -u postgres psql -d web_worker -c "CREATE TABLE messages (message VARCHAR(255));"