<script>
import CoinSelect from "../components/CoinSelect.vue";
import CoinPrice from "../components/CoinPrice.vue";
import axios from "axios";
export default {
    data() {
        return {
            selectedCoin: null,
            coin: null,
            price: null,
            dateTime: null
        };
    },
    methods: {
        changeCoin(id) {
            this.selectedCoin = id
        },

        search() {
            axios.get("http://127.0.0.1:8000/api/coin/" + this.selectedCoin + "/price-by-datetime", {
                params: {
                    'dateTime': this.dateTime
                }
            }).then(response => {
                this.coin = response.data.coin
                this.price = response.data.price
            }).catch(error => {
                this.$swal.fire("An error has occured!", error.response.data.message, "error");
            });
        }
    },
    components: { CoinSelect, CoinPrice }
}
</script>
<template>
    <div class="flex flex-col items-center mt-4">
        <h1 class="text-white text-3xl font-bold">Date Crypto price</h1>

        <div class="bg-gradient-to-tr bg-violet-gradient rounded-md mt-5 p-0.5 w-3/5 lg:w-1/5 h-8">
            <input v-model="dateTime" type="datetime-local" class="bg-neutral-700 p-2 text-white border-none outline-none w-full h-full rounded-md">
        </div>

        <CoinSelect
            @changeCoin="changeCoin"
        ></CoinSelect>

        <div class="bg-gradient-to-tl bg-violet-gradient rounded-md mt-5 p-0.5 w-3/5 lg:w-1/5 h-8">
            <button class="text-white bg-neutral-700 hover:text-neutral-700 hover:bg-white duration-200 w-full rounded-md text-lg" type="button" @click.prevent="search">Search</button>
        </div>

        <CoinPrice
            :coin="coin"
            :price="price"
        ></CoinPrice>

    </div>
</template>