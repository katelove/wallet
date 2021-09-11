<template lang="">
    <div class="relative">
        <div
            class="text-25px text-white rounded-10px bg-melancholyBlue text-center	absolute h-65px w-full pt-2"
            :class="[title ? '-top-12' : '-top-8']"
        >
            {{title}}
        </div>

        <div
            class="rounded-10px border border-melancholyBlue min-h-100px relative bg-white"
            v-bind="$attrs"    
        >
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'title' ]
}
</script>
