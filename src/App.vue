<script>
import Navbar from "./main/Navbar.vue";
import Footer from "./main/Footer.vue";
import LastPrice from "./main/LastPrice.vue";
import DateTimePrice from "./main/DateTimePrice.vue";

export default {
	components: { Navbar, Footer, LastPrice, DateTimePrice }
}
</script>

<template>
	<header>
		<Navbar></Navbar>
	</header>

	<main class="flex flex-col gap-4 pb-8">
		<LastPrice></LastPrice>
		<DateTimePrice></DateTimePrice>
	</main>

	<footer>
		<Footer></Footer>
	</footer>

</template>
