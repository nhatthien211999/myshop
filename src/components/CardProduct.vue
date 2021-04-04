<template lang="">
    <div style="margin: 0 0 20px 0">
        <div class="opentime-status">
            <span class="stt online" title="Mở cửa" style="color: rgb(35, 152, 57);background-color: rgb(35, 152, 57);"></span>
        </div>
        <div class="infor-product">
            <img :src="product.image" alt="Card image" style="width:100%">
            <div style="border-bottom: 2px solid #d7d7d7;padding: 2px 8px; ">
                <h1 class="product-name">{{product.name}}</h1>
                <h2 class="addr">{{product.address}}</h2>
             </div>
            <span class="promotion">{{product.sale}}</span>
        </div>
    </div>
</template>
<script>

export default {
    props: ['product'],
    created () {
        this.test();
    },
    methods: {
        test () {
            console.log(this.product)
        }
    }
}
</script>
<style lang="">
    
</style>