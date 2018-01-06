import Vue from 'vue'
import Vuelidate from 'vuelidate'
import isItDark from './isItDark'

import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VForm,
  VMenu,
  VDatePicker,
  VDialog,
  VBtnToggle,
  VDivider,
  VAvatar
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#9c27b0',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  },
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VForm,
    VMenu,
    VDatePicker,
    VDialog,
    VBtnToggle,
    VDivider,
    VAvatar
  }
})

Vue.use(Vuelidate)

Vue.mixin({
  methods: {
    isItDark,
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
})
