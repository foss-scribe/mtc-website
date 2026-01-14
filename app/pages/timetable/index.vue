<template>
    <div>
        <h1 class="text-6xl text-center mb-7">Terms and programs</h1>

        <p class="text-center text-xl">Explore our comprehensive martial arts terms and programs. Our timetables are designed to fit your schedule and help you achieve your training goals.</p>

        <div v-if="terms">
            <div v-if="terms.length == 0">
                <p>No terms available.</p>
            </div>
            <div v-else>
                <div v-for="term in terms" :key="term.id" class="mb-8">
                    <div v-if="new Date(term.dateEnd) > new Date()">

                    <div class="mb-6 text-center ">

                        <h2 class="text-5xl font-bold mb-4 uppercase">{{ term.title }}</h2>

                        <div class="text-3xl text-center">{{ formatDate(term.dateStart) }} - {{     formatDate(term.dateEnd) }}</div>

                        <p v-if="term.allowTrial">Trial members eligible to enrol in this term.</p>
                    </div>

                    
                    
                    <h2 class="text-3xl text-center font-bold mb-4 border-b-4 border-red-600 uppercase">{{ term.title }} timetable</h2>
                    <div v-if="term.timetable && term.timetable.status == 'active'" >
                        <Timetable :timetable="term.timetable" />
                        
                    </div>  
                    <div v-else>
                        <p>No active timetable for this term. Check back later.</p>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <!-- <pre>{{ terms }}</pre> -->
            </div>
        </div>
    </div>
    
</template>

<script setup>
import termsService from '~/services/mtc/terms.service';
import {formatDate} from '~/utils/formatdate.js';

const terms = ref(null);

async function fetchTerms() {
    const {data} = await termsService.getPublicTerms();
    console.log(data);
    terms.value = data;
}

onMounted(() => {
    fetchTerms();
});

</script>