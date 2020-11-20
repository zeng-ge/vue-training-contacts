<script>
export default {
    props: {
        show: Boolean
    },
    render(){
        return this.show && (
            this.$slots.default
        )
    }
}
</script>