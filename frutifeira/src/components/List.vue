<template>
    <div class="list">
        <h1>{{ marketerName.name }}</h1>
        <div class="product-type">
            <div class="product-type__item" v-for="item in marketerName.product_type" :key="item">{{item}}</div>
        </div>
        <div class="list-group">
            <Card v-for="item in productsMarketersList" :key="item.name" :item="item" @openDetails="openDetails(item)"/>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    components: {
        Card,
    },
    props: {
        productsMarketersList: Array,
        marketerName: Object,
    },
    methods: {
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

    .product-type {
        display: flex;
        margin-top: 10px;
        margin-left: @margin-body-desktop;

        &__item {
            border: 2px solid @green;
            padding: 10px;
            border-radius: 20px;
            min-width: 100px;
            text-align: center;
            text-transform: uppercase;
            color: @green;
            font-weight: bold;
            font-size: 12px;
            margin-right: 15px;
        }
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

    @media (max-width:768px) {
        h1 {
            margin-left: @margin-body-mobile;
        }

        .product-type {
            margin-left: @margin-body-mobile;
        }
    }
}

</style>