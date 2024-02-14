// Code generated by hertz generator.

package main

import (
	"time"

	"github.com/cloudwego/hertz/pkg/app/server"
	"github.com/cloudwego/hertz/pkg/common/hlog"
	"github.com/cloudwego/hertz/pkg/network/standard"
	hertzlogrus "github.com/hertz-contrib/logger/logrus"
	"github.com/hertz-contrib/requestid"

	"github.com/bezhai/chiwei_bot/server-end/biz/clients/logger_hook"
	"github.com/bezhai/chiwei_bot/server-end/config"
	"github.com/bezhai/chiwei_bot/server-end/utils/env_utils"
)

func main() {

	// 注入环境变量
	config.InitEnv()

	if env_utils.Value("OPEN_LOCAL_ELK") == "true" {
		hook := logger_hook.InitLogHook()
		hlog.SetLogger(hertzlogrus.NewLogger(hertzlogrus.WithHook(hook)))
	}

	h := server.Default(
		server.WithMaxRequestBodySize(20<<24),
		server.WithWriteTimeout(60*time.Second),
		server.WithTransport(standard.NewTransporter), // 使用了TLS
	)
	h.Use(requestid.New())

	initClient()

	register(h)
	h.Spin()
}

func initClient() {

}
