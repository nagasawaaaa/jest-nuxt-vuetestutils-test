import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  const wrapper = mount(Logo)
  test('Vueインスタンス である', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('.VueToNuxtLogo が存在する', () => {
    const title = wrapper.find('.VueToNuxtLogo')
    expect(title.is('.VueToNuxtLogo')).toBeTruthy()
  })
})
