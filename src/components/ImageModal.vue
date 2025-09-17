<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80" @click="close">
        <div class="relative max-w-4xl max-h-[90vh] p-4" @click.stop>
            <img :src="imageUrl" :alt="imageText" class="max-w-full max-h-full object-contain rounded-lg">
            <h3 class="text-white text-xl mt-4 text-center">{{ imageText }}</h3>

            <!-- 닫기 버튼 -->
            <button @click="close"
                class="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center">
                <Icon icon="mdi:close" />
            </button>

            <!-- 이전 버튼 -->
            <button v-if="hasPrevious" @click="previous"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon icon="mdi:chevron-left" />
            </button>

            <!-- 다음 버튼 -->
            <button v-if="hasNext" @click="next"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon icon="mdi:chevron-right" />
            </button>

            <!-- 이미지 인덱스 표시 -->
            <RippleButton @click.stop
                class="absolute bottom left-1/2 transform -translate-x-1/2 text-gray-500 text-sm bg-white px-3 py-1 rounded-full">
                {{ currentIndex + 1 }} / {{ totalImages }}
            </RippleButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import RippleButton from './RippleButton.vue';

interface Props {
    isOpen: boolean;
    imageUrl: string;
    imageText: string;
    currentIndex: number;
    totalImages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    close: [];
    previous: [];
    next: [];
}>();

const close = () => {
    emit('close');
};

const previous = () => {
    emit('previous');
};

const next = () => {
    emit('next');
};
</script>
