<script>
import CoinSelect from "../components/CoinSelect.vue";
import CoinPrice from "../components/CoinPrice.vue";
import axios from "axios";
export default {
    data() {
        return {
            selectedCoin: null,
            coin: null,
            price: null
        };
    },
    methods: {
        changeCoin(id) {
            this.selectedCoin = id
        }
    },
    watch: {
        selectedCoin: function(newValue, oldValue) {
            axios.get("http://127.0.0.1:8000/api/coin/" + this.selectedCoin + "/last-price", {
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
    mounted() {
        window.Echo.channel('new-price').listen('NewPrice', (e) => {
            axios.get("http://127.0.0.1:8000/api/coin/" + this.selectedCoin + "/last-price", {
                params: {
                    'dateTime': this.dateTime
                }
            }).then(response => {
                this.coin = response.data.coin
                this.price = response.data.price
            }).catch(error => {
                this.$swal.fire("An error has occured!", error.response.data.message, "error");
            });
        })
    },
    components: { CoinSelect, CoinPrice }
}
</script>
<template>
    <div class="flex flex-col items-center mt-4">
        <h1 class="text-white text-3xl font-bold">Selected Crypto last price</h1>

        <CoinSelect
            @changeCoin="changeCoin"
        ></CoinSelect>

        <CoinPrice
            :coin="coin"
            :price="price"
        ></CoinPrice>

    </div>
</template>