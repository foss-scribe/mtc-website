<template>
    
        <div class="flex flex-col md:flex-row">
            <div v-for="(classes, day) in classes">
                <div v-if="classes.length > 0">
                    <div class="text-center bg-black text-white font-bold p-2">
                        {{ day }}
                    </div>
                    <ul class="list-none p-0 m-0 text-center">
                        <li v-for="dayClass in classes" class="flex flex-col p-2 cursor-pointer"
                            :style="'background-color: ' + dayClass.colour_bg + ';color:' + dayClass.colour_txt">
                            <div class="font-bold">
                                {{ dayClass.time_start }} &ndash; {{ dayClass.time_end }}
                            </div>

                            <div>
                                {{ dayClass.title }}
                                <span class="badge badge-xs badge-primary" v-if="dayClass.allowTrial">T</span>
                            </div>
                            <div v-if="dayClass.ranks" class="font-bold" :style="'color:' + dayClass.colour_rk">
                                ({{ dayClass.ranks }})
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p v-if="hasTrialClasses" class="mt-5 text-center"><span class="badge badge-xs badge-primary">T</span> Trial members welcome to attend these classes.</p>
        
</template>

<script setup lang="ts">


const classes = ref({});
const hasTrialClasses = ref(false);

const props = defineProps({
    timetable: {
        type: Object,
        required: true
    }
});

function buildClasses() {
    classes.value = {
        "Monday": props.timetable.classes.filter(({ day }) => day === "Monday"),
        "Tuesday": props.timetable.classes.filter(({ day }) => day === "Tuesday"),
        "Wednesday": props.timetable.classes.filter(({ day }) => day === "Wednesday"),
        "Thursday": props.timetable.classes.filter(({ day }) => day === "Thursday"),
        "Friday": props.timetable.classes.filter(({ day }) => day === "Friday"),
        "Saturday": props.timetable.classes.filter(({ day }) => day === "Saturday"),
        "Sunday": props.timetable.classes.filter(({ day }) => day === "Sunday")
    }
}

onMounted(() => {
    buildClasses();

    hasTrialClasses.value = props.timetable.classes.some(c => c.allowTrial);
});


</script>