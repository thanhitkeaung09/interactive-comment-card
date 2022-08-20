<template>
  <div>
    <FirstCard :toShow="show" :count="arrs.length" @run="change"></FirstCard>
    <ReplySection @update="updateFun"  v-if="replyshow" v-for="(arr,index) in arrs" :key="index" @delete="showDelete" :toShow="arr" :index="index" @run="IndexShow" class="animate__animated animate__fadeIn" ></ReplySection>
    <ReplyBox :index="indexShow" v-if="show" :editText="arrs"  class="animate__animated animate__fadeIn" @show="changeReplySection"></ReplyBox>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import FirstCard from "./components/FirstCard.vue";
import ReplyBox from "./components/ReplyBox.vue"
import ReplySection from './components/ReplySection.vue';
import { useCounterStore } from './stores/counter';
export default {
    setup() {

        let store = useCounterStore();

        let arrs = ref([])
        let show = ref(false);
        let replyshow = ref(false);
        let replyindex = ref();
        let indexShow = ref();

        let change = () =>{
          show.value = !show.value
          console.log("hello world")
        }

        let showDelete = (x) =>{
            arrs.value.splice(x,1)
        }

        let changeReplySection = () =>{
          replyshow.value = true
          // show.value = false
          arrs.value.push(store.text)

          console.log("heyy")
        }

        let IndexShow = (x) =>{
            console.log(x)
            indexShow.value = x;
        }

        let updateFun = (x,y) =>{
          // console.log(x,y)
          // arrs[y] = x
          console.log(arrs.value[y])
          arrs.value[y] = x
        }

        return {show,change,replyshow,changeReplySection,arrs,showDelete,IndexShow,updateFun};
    },
    components: { FirstCard, ReplyBox, ReplySection }
}
</script>

<style lang="scss" scoped>

</style>