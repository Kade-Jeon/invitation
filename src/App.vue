<template>
  <!-- class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-center"> -->
  <div class="min-h-screen bg-[#F6F1F1] text-center">
    <div class="h-[200px] flex items-center justify-center">
      <div class="text-center items-center mx-2">
        <h1 class="text-white text-4xl font-bold">
          <TextHighlight :text="words" :delay="0.1"
            class="text-white rounded-lg bg-gradient-to-r from-purple-300 to-orange-300">
            2025년 11월 26일
          </TextHighlight>
        </h1>
        <h1 class="text-[#A3CCDA] text-4xl font-bold mt-2">
          우리의 소중한 시작에 함께해 주시길 바랍니다.
        </h1>
      </div>
    </div>
    <TextGenerateEffect :words="words" :delay="0.1"
      class="text-black drop-shadow-lg flex items-center justify-center font-thin" />
    <div class="h-96 sm:h-[500px] md:h-[500px] lg:h-[500px]">
      <BendingGallery :bend="1" @image-click="openModal" :items="imageList"></BendingGallery>
    </div>
    <p class="text-black text-center font-myeongjo">
      {{ broom }}
    </p>
    <p class="text-black text-center font-myeongjo">
      {{ bride }}
    </p>
    <div class="text-[#A3CCDA]  drop-shadow-lg font-bold flex items-center justify-center h-[50px] mb-10">
      <p>
        D-
        <NumberTicker :value="40" :decimal-places="0" :direction="'up'" class="text-[#A3CCDA] " />
      </p>
    </div>
    <SpringCalendar :calendar-data="calendarData" :initial-index="5" />

    <!-- 이미지 모달 -->
    <ImageModal :is-open="showModal" :image-url="currentImage?.image || ''" :image-text="currentImage?.text || ''"
      :current-index="currentImageIndex" :total-images="imageList.length" :has-previous="currentImageIndex > 0"
      :has-next="currentImageIndex < imageList.length - 1" @close="closeModal" @previous="previousImage"
      @next="nextImage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import NumberTicker from "./components/NumberTicker.vue";
import BendingGallery from "./components/BendingGallery.vue";
import ImageModal from "./components/ImageModal.vue";
import TextGenerateEffect from "./components/TextGenerateEffect.vue";
import TextHighlight from "./components/TextHighlight.vue";
import SpringCalendar from "./components/SpringCalendar.vue";

// BendingGallery의 기본 이미지 목록 (실제로는 BendingGallery에서 가져와야 함)
const imageList = ref([
  { image: "https://picsum.photos/seed/1/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/2/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/3/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/4/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/5/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/16/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/17/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/8/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/9/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/10/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/21/800/600?grayscale", text: "" },
  { image: "https://picsum.photos/seed/12/800/600?grayscale", text: "" },
]);

const showModal = ref(false);
const currentImageIndex = ref(0);

const currentImage = computed(() => {
  return imageList.value[currentImageIndex.value] || null;
});

const openModal = (image: { image: string; text: string; index?: number }) => {
  console.log('클릭한 이미지:', image.index);

  if (image.index !== undefined) {
    // BendingGallery에서 직접 인덱스를 전달한 경우
    currentImageIndex.value = image.index;
    showModal.value = true;
  } else {
    // 인덱스가 없는 경우 텍스트로 찾기
    const index = imageList.value.findIndex(img => img.text === image.text);
    console.log('텍스트로 찾은 인덱스:', index);
    if (index !== -1) {
      currentImageIndex.value = index;
      showModal.value = true;
    }
  }
};

const closeModal = () => {
  showModal.value = false;
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const nextImage = () => {
  if (currentImageIndex.value < imageList.value.length - 1) {
    currentImageIndex.value++;
  }
};

// 키보드 네비게이션
const handleKeydown = (e: KeyboardEvent) => {
  if (!showModal.value) return;

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      previousImage();
      break;
    case 'ArrowRight':
      e.preventDefault();
      nextImage();
      break;
    case 'Escape':
      e.preventDefault();
      closeModal();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const words = ref(`여름 햇살 아래 처음 마주했던 순간을\n
잊지 않고 마음에 담아왔습니다.\n
그 따뜻한 계절의 기억처럼,\n
이제 서로의 곁에서 평생을 함께하려 합니다.\n
저희의 소중한 시작에 함께해 주시길 바랍니다.`);

const broom = ref('홍길동 · 김점순 아들 홍준기')
const bride = ref('홍길동 · 김점순 딸 홍준기')

const calendarData = ref([
  {
    month: '11월',
    date: 18,
    day: '화',
  },

  {
    month: '11월',
    date: 19,
    day: '수',
  },

  {
    month: '11월',
    date: 20,
    day: '목',
  },

  {
    month: '11월',
    date: 21,
    day: '금',
  },

  {
    month: '11월',
    date: 22,
    day: '토',
  },

  {
    month: '11월',
    date: 23,
    day: '일',
    events: [
      { title: '결혼식', day: '2025-11-23', time: '11:30AM' },
    ],
  },

]);
</script>