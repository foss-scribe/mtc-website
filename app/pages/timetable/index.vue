<template>
    <div>
        <h1>Timetables</h1>

        <div v-if="timetables">
            <div>
                <Timetable 
                    v-for="timetable in timetables" 
                    :key="timetable.id" 
                    :timetable="timetable" />
            </div>
        </div>
    </div>
    <!-- <pre>{{ JSON.stringify(timetables, null, 2) }}</pre> -->
</template>

<script setup>
import TimetablesService from "~/services/mtc/timetables.service";

const timetables = ref(null);

async function fetchTimetables() {
    const {data} = await TimetablesService.getPublicTimetables();
    console.log(data);
    timetables.value = data;
}

onMounted(() => {
    fetchTimetables();
});

</script>