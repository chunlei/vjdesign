export default () => field => {
  const cloned = {
    fieldOptions: {},
    ...field,
    designed: true,
    component: field.component
  }

  Object.keys(field).forEach(key => {
    delete field[key]
  })

  // 设计器不让响应其他事件
  delete cloned.events
  delete cloned.fieldOptions.on
  delete cloned.fieldOptions.nativeOn

  field.component = 'v-jd-design-wrapper'
  field.fieldOptions = { props: { field: cloned } }

  field.children = [
    cloned,
    { component: 'v-jd-design-face', fieldOptions: { class: 'designed' } },
    {
      component: 'v-jd-design-border',
      fieldOptions: {
        props: { field: cloned },
        class: 'designed'
      }
    },
    {
      component: 'v-jd-title-tag',
      fieldOptions: {
        slot: 'header',
        props: { field: cloned },
        class: 'designed',
        style: { float: 'left' }
      }
    },
    {
      component: 'v-jd-delete-tag',
      fieldOptions: {
        slot: 'header',
        props: { field: cloned },
        class: 'designed',
        style: { float: 'right' }
      }
    }
  ]
}
