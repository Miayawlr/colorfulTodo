/**
 * mongo 配置 和服务启动端口
 */

interface Config {
  port: number
  db: string
}

export const config: Config = {
  port: 9000,
  db: 'mongodb://localhost:27017/colors-server', //db
}
