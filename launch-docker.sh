#!/bin/bash
docker build -t foo . 
docker stop myserver
docker rm myserver
docker run --name myserver -p 80:8080 --detach foo 