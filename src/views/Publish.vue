<template>
    <content class="publish">
        <textarea v-model="md" class="publish_edit" ></textarea>
        <article v-html="markdown(md)" class="publish_show"></article>
    </content>
</template>

<script>
    import marked from 'marked'
    export default {
        data(){
            return {
                md: '',
                mark: ''
            }
        },
        methods: {
            markdown(){
                return marked(this.md)
            }
        }
    }
</script>

<<style lang="postcss">
    .publish{
        

        & .publish_edit{
            
        }

        & .publish_show{

        }
    }
</style>

