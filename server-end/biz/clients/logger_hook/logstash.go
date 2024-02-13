package logger_hook

import (
	"log"
	"net"
	"time"

	logrustash "github.com/bshuster-repo/logrus-logstash-hook"
	"github.com/sirupsen/logrus"
)

func InitLogHook() logrus.Hook {
	var err error
	var conn net.Conn
	for i := 0; i < 10; i++ {
		conn, err = net.Dial("tcp", "logger_hook:5001")
		if err != nil {
			time.Sleep(8 * time.Second)
		} else {
			break
		}
	}

	if err != nil {
		log.Fatalf("Failed to connect to Logstash: %v", err)
	}

	return logrustash.New(conn, logrustash.DefaultFormatter(logrus.Fields{"type": "robot_main"}))
}
