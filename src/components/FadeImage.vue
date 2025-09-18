<template>
    <div class="relative">
        <img :src="imageSrc" :alt="altText" class="w-full h-full object-cover" />
        <!-- 하단 페이드 효과 -->
        <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-transparent to-transparent"
            :style="fadeGradient"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    imageSrc: string
    altText?: string
    backgroundColor?: string
    fadeHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
    altText: 'image',
    backgroundColor: '#FFFDF7',
    fadeHeight: '12rem' // h-48과 동일
})

const fadeGradient = computed(() => ({
    background: `linear-gradient(to top, ${props.backgroundColor} 0%, ${props.backgroundColor}80 50%, transparent 100%)`,
    height: props.fadeHeight
}))
</script>
