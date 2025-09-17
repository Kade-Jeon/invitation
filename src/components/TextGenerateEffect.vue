<template>
    <div :class="cn('leading-snug tracking-wide', props.class)">
        <div ref="scope">
            <span v-for="(word, idx) in wordsArray" :key="word + idx"
                :class="word === '<br>' ? 'block' : 'inline-block'" :style="spanStyle">
                <br v-if="word === '<br>'" />
                <template v-else>{{ word }}&nbsp;</template>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes, onMounted, ref } from "vue";

import { cn } from "../../lib/utils";

const props = withDefaults(
    defineProps<{
        words: string;
        filter?: boolean;
        duration?: number;
        delay?: number;
        class: HTMLAttributes["class"];
    }>(),
    { duration: 0.7, delay: 0, filter: true },
);

const scope = ref(null);
const wordsArray = computed(() => {
    // 줄바꿈을 먼저 처리하고, 그 다음 공백으로 분리
    return props.words.split('\n').flatMap(line =>
        line.trim() === '' ? ['<br>'] : line.split(' ').filter(word => word.trim() !== '')
    );
});

const spanStyle = computed(() => ({
    opacity: 0,
    filter: props.filter ? "blur(10px)" : "none",
    transition: `opacity ${props.duration}s, filter ${props.duration}s`,
}));

onMounted(() => {
    if (scope.value) {
        const spans = (scope.value as HTMLElement).querySelectorAll("span");

        setTimeout(() => {
            spans.forEach((span: HTMLElement, index: number) => {
                setTimeout(() => {
                    span.style.opacity = "1";
                    span.style.filter = props.filter ? "blur(0px)" : "none";
                }, index * 200);
            });
        }, props.delay);
    }
});
</script>