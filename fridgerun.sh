#!/bin/bash

source /home/alpo/labs/fridge-meal/api/venv/bin/activate && cd api/
screen -dm -S back python app.py
yarn webpack-dev-server --hot
