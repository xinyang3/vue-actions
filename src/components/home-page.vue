<script>
export default {
    name: 'home-page',
    data () {
        return {}
    },
    render (h) {
        return h(
            'el-container',
            {
                class: {
                    'container': true
                }
            },
            [
                h(
                    'router-view',
                    {
                        ref: 'myRouter'
                    }
                )
            ]
        )
    },
    methods: {

    }

}
</script>