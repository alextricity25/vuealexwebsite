<template>
	<div class="socialMediaRibbon">
		<SocialMediaButton
		button-type="fab fa-blogger-b"
		link="http://blog.miguelalexcantu.com"/>
		<SocialMediaButton
		button-type="fab fa-twitter"
		link="https://twitter.com/MiguelAlexCantu"/>
		<SocialMediaButton
		button-type="fab fa-instagram"
		link="https://www.instagram.com/miguelalexcantu/"/>
		<SocialMediaButton
		button-type="fab fa-linkedin-in"
		link="https://www.linkedin.com/in/miguelalexcantu/"/>
		<SocialMediaButton
		button-type="fab fa-github"
		link="https://github.com/alextricity25"/>
		<SocialMediaButton
		button-type="fas fa-file-pdf"
		link="https://storage.googleapis.com/my_website_assets/AlexResume07_08_2020.pdf"/>
	</div>
</template>

<script>
import SocialMediaButton from './SocialMediaButton.vue';

var socialMediaReel = [
	{
		name: "Blogger",
		class: "fab fa-blogger-b",
		opacity: 0
	},
	{
		name: "Twitter",
		class: "fab fa-twitter",
		opacity: 0
	},
	{
		name: "Instagram",
		class: "fab fa-instagram",
		opacity: 0
	},
	{
		name: "LinkedIn",
		class: "fab fa-linked-in",
		opacity: 0
	}
]

socialMediaReel;

export default {
	name: 'SocialMediaRibbon',
	components: {
		SocialMediaButton
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
