<template>
    <div class="w-[90%] md:w-[90%] lg:w-[77%] xl:w-[50%] 2xl:w-[37%] mx-auto mt-10">
        <div class="grid grid-cols-12 border py-5 px-2 md:px-10 rounded rounded-lg shadow-lg">

                <div class="col-span-1 w-[40px] py-3 hidden md:block">
                    <div class=" bg-gray-100 h-[100px] flex flex-col justify-around items-center rounded rounded-lg ">
                        <img src="../../images/icon-plus.svg" alt="">
                        <p class="text-blue-900" >{{count}}</p>
                        <img src="../../images/icon-minus.svg" alt="">
                    </div>
                </div>

                <div class="col-span-12 md:col-span-11">
                    <div class="grid grid-cols-4 pl-3 py-3">
                        <div class="col-span-4  md:col-span-2">
                            <div class="flex items-center space-x-5">
                                <img src="../../images/avatars/image-amyrobson.png" class="w-[40px]" alt="">
                                <h1 class="font-[500]">amyrobson</h1>
                                <p>1 month ago</p>
                            </div>
                        </div>
                        <div class="col-span-2 hidden md:block">
                            <div class="text-end">
                                <button class="mt-2 space-x-5 " @click="showCommentBox">
                                    <img src="../../images/icon-reply.svg" class="inline" alt="">
                                    <span class="font-[500] text-blue-900">Reply</span>
                                </button>
                            </div>
                        </div>
                </div>

                <div class="grid grid-cols-4 px-5 pb-3 space-y-5">
                    <div class="col-span-4">
                        <p class="text-gray-600 text-justify">Impressive? Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                    </div>

                    <div class="col-span-4 md:hidden">
                        <div class="grid grid-cols-4">
                            <div class="col-span-2">
                                <div class="w-[75%] flex items-center justify-between bg-gray-100 px-5 py-3 rounded rounded-lg">
                                    <img src="../../images/icon-plus.svg" alt="">
                                    <p class="text-blue-900">{{count}}</p>
                                    <img src="../../images/icon-minus.svg" alt="">
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div class="text-end">
                                     <button class="mt-2 space-x-5" @click="showCommentBox">
                                        <img src="../../images/icon-reply.svg" class="inline" alt="">
                                        <span class="font-[500] text-blue-900">Reply</span>
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
export default {
    props : ['toShow','count'],
    emits : ['run'],

    setup (props,context) {
        
        
        let showCommentBox = () =>{
            context.emit('run')
        }

        return {showCommentBox}
    }
}
</script>

<style lang="scss" scoped>

</style>