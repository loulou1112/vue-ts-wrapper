# vue-ts-wrapper(push)

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

