# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.5](https://github.com/CodeLittlePrince/epay-sparta/compare/v2.0.4...v2.0.5) (2022-05-18)


### Bug Fixes

* eslint针对jsx无法解析 ([a29cd9a](https://github.com/CodeLittlePrince/epay-sparta/commit/a29cd9aa558d8d8fa87bbb8b903b6344a13b7def))





## [2.0.4](https://github.com/CodeLittlePrince/epay-sparta/compare/v2.0.3...v2.0.4) (2022-04-24)


### Bug Fixes

* 修复有pages声明的项目单测启动失败 ([8f503a2](https://github.com/CodeLittlePrince/epay-sparta/commit/8f503a27e9d43ceabd3327916eb9a2b501e7272c))





## [2.0.3](https://github.com/CodeLittlePrince/epay-sparta/compare/v2.0.2...v2.0.3) (2022-04-22)


### Bug Fixes

* 兼容monorepo项目单测 ([b6b3f11](https://github.com/CodeLittlePrince/epay-sparta/commit/b6b3f118b600543169a63816fb35cc4031d3c326))





## [2.0.2](https://github.com/CodeLittlePrince/epay-sparta/compare/v2.0.1...v2.0.2) (2022-03-29)


### Bug Fixes

* 适配workspaces的方式跑单测和e2e测试 ([c09f85c](https://github.com/CodeLittlePrince/epay-sparta/commit/c09f85c4f7ee55e0dd4e5f5122351d352bfc6e71))





## [2.0.1](https://github.com/CodeLittlePrince/epay-sparta/compare/v2.0.0...v2.0.1) (2022-03-14)


### Bug Fixes

* 新增minimist为显式依赖 ([e35fb50](https://github.com/CodeLittlePrince/epay-sparta/commit/e35fb50ec86b919fd4e2bf2c6202dfdb68b60830))





# [2.0.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.11.0...v2.0.0) (2022-02-14)


### Bug Fixes

* 处理eslint ignore无效 ([7968e0c](https://github.com/CodeLittlePrince/epay-sparta/commit/7968e0c65347338719decada418ab08c7305be84))


### Features

* lint不再使用node API形式 ([095692b](https://github.com/CodeLittlePrince/epay-sparta/commit/095692b14a67a339d71c4a280e7effdfa810c584))


### BREAKING CHANGES

* 移除node API形式lint





# [1.11.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.10.0...v1.11.0) (2022-02-14)


### Bug Fixes

* 修复打包三方组件库时候会把字体的内容转成乱码 ([49b9b63](https://github.com/CodeLittlePrince/epay-sparta/commit/49b9b633ea3942d439783cbf35ab1c7b2ba323f5))


### Features

* 进一步优化chunks ([8666b0b](https://github.com/CodeLittlePrince/epay-sparta/commit/8666b0b489c00aa633bf9613ca61aa5018c345f1))





# [1.10.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.9.0...v1.10.0) (2022-02-11)


### Features

* 支持lint-staged ([eda54ad](https://github.com/CodeLittlePrince/epay-sparta/commit/eda54adcfe06f612a92c1d0f4e2523316e04ba74))





# [1.9.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.8.0...v1.9.0) (2022-02-10)


### Features

* 为了能够兼容使用lint-staged,validateSegmentFormat失败不终止 ([4c0d5d0](https://github.com/CodeLittlePrince/epay-sparta/commit/4c0d5d0648ef71bcbd182c6f7be7ca57c9c3a4a2))
* 新增optimize-css-assets-webpack-plugin压缩css ([8422898](https://github.com/CodeLittlePrince/epay-sparta/commit/842289874b8c938aa38df02f25b7d9a9167ca6a6))
* webpack splitChunks 设置 chunks all ([aa61aa1](https://github.com/CodeLittlePrince/epay-sparta/commit/aa61aa15daadd84ebf70834090a02f046149bbe3))





# [1.8.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.7.0...v1.8.0) (2022-02-10)


### Features

* 优化production时候的输出格式 ([64ae4d9](https://github.com/CodeLittlePrince/epay-sparta/commit/64ae4d9bfc43fa9328665f99f93e56bd5c05e16f))





# [1.7.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.6.0...v1.7.0) (2022-02-09)


### Features

* 新增SpeedMeasurePlugin ([620e922](https://github.com/CodeLittlePrince/epay-sparta/commit/620e9224620e866d5ce9b1a3ebfb1c0acf303acb))
* 增加webpack打包大小写铭感检测 ([818d688](https://github.com/CodeLittlePrince/epay-sparta/commit/818d68886a364c68917e31049f263cd71ad141e3))





# [1.6.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.5.0...v1.6.0) (2022-01-13)


### Bug Fixes

* demo eslint提示问题 ([785fe88](https://github.com/CodeLittlePrince/epay-sparta/commit/785fe880678cd92cc9cdaf98d9bd166879768e6d))


### Features

* 支持alias配置 ([b2f02d1](https://github.com/CodeLittlePrince/epay-sparta/commit/b2f02d1c7796f0af1287337491cab5f69e5303b7))





# [1.5.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.4.2...v1.5.0) (2021-12-05)


### Features

* 开发编译阶段去除eslint和stylelint ([6d2a1e0](https://github.com/CodeLittlePrince/epay-sparta/commit/6d2a1e06a3a513c6fd8eb114234c0e9bd409155a))





## [1.4.2](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.4.1...v1.4.2) (2021-12-05)

**Note:** Version bump only for package epay-sparta





## [1.4.1](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.4.0...v1.4.1) (2021-12-03)

**Note:** Version bump only for package epay-sparta





# [1.4.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.3.0...v1.4.0) (2021-12-03)


### Bug Fixes

* 🐛 修复demo ([368fad3](https://github.com/CodeLittlePrince/epay-sparta/commit/368fad37759228108e0c532aa40a1cc76d63bbe8))


### Features

* 🎸 不全demo的svg-sprite例子 ([48819c7](https://github.com/CodeLittlePrince/epay-sparta/commit/48819c755c6c04c2fff99f4b9910521118dd2981))





# [1.3.0](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.2.3...v1.3.0) (2021-12-03)


### Features

* 临时发布 ([3acd7d0](https://github.com/CodeLittlePrince/epay-sparta/commit/3acd7d0de4ff01936401090f5c7492b9cea7ba62))





## [1.2.3](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.2.2...v1.2.3) (2021-12-01)


### Bug Fixes

* 🐛 service-cli包搭配处理 ([28d3f5c](https://github.com/CodeLittlePrince/epay-sparta/commit/28d3f5c35a33d50a6674a8c918d48c0a09b16e3c))





## [1.2.2](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.2.1...v1.2.2) (2021-12-01)

**Note:** Version bump only for package epay-sparta





## [1.2.1](https://github.com/CodeLittlePrince/epay-sparta/compare/v1.2.0...v1.2.1) (2021-11-30)

**Note:** Version bump only for package epay-sparta





# 1.2.0 (2021-11-29)


### Bug Fixes

* cloneDeep ([c631673](https://github.com/CodeLittlePrince/epay-sparta/commit/c631673e86b1f30e0341404268f54a7eba319850))
* cloneDeep ([5168ec6](https://github.com/CodeLittlePrince/epay-sparta/commit/5168ec6db4a8965086efc7a8d69fa664c5e82fea))
* css加md5判断反了 ([2ed1eaa](https://github.com/CodeLittlePrince/epay-sparta/commit/2ed1eaa66ea5d90e9acc1f9b7f6adce0e423888e))
* css加md5判断反了 ([32ce4fb](https://github.com/CodeLittlePrince/epay-sparta/commit/32ce4fb77a6992b4925cc72c85fcb3b5ecbaad33))
* jest node使用方式 ([18a0308](https://github.com/CodeLittlePrince/epay-sparta/commit/18a0308a3b04c0ed83e03b303998194abf50d579))
* stylelint error on windows ([75388d4](https://github.com/CodeLittlePrince/epay-sparta/commit/75388d4884652ebabaa04dfe0be9594b1ab1d901))
* stylelint error on windows ([e3a4728](https://github.com/CodeLittlePrince/epay-sparta/commit/e3a4728c1d90c5a337ebf4439d319646d80c1c56))
* vue文件覆盖率不统计 ([3900605](https://github.com/CodeLittlePrince/epay-sparta/commit/390060581c2e18ee011869d8698de268abca6e1d))
* vue文件覆盖率不统计 ([a2ea4d8](https://github.com/CodeLittlePrince/epay-sparta/commit/a2ea4d8c763b940fb7de7aae85827f8f2be2ebb3))
* webpack.BannerPlugin会引起sprite.svg error ([4ae83ac](https://github.com/CodeLittlePrince/epay-sparta/commit/4ae83ac5cee0b74126a3e5ed7ad65e1b4fb800ff))
* webpack.BannerPlugin会引起sprite.svg error ([126f925](https://github.com/CodeLittlePrince/epay-sparta/commit/126f925d845fa6ac0269f3df42d8bba13e446335))
* 单测报告报找不到文件Unable to lookup source的问题 ([542ca61](https://github.com/CodeLittlePrince/epay-sparta/commit/542ca61a81c549127534efc32994ade4d54c6730))
* 单测报告报找不到文件Unable to lookup source的问题 ([c5e994c](https://github.com/CodeLittlePrince/epay-sparta/commit/c5e994c13fd53cf5b410fc5b0f105e81af939203))
* 因为webpack-merge升级后的使用方式 ([ba37bd7](https://github.com/CodeLittlePrince/epay-sparta/commit/ba37bd7fa4a70f71fdd24c4ada6c1b4acd659055))
* 因为webpack-merge升级后的使用方式 ([94eea4c](https://github.com/CodeLittlePrince/epay-sparta/commit/94eea4cb36d9da371f71f415775c606e0ec5f068))
* 如果lint时候sparta有webpack.rules会报错 ([699a39b](https://github.com/CodeLittlePrince/epay-sparta/commit/699a39baa9cf769daa0cd00f9525dc224d66c72d))
* 如果lint时候sparta有webpack.rules会报错 ([c9a7d06](https://github.com/CodeLittlePrince/epay-sparta/commit/c9a7d0631e138541ebc626c27077d1c5e2a8ae6e))
* 忘了加jest.config.js ([f704618](https://github.com/CodeLittlePrince/epay-sparta/commit/f7046181af6cdda18342bde4360212575786ec88))
* 手残把stylelint删了 ([9528224](https://github.com/CodeLittlePrince/epay-sparta/commit/9528224722d7ea80c70bec8280730e8402a80541))
* 手残把stylelint删了 ([a0c3073](https://github.com/CodeLittlePrince/epay-sparta/commit/a0c3073bf34076fc3c3cce82048c9190b6732ee2))
* 控制sparta webpack.module.rules 顺序 ([898f593](https://github.com/CodeLittlePrince/epay-sparta/commit/898f59375e35aaa56d7e1402bf302d8af001fd23))
* 控制sparta webpack.module.rules 顺序 ([3e9ecb4](https://github.com/CodeLittlePrince/epay-sparta/commit/3e9ecb425059bde5c1f0a5ae7c87048f0f154dd5))


### Features

* change eslint config ([2557a48](https://github.com/CodeLittlePrince/epay-sparta/commit/2557a4873ea3b96b1265a756a37d70fab5e67db7))
* change eslint config ([dc2daf6](https://github.com/CodeLittlePrince/epay-sparta/commit/dc2daf6652d7bc9bc70641a418300157bbe62496))
* devServer可以通过sparta.config指定port ([0880bea](https://github.com/CodeLittlePrince/epay-sparta/commit/0880beac77737e05afa39ae5c058ea5c7531dbd7))
* devServer可以通过sparta.config指定port ([d2d75a1](https://github.com/CodeLittlePrince/epay-sparta/commit/d2d75a17cb5653bcfb34bf477c258ed425e86001))
* eslint change ([d439e2b](https://github.com/CodeLittlePrince/epay-sparta/commit/d439e2b5b4eb7c5a0ad12c240e175331140f6fc8))
* eslint增加新规则 ([09d3d2d](https://github.com/CodeLittlePrince/epay-sparta/commit/09d3d2dc63133c84b95d80d63d9a7494b9241d83))
* eslint增加新规则 ([e0b3ad9](https://github.com/CodeLittlePrince/epay-sparta/commit/e0b3ad9e7d73ff2f52981129e8fae5bd853c87d8))
* jest支持接收cli传参 ([bb9c83d](https://github.com/CodeLittlePrince/epay-sparta/commit/bb9c83dc719aa36a7837691607746c78217dcb04))
* stylelint报错中断进程 ([0eda786](https://github.com/CodeLittlePrince/epay-sparta/commit/0eda78694f73b4cd88c27909b9f502fee69f69ff))
* stylelint报错中断进程 ([e907449](https://github.com/CodeLittlePrince/epay-sparta/commit/e907449ef4e77cbb6e5d73790ec0d542e777ab75))
* TerserPlugin支持sourceMap ([f32bf7d](https://github.com/CodeLittlePrince/epay-sparta/commit/f32bf7dddb3709f21a5810bc96ce2f2198092b42))
* TerserPlugin支持sourceMap ([2bae78b](https://github.com/CodeLittlePrince/epay-sparta/commit/2bae78bfd11fe9a08e0d86ef13e92d3024a03b9d))
* update vue-util ([f6bf51d](https://github.com/CodeLittlePrince/epay-sparta/commit/f6bf51d3ddbb331f1295bdd915d32f7481bdc973))
* 升级corejs@2至corejs@3 ([5ed37d8](https://github.com/CodeLittlePrince/epay-sparta/commit/5ed37d8a60d414cc2e560d777b53b16ca32089b3))
* 升级corejs@2至corejs@3 ([2520cd7](https://github.com/CodeLittlePrince/epay-sparta/commit/2520cd71a4984e17632294dae9fe2e6f0ae0581e))
* 升级html-webpack-plugin,为了在html中也能压缩css和js ([67d1b07](https://github.com/CodeLittlePrince/epay-sparta/commit/67d1b07e1c9a095310a5d41fa363074fbe7c5308))
* 升级html-webpack-plugin,为了在html中也能压缩css和js ([33e95ca](https://github.com/CodeLittlePrince/epay-sparta/commit/33e95ca8807a325f73683dbe2228501bdcd2f98f))
* 升级webpack-merge & 外部传入webpack plugins为prepend ([03cb6ac](https://github.com/CodeLittlePrince/epay-sparta/commit/03cb6acb8106ad0dae3c8a9f8d82eaed77d9a0f2))
* 升级webpack-merge & 外部传入webpack plugins为prepend ([82d34b7](https://github.com/CodeLittlePrince/epay-sparta/commit/82d34b784fedb51a5c5dc8677098975465e76696))
* 增加alias ([407fd3a](https://github.com/CodeLittlePrince/epay-sparta/commit/407fd3a55f6c5a4094260faa9b1cf0b2b291dc60))
* 增加alias ([7a721ea](https://github.com/CodeLittlePrince/epay-sparta/commit/7a721eab654ff65e2dcebfa0abc354c391c06861))
* 增加单测case ([8056288](https://github.com/CodeLittlePrince/epay-sparta/commit/805628824db143b604aef25cb20c8c31591f3f60))
* 支持jsx ([889bf49](https://github.com/CodeLittlePrince/epay-sparta/commit/889bf496064cdaa734181eb37c88fd5234ad4509))
* 更改版本号 ([9263373](https://github.com/CodeLittlePrince/epay-sparta/commit/926337360c6afcd2acd709744a5638e12761b579))
* 更改版本号 ([19f1b11](https://github.com/CodeLittlePrince/epay-sparta/commit/19f1b11005d66f4f7e001fbd2b63f83d23e42c2a))
* 更新demo ([bc12d48](https://github.com/CodeLittlePrince/epay-sparta/commit/bc12d48689d4631223e5e8469fab183e1ffce2af))
* 更新demo ([80c7000](https://github.com/CodeLittlePrince/epay-sparta/commit/80c7000d766b4ef7c8e66e32afca5d29b9d6f293))
* 默认安装karma-chrome-launcher ([19437f5](https://github.com/CodeLittlePrince/epay-sparta/commit/19437f5e9369ca72c544e2dff58fdd1a63c76937))
