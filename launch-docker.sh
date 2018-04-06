#!/bin/bash
docker build -t foo . 
docker stop myserver
docker rm myserver
docker run --name myserver -p 80:3000 --detach foo 