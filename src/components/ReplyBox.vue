<template>
    <div class="w-[90%] md:w-[90%] lg:w-[77%] xl:w-[50%] 2xl:w-[37%] mx-auto mt-2">
        <div class="grid grid-cols-12 border py-5 px-2 md:px-10 rounded rounded-lg shadow-lg">
            <div class="col-span-12 md:col-span-1">
                <div class="">
                    <img src="../../images/avatars/image-juliusomo.png" class="w-[40px] inline " alt="">
                    <span class="text-blue-900 md:hidden ml-5 font-[500]" >Juliusomo</span>
                </div>
            </div>
            <div class="col-span-12  md:col-span-8 md:w-[116%]">
                <div class="py-5 md:py-0 w-[80%] md:w-full mx-auto">
                    <textarea v-model="inputText" name="" id="" cols="40" rows="5" class=" border w-full border-gray-300 rounded rounded-lg focus:outline-none px-5 py-2">
                        
                    </textarea>
                    <!-- <p></p> -->
                </div>
            </div>
            <div class="col-span-12 md:col-span-3">
                <div class="text-end">
                    <button @click="showReplyBox" type="button" class="w-full md:w-auto text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reply</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useCounterStore } from '../stores/counter'

export default {
    props: ['editText','index'],
    setup (props,context) {
        let inputText = ref()

        let store = useCounterStore();
        
        console.log(props.index)

        // let indexNumber = ref(1)
        // let newArr = ref(props.editText);
        // console.log(indexNumber.value)
        // newArr.value.map((el,index)=>{
        //     console.log(index)
        // })
       
        // let newText = props.editText[store.newIndex];
        
        // console.log(newText)
        
        let showReplyBox = () =>{
            store.text = inputText.value
            context.emit('show')
            inputText.value = ''
            console.log("Reply Box")
        }

        return {showReplyBox,inputText}
    }
}
</script>

<style lang="scss" scoped>

</style>