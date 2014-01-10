#!/usr/bin/env bash
sudo apt-get update
sudo apt-get install -y python-software-properties
sudo add-apt-repository -y ppa:chris-lea/node.js

sudo apt-get update
sudo apt-get install -y nodejs

cd /vagrant/web/ && sudo npm install
cd /vagrant/worker/ && sudo npm install