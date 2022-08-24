<script>
import Navbar from "./main/Navbar.vue";
import LastPrice from "./main/LastPrice.vue";
import DateTimePrice from "./main/DateTimePrice.vue";

export default {
	components: { Navbar, LastPrice, DateTimePrice }
}
</script>

<template>
	<header>
		<Navbar></Navbar>
	</header>
	<main class="flex flex-col gap-4">
		<LastPrice></LastPrice>
		<DateTimePrice></DateTimePrice>
	</main>
</template>
