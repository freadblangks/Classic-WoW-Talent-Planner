<template>
	<div v-if="showTooltip" class="skill-tooltip">
		<h3>{{skill.name}}</h3>
		<p class="rank-description">{{skill.rankDescription[skill.currentRank-1]}}</p>
		<div v-if="this.skill.requirements && !this.skill.enabled">
			<p class="skill-requirement" v-if="skill.requirements.skill">Requires {{skill.requirements.skill.skillPoints}} points in {{ getRequiredSkillName }} </p>
			<p class="skill-requirement" v-if="skill.requirements.specPoints">Requires {{skill.requirements.specPoints}} points in {{treeName}} talents</p>
		</div>
		<div v-if="hasNextRank">
			<br/>
			<p>Next rank:</p>
		</div>
		<p class="rank-description" v-html="skill.rankDescription[skill.currentRank]"></p>
	</div>
</template>
<script>
	export default {
		name: 'tooltip',
		props: {
			skill: Object,
			showTooltip: Boolean,
			treeName: String,
		},
		computed: {
			hasNextRank: function(){
				return this.skill.currentRank > 0 && this.skill.currentRank != this.skill.maxRank
			},
			getRequiredSkillName: function(){
				return this.$parent.getSkill(this.skill.requirements.skill.id).name;
			}
		},
	}
</script>