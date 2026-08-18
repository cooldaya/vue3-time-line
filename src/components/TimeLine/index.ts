import Vue3TimeLineCom from './TimeLine.vue'

interface IOptions {
  comName?: string
}

interface ITimeLine {
  install(app: any, options?: IOptions): void
}

const Vue3TimeLine : ITimeLine = {
  install(app, options) {
    const comName = options?.comName ? options?.comName : 'TimeLine'
    app.component(comName, Vue3TimeLineCom)
  }
}

// 命名导出组件本身，支持按需引入
export const TimeLine = Vue3TimeLineCom

// 默认导出插件对象，支持通过 app.use() 全局引入
export default Vue3TimeLine
