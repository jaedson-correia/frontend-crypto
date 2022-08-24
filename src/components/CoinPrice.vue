<script>
export default {
    props: {
        coin: {
            required: true,
        },
        price: {
            required: true,
        }
    }
}
</script>
<template>
    <div v-if="coin"
        class="bg-gradient-to-l bg-violet-gradient rounded-lg mt-5 p-1 w-4/5 lg:w-2/5 h-60">
        <div class="flex flex-col justify-center items-center bg-neutral-700 p-2 rounded-lg h-full">
            <h1 class="text-white text-3xl">{{ coin.name }} ({{ coin.symbol }})</h1>
            <p class="text-neutral-400 text-xs">Last update: {{ price.price_date }}(UTC)</p>
            <div class="flex items-center w-28 h-28 my-3 animate-flipY">
                <img :src="coin.image" alt="Crypto image">
            </div>
            <h1 class="text-white text-lg">${{ price.price }}</h1>
        </div>
    </div>
    <div v-else
        class="bg-gradient-to-l bg-violet-gradient rounded-lg mt-5 p-1 w-4/5 lg:w-2/5 h-60">
        <div class="flex flex-col justify-center items-center bg-neutral-700 p-2 rounded-lg h-full">
        </div>
    </div>
</template>