<template>
  <div class="modal-wrap" v-if="visible">
    <header>
      <span>{{title}}</span>
    </header>
    <div class="body">
      <slot></slot>
    </div>
    <footer>
      <slot name="footer">
        <button @click="onSubmit">submit</button>
        <button @click="onCancel">cancel</button>
      </slot>
    </footer>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'visible',
    event: 'toggle'
  },
  props: {
    visible: Boolean,
    title: String
  },
  mounted() {
    this.modalContainer = document.createElement('div')
    this.modalContainer.appendChild(this.$el)
    document.body.appendChild(this.modalContainer)
  },
  destroyed() {
    document.body.removeChild(this.modalContainer)
  },
  methods: {
    onSubmit() {
      const { submit } = this.$listeners
      submit && submit()
    },
    onCancel() {
      this.close()
    },
    close() {
      this.$emit('toggle', false)
    }
  }
}
</script>
<style lang="less">
  .modal-wrap{
    display: flex;
    position: fixed;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 600px;
    height: 400px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    header, footer{
      padding: 10px;
    }
    .body{
      padding: 0 10px;
    }
    footer{
      text-align: right;
      button{
        font-size: 16px;
        margin-left: 10px;
      }
    }
    .body{
      flex: 1;
    }
  }
</style>