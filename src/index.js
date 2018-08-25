import Vue from 'vue'
import VueTippy from 'vue-tippy'
import App from './App.vue'


const ENTER_KEY_CODE = 13

Vue.use(VueTippy, {
  maxWidth: '200px',
  duration: 200,
  arrow: false,
  animation: 'scale',
  size: 'small',
  delay: 0,
  animateFill: false,
  theme: 'blue',
})

Vue.component('editable', {
  template: '<div contenteditable="true" @input="handle"></div>',

  props: ['content'],

  mounted () {
    this.$el.innerText = this.content
  },

  watch: {
    content (val, old) {
      this.$el.innerText = this.content || old
    },
  },

  methods: {
    handle (e) {
      if (e.which === ENTER_KEY_CODE) {
        e.preventDefault()
        return false
      }

      this.$emit('output', e.target.innerText)

      return true
    },
  },
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
})
