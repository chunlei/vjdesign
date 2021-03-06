## 基本操作

拖动左侧工具箱组件到右侧设计区

点击一个设计区组件，在右侧属性面板进行组件属性编辑

## 表达式

组件属性和事件支持表达式实现动态关联，和 `excel` 公式的使用形式类似

组件的属性值如果具有特定前缀，则输入内容会被解析成特定实现，前缀规则如下：

| 前缀       | 说明                                                 | 示例                                                                                                         |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `$:`       | 可将变量里的属性或者属性计算后的结果作为关联属性的值 | `$:model.text` 组件的属性关联 model 的 text 属性值                                                           |
| `#:`       | 输出模板字符串，可在字符串中插入变量                 | `#:输入了 ${model.text.length} 个字符` 组件属性是一个模板字符串，其中引用了 model 的 text 属性值作为模板内容 |
| `@:`       | 可将值转换成一个方法，表达式中定义方法的执行过程     | `@:alert('popup!')` 定义组件事件执行方法，弹出一个对话框                                                     |
| `@<属性>:` | 可实现一个具有更新 `model` 属性值的事件              | `@text:arguments[0].target.value` 组件输入内容时更新 model 中 text 属性值                                    |

如果使用前缀，则组件属性实际上是一个 js 语言表达式, 例如：`$:1` 代表属性值就是数字 1

表达式可使用表单内置的功能函数, 例如：`ADD(model.value, 1)` 可实现 model 的 value 属性值加 1 作为输出结果

- 因为只有 model 是内部交互的数据，因此组件内部的交互行为只能更新 model 里的数据，所以用 `@text:` 这种方式实现更新 model 属性值

## 变量

变量可在组件属性值的表达式中使用

表单提供以下变量

- `model` - 表单中组件交互之后产生变化的值，通常是文本输入、选择等交互行为
- `params` - 从外部输入的值，只能由表单外部操作
- `datasource` - 数据源的实例，可使用数据源的数据和数据源的方法，通常是触发数据源对象调用 http 请求的方法和使用请求后返回的数据，或是 websocket 链接推送的数据(需二次开发)
- `arguments` - 当表达式关联的是一个组件的事件时，事件参数集合数组
- `refs` - 表单组件的实例，可使用组件实例的方法和组件属性数据

## 元数据

左侧元数据界面可直接查看和编辑表单 json 定义
