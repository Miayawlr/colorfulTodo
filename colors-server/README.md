# Colors-servers 后台 API 服务

这个服务项目是本人自学巩固 typeScript 和 koa 结合相关服务。

### 技术栈

typeScript + Koa2 + mongose + Koa2 一系列中间件

### 项目运行

#### 注: 使用高版本 node

```shell
 cd colors-server
 npm install 或 yarn install (推荐)
 npm run watch / yarn watch
```

# 目标功能

- 支持前端项目的 CURD

... todo

### 源码目录结构

```
├─db               // 数据库导出的 json 文件
│      menu.json
│      menucolors.json
│
└─src
    │  app.ts      // 主项目目录
    │  config.ts   // 基础配置信息
    │
    ├─controllers  // 控制器
    │      api-user.ts
    │
    ├─model       // 表目录
    │      menu.ts
    │      menucolors.ts
    │
    ├─routes     // 路由
    │      api.ts
    │
    ├─services  // 数据库服务
    │      mongo.ts
    │
    └─utils    // 工具类

```

### 协议

[MIT](./LICENSE)
