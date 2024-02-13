#!/bin/sh

# 等待 web 服务变得可用
dockerize -wait http://web:8888/api/ping -timeout 120s

# 启动 nginx
nginx -g 'daemon off;'