<template>
    <div class="food">
        <Header></Header>
        <list class="list"></list>
    </div>
</template>

<script>
import Header from "../../ChildrenCommon/ChildrenHeader.vue";
import transverseList from "../../ChildrenCommon/transverseList.vue";

export default {
    components:{
        Header,
        List:transverseList
    }
}
</script>

<style scoped>
.food{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 2;
}
.list{
    position: absolute;
    top: 40px;
    left: 0;
}
</style>
