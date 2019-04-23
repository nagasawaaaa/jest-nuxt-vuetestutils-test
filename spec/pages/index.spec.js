import { mount } from '@vue/test-utils'
import HomePage from '@/pages/index.vue'

describe('HomePage', () => {
  const wrapper = mount(HomePage)
  test('Vueインスタンス である', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('h1.title が存在する', () => {
    const title = wrapper.find('.title')
    expect(title.is('.title')).toBeTruthy()
  })
})
