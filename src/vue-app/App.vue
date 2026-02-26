<template>
    <div class="demo-page">
        新页面
        <button @click="butclick">click me</button>
        <span>{{ name }}</span>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
const name = ref('')
function butclick() {
    fetch("/api/")
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            console.log(data);
            name.value = data.name
        });

}

onMounted(() => {

})
</script>
<style scoped lang="scss">
.demo-page {
    background-color: antiquewhite;
    button{
        color: red;
    }
}
</style>
