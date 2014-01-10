#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y postgresql

sudo echo 'host all all 10.10.0.0/24 trust' >> /etc/postgresql/9.1/main/pg_hba.conf
sudo echo "listen_addresses = '*'" >> /etc/postgresql/9.1/main/postgresql.conf

sudo /etc/init.d/postgresql restart

sudo -u postgres psql -c "CREATE USER web_worker WITH PASSWORD 'pass';"
sudo -u postgres psql -c "CREATE DATABASE web_worker owner web_worker;"
sudo -u postgres psql -d web_worker -c "CREATE TABLE messages (message VARCHAR(255));"
sudo -u postgres psql -d web_worker -c "ALTER TABLE messages OWNER to web_worker"