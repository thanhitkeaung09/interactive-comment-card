<template>
    <div class="w-[90%] md:w-[90%] lg:w-[77%] xl:w-[50%] 2xl:w-[37%] mx-auto mt-၅">
        <div class=" ml-10 grid grid-cols-12 border py-5 px-2 md:px-10 rounded rounded-lg shadow-lg">

                <div class="col-span-1 w-[40px] py-3 hidden md:block">
                    <div class=" bg-gray-100 h-[100px] flex flex-col justify-around items-center rounded rounded-lg ">
                        <img src="../../images/icon-plus.svg" alt="">
                        <p class="text-blue-900" >12</p>
                        <img src="../../images/icon-minus.svg" alt="">
                    </div>
                </div>

                <div class="col-span-12 md:col-span-11">
                    <div class="grid grid-cols-4 pl-3 py-3">
                        <div class="col-span-4  md:col-span-2">
                            <div class="flex items-center space-x-5">
                                <img src="../../images/avatars/image-juliusomo.png" class="w-[40px]" alt="">
                                <h1 class="font-[500]">Juliusomo</h1>
                                <p>Just Now</p>
                            </div>
                        </div>
                        <div class="col-span-2 hidden md:block">
                            <div class="text-end flex items-center justify-end">
                                
                                <button class="flex justify-end mr-8" @click="deleteBox">
                                    <img src="../../images/icon-delete.svg" class="mt-2 mr-3" alt="">
                                    <span class="text-red-500 mt-1" >Delete</span>
                                </button>


                                <button class="mt-2 space-x-5 " @click="showCommentBox">
                                    <img src="../../images/icon-edit.svg" class="inline" alt="">
                                    <span class="font-[500] text-blue-900">Edit</span>
                                </button>
                            </div>
                        </div>
                </div>

                <div class="grid grid-cols-4 px-5 pb-3 space-y-5">
                    <div class="col-span-4">
                        <!-- <p class="text-gray-600 text-justify">{{replyText}}</p> -->
                        <p v-if="isEdit" class="text-gray-600 text-justify">{{toShow}}</p>
                        <div v-else  class="">
                            <input type="text" v-model="oldValue" class="border p-3 focus:outline-none rounded rounded-lg">
                            <button @click="update" class="px-3 py-2 bg-blue-900 rounded rounded-lg text-white" >Update</button>
                        </div>
                    </div>

                    <div class="col-span-4 md:hidden">
                        <div class="grid grid-cols-4">
                            <div class="col-span-2">
                                <div class="w-[75%] flex items-center justify-between bg-gray-100 px-5 py-3 rounded rounded-lg">
                                    <img src="../../images/icon-plus.svg" alt="">
                                    <p class="text-blue-900">12</p>
                                    <img src="../../images/icon-minus.svg" alt="">
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div class="text-end flex items-center">
                                    <button class="flex justify-end mr-3" @click="deleteBox">
                                    <img src="../../images/icon-delete.svg" class="mt-2 mr-3" alt="">
                                    <span class="text-red-500 mt-1" >Delete</span>
                                </button>


                                <button class="mt-2 space-x-5 flex " @click="showCommentBox">
                                    <img src="../../images/icon-edit.svg" class="inline" alt="">
                                    <span class="font-[500] text-blue-900">Edit</span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useCounterStore } from '../stores/counter'
export default {
    props : ['toShow','index'],
    emits : ['run'],

    setup (props,context) {
        let oldValue = ref();

        let isEdit = ref(true)

        let store = useCounterStore();

        let replyText = ref(store.text)
        
        
        let showCommentBox = () =>{
            context.emit('run',props.index)
            store.index = props.index
            isEdit.value = !isEdit.value
            oldValue.value = props.toShow
            console.log(isEdit)
        }

        let deleteBox = () => {
            context.emit('delete',props.index)
        }

        let update = () =>{
            context.emit('update',oldValue.value,props.index)
            isEdit.value = true
            // console.log()
        }

        return {showCommentBox,replyText,deleteBox,isEdit,oldValue,update}
    }
}
</script>

<style lang="scss" scoped>

</style>