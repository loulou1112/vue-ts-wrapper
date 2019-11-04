# vue-ts-wrapper(vantUI + vue + vuex + vue-router + ts 到移动端外壳)

### 特殊目录/文件介绍

- `src/project.config.ts` 这个配置文件很重要，我们尽可能的把其他的配置信息配置到配置文件中。后面会介绍此配置文件。
- `src/libs` 用于存放渐进增强外壳功能的文件。例如 `enhanceRouter.ts` 增强 VueRouter 功能，但是功能没有业务逻辑。将来可以尝试写成 npm 包，发布后使用。
- `src/libs/appMixins`存放了对app外壳功能的加强的`mixins`，专门对 `app.vue` 进行赋能。此外，如果赋能给 `app` 的功能需要赋能到全局对象`gc`上，需要在 `beforeCreate` 中赋值。该目录下的 混入 会自动导入到 `app.vue` 的 `mixins`上。
- `types` 用于存放全局类型的定义类型
- `src/utils` 用于存放全局使用的工具。
> 注意: 尽可能按数据类型的功能进行放入文件，并在 index 中进行引入，并导出。

- `src/components`,`src/mixins`,`src/filter` 目录的内容会被自动全局导入到项目中，无须手动导入
- `src/install` 用于三方和批量自动引入的地方

### 一、project.config.ts

```js
/**
 * example:
 *   'Home/index' => { path: '/home', name: 'Home' }
 *   'index' => { path: '/index', name: 'Index' }
 *   'Index/index' 也是变成 { path: '/index', name: 'Index' }
 *    会和上面冲突，知悉。
 */
const env: string = process.env.VUE_APP_ENV // dev, mock, test, prod
// api 请求基本路径
const baseURL: Record<string, string> = {
  dev: 'http://172.16.1.120:9901',
  mock: 'http://172.16.1.120:9901',
  test: 'https://app-gateway-sit.yunjiaplus.com',
  prod: 'https://app-gateway.yunjiaplus.com'
}
// 暂时功能有：
const properties: ProjectConfig = {
  // 1. 页面配置, 默认页面都在 views 中
  views: ['AView/index', 'BView/index', 'CView/index', 'DView/index'],
  // 2. 请求路径
  baseURL: baseURL[env]
  // 3. 超时时间
  networkTimeout: {
    request: 10000
  }
}

export default properties
```
### 二、路由缓存

- 每一次前进就会对页面进行一次缓存，后退就会卸载掉缓存。也可以通过页面自己的 json 配置中的`keepAlive` 单独做配置控制是否保活，只能是布尔类型。
- 此外，`enhanceRouter.ts` 还提供了 `redirect` 功能，会卸载掉之前所有的保活和路由记录。`this.$router.redirect(Rawlocation)`

```html
<!-- `$cachedViews`变量是 `src/libs/enhanceRouter.ts` 提供 -->
<div id="app">
  <keep-alive :include="$cachedViews">
    <router-view />
  </keep-alive>
</div>
```

### 三、posts-px2rem

项目中使用了 px 转 rem 插件。所以，开发中只需要直接写 px 即可。

### 四、json 配置

```json
{
  "title": "标题"， // 标题
  "keepAlive": true， // 不填默认路由保活规则，布尔类型才可以使页面一直保持状态
}
```



### 三、ts 教程

> 关于 TS 的基本操作，查看[官网文档](https://www.tslang.cn/docs/home.html)即可。

### 四、vue-property-decorator

ts中使用vue的写法，可以直接参照文档。

[`vue-property-decorator` 使用指南](https://juejin.im/post/5c173a84f265da610e7ffe44)

[`vue-property-decorator`的npm文档](https://www.npmjs.com/package/vue-property-decorator)



### 注意

自己要写什么的时候，建议先参照案例来保持一致，如果有什么更好的建议，欢迎提出来～

