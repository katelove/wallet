<template lang="">
    <div class="sortableListContainer rounded-10px bg-white mb-[10px] shadow-bottom text-12px">
        <div class="flex pt-[12px] px-[16px] justify-between text-lightGray0">
            <div
                v-for="column in columns"
                :key="column.sortKey"
                class="flex items-center"
                @click="toggleSortOrDirection(column.sortKey)"
            >
                <p>
                    {{ column.title }}
                </p>
                <SortIcon
                    :is-active="column.sortKey === sortKey"
                    :direction="direction"
                />
            </div>
        </div>
        <div
            v-for="(item, index) in sortData"
            :key="item.name"
            class="flex px-[16px] items-center py-[13px]"
            :class="index + 1 !== sortData.length ? 'border-b-[0.5px] border-[#c8c8c8]' : ''"
            @click="$router.push(`/trade/${item[0]}`)"
        >
            <slot
                v-for="column in columns"
                :name="column.dataSlot"
                :column="item"
            />
        </div>
    </div>
</template>
<script>
import SortIcon from "@/components/SortIcon.vue";

export default {
    components: {
        SortIcon,
    },
    props: {
        columns: {
            type: Array,
            required: true,
        },
        sourceData: {
            type: Array,
            default: () => [],
        },
        defaultSortKey: {
            default: "",
            type: String,
        },
    },
    data() {
        return {
            sortKey: this.defaultSortKey || this.columns[0].sortKey,
            direction: 1,
            sortData: [],
        };
    },
    watch: {
        sourceData(newV) {
            this.sortData = this.sortList(newV);
        },
    },
    methods: {
        sortList(list) {
            const sortKey = this.sortKey;
            const direction = this.direction;
            const sortType = this.columns.find((e) => e.sortKey === sortKey).sortType;
            let callback;

            if (sortType === "string") {
                callback = (a, b) => (a[0] > b[0] ? direction : direction * -1);
            } else if (sortType === "number") {
                callback = (a, b) => (parseFloat(a[1][sortType]) > parseFloat(b[1][sortType]) ? direction * -1 : direction);
            }
            return list.sort(callback);
        },
        toggleSortOrDirection(sortKey) {
            if (sortKey !== this.sortKey) {
                this.sortKey = sortKey;
                this.direction = 1;
            } else {
                this.direction = this.direction * -1;
            }
        },
    },
};
</script>
