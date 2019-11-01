# vue-ts-wrapper(pus)

### 特殊目录/文件介绍

- `src/project.config.ts` 这个配置文件很重要，我们尽可能的把其他的配置信息配置到配置文件中。后面会介绍此配置文件。
- interface: 用于存放 `*.d.ts`文件, interface 目录的定义结构预期应该和 src下所需要定义的文件目录类似。例如
  + `src/project.config.ts` 需要定义一定接口
  + `interface/project.config.d.ts` 定义上面的接口
- libs 用于存放渐进增强外壳功能的文件。例如 `enhanceRouter.ts` 增强 VueRouter 功能，但是功能没有业务逻辑。将来可以尝试写成 npm 包，发布后使用。
- types 用于存放全局类型的定义类型
- utils 用于存放全局使用的工具。
> 注意: 尽可能按数据类型的功能进行放入文件，并在 index 中进行引入，并导出。

- `components`,`mixins`,`filter` 目录的内容会被自动全局导入到项目中，无须人工引入



### 一、project.config.ts

```js 
// 1. 页面配置, 默认页面都在 views 中
  /**
   * example:
   *   'Home/index' => { path: '/home', name: 'Home' }
   *   'index' => { path: '/index', name: 'Index' }
   *   'Index/index' 也是变成 { path: '/index', name: 'Index' }
   *    会和上面冲突，知悉。
   */

import ProjectConfig from '@/interface/project.config'

const properties: ProjectConfig = {
  views: ['A/index', 'B/index', 'C/index', 'D/index']
}

export default properties
```
### 二、路由缓存

每一次前进就会对页面进行一次缓存，后退就会卸载掉缓存。也可以通过页面自己的 json 配置中的`keepAlive` 单独做配置控制是否保活，只能是布尔类型。
此外，`enhanceRouter.ts` 还提供了 `redirect` 功能，会卸载掉之前所有的保活和路由记录。`this.$router.redirect(Rawlocation)`

```html
<!-- `$cachedViews`变量是 `src/libs/enhanceRouter.ts` 提供 -->
<div id="app">
  <keep-alive :include="$cachedViews">
    <router-view />
  </keep-alive>
</div>
```

### 三、ts 教程
#### 3.1 .d.ts 部分规则
