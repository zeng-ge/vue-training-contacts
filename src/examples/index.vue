<template>
    <div>
        <ContactList></ContactList>
        <ContactCreate></ContactCreate>
        <I18nComponent></I18nComponent>
        <Panel>
        <template v-slot:header>header</template>
        <div>body</div>
        <template v-slot:footer>footer</template>
        </Panel>

        <JSXPanel>
        <template v-slot:header>jsx header</template>
        <div>jsx body</div>
        <template v-slot:footer>jsx footer</template>
        </JSXPanel>
        <IfComponent :show="true">show</IfComponent>
        <IfComponent :show="false">false</IfComponent>
        <vModelComponent v-model="visible" name="sky"></vModelComponent>
    </div>
</template>
<script>
import ContactList from './template/ContactList'
import ContactCreate from './form/ContactCreate'
import I18nComponent from './i18n/I18nComponent'
import Panel from './slot/Panel'
import JSXPanel from './jsx/JSXPanel'
import IfComponent from './jsx/IfComponent'
import vModelComponent from './component/vModelComponent'
export default {
  components: {
    ContactList,
    ContactCreate,
    I18nComponent,
    Panel,
    JSXPanel,
    IfComponent,
    vModelComponent
  },
  data(){
    return {
      visible: true
    }
  }
}
</script>