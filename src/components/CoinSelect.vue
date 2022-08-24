<script>
import axios from "axios";
export default {
    data() {
        return {
            coins: [],
            selectedCoin: null
        }
    },
    watch: {
        selectedCoin: function (newValue, oldValue) {
            this.$emit('changeCoin', newValue)
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/coin/list').then(response => {
            this.coins = response.data.coins
            this.selectedCoin = this.coins[0].id
        }).catch(error => {
            this.$swal.fire('An error has occured!',
                error.response.data.message,
                'error'
            )
        })
    },
}
</script>
<template>
    <div class="bg-gradient-to-r from-violet-500 to-violet-700 via-violet-600 rounded-t-lg w-3/5 lg:w-1/5 mt-5"
        v-if="coins">
        <div class="p-0.5">
            <select v-model="selectedCoin"
                class="bg-neutral-700 px-1.5 text-white text-lg rounded-t-lg w-full focus:outline-none">
                <option v-for="(coin, index) in coins" :key="index" :value="coin.id">{{ coin.name }}</option>
            </select>
        </div>
    </div>
</template>