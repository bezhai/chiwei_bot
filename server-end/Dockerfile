FROM golang:1.19
WORKDIR /root
COPY . /root
RUN sh build.sh
CMD ["sh", "output/bootstrap.sh"]