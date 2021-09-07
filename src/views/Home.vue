<template lang="">
    <div class="flex justify-center mt-5 flex-col w-1/2 m-auto">
        <Button class="w-full h-12">提交sdsds</Button>
        <Input type="password" class="mt-5"/>
        <BlueContainer title="">
            test
        </BlueContainer>

        <BlueContainer title="ㄏ哈哈">
            test
        </BlueContainer>
    </div>
</template>

<script>
import Button from "../components/Button.vue"
import Input from "../components/Input.vue"
import BlueContainer from "../components/BlueContainer.vue"

export default {
    components: {
        Button,
        Input,
        BlueContainer
    },
}
</script>
<style lang="">
    
</style>