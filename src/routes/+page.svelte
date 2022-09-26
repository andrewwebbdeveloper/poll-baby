<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Click a baby to see the results" />
</svelte:head>

<section>
	<h1>Click a baby <span class="pointer">👆🏼</span></h1>
</section>

<style>
	.pointer {
		position: absolute;
		animation: bounce 3s infinite;
	}

	@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
