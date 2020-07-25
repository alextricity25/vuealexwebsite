<template>
	<div class="socialMediaButton">
		<a :class="buttonType" v-bind:href="link"></a>
		<div style="opacity: 1" class="arrow-down"></div>
	</div>
</template>

<script>

export default {
	name: 'SocialMediaButton',
	props: {
		buttonType: String,
		link: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socialMediaButton {
	display: inline-block;
	margin: 6px;
}

a {
	border-radius: 50%;
	padding: 15px;
	background: #fff;
	color: #000;
	width: 16px;
	height: 16px;
}

a:hover {
	color: #fff;
	background: #000;
}

.arrow-down {
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid #fff;
	position: relative;
	left: 50%;
	margin-left: -5px;
}
</style>
