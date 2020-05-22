# Node.js gRPCサンプル

## ライブラリの導入

### TypeScript関係

```sh
npm install --save-dev typescript
npm install --save-dev @types/node
```

### Jest関係

```sh
npm install --save-dev ts-jest
npm install --save-dev jest-html-reporters
npm install --save-dev jest-junit
```

## ESLint関係

```sh
npm install --save-dev eslint
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-prettier
npm install --save-dev @typescript-eslint/eslint-plugin
npm install --save-dev @typescript-eslint/parser
```

### gRPC関係

#### gRPC Generator

```sh
npm install --save-dev grpc-tools
npm install --save-dev grpc_tools_node_protoc_ts
```

#### gRPCサーバ

```sh
npm install grpc
npm install google-protobuf
```

### その他

```sh
npm install --save-dev rimraf
```

## プログラム実行

初回のみ、以下のコマンドを実行する.

```sh
npm install
```

コンパイルする場合は、以下のコマンドを実行する.

```sh
npm run build
```

gRPCサーバを起動する場合は、以下のコマンドを実行する.

```sh
npm run start:server
```

gRPCクライアントを実行する場合は、以下のコマンドを実行する.

```sh
npm run start:client
```



## 参考URL
以下のURLを参考にしました.

- [Qiita Proto3 Language Guide（和訳）](https://qiita.com/CyLomw/items/9aa4551bd6bb9c0818b6)
- [Qiita Node.jsとTypeScriptでgRPCを動かす](https://qiita.com/daisaru11/items/67366061f7244378639c)
- [Qiita gRPC × Typescript を始めるための一歩](https://qiita.com/ohs30359-nobuhara/items/f11857d5d3d9dbc6637b)