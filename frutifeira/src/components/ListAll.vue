<template>
    <div class="list">
        <div class="list-group">
            <Card v-for="item in productsMarketersList" :key="item.name" :item="item" @openDetails="openDetails(item)"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import Card from "@/components/Card.vue";

export default {
    components: {
        Card,
    },
    data() {
        return {
            productsMarketersList: Array,
        }
    },
    created() {
        this.findMarketerProducts(this.$route.params.id);
    },
    methods: {
        async findMarketerProducts(id) {
            const marketer = await axios.get(`http://localhost:5000/api/v1.0/products/feirante/${id}`);
            this.productsMarketersList = marketer.data
        },
        openDetails(item) {
            this.$emit("openDetails", item);
        },
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.list {
    h1 {
        color: @green;
        margin-left: @margin-body-desktop;
        margin-top: 40px;
    }

    &-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 13px;
        margin-top: 40px;
        flex-wrap: wrap;
        margin-left: @margin-body-desktop;
        margin-right: @margin-body-desktop;
        // justify-content: center;

        @media (max-width: 768px) {
            margin-left: @margin-body-mobile;
            margin-right: @margin-body-mobile;
        }
    } 
}

</style>