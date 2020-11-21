<script>
export default {
  render() {
    return (
      <div class="panel">
        <div class="header">{this.$slots.header}</div>
        <div class="body">{this.$slots.default}</div>
        <div class="footer">{this.$slots.footer}</div>
      </div>
    );
  },
};
</script>