<template>
    <div>
        <table class="text-center w-full table-auto border border-black">
            <thead>
                <tr>
                    <th class="p-1">
                        Slot
                    </th>
                    <th class="p-1">
                        Item
                    </th>
                    <th class="p-1">
                        Difficulty
                    </th>
                    <th class="p-1">
                        Location
                    </th>
                    <th class="p-1">
                        Obtained
                    </th>
                    <th class="p-1">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in bisList" :key="index">
                    <td class="p-3">
                        {{ item.slot }}
                    </td>
                    <td class="p-3">
                        <div v-if="editedRowNumber != index">{{ item.name }}</div>
                        <div v-else><input class="text-center" type="text" v-model="bisList[index].name" /></div>
                    </td>
                    <td class="p-3">
                        <div v-if="editedRowNumber != index">{{ item.difficulty }}</div>
                        <div v-else>
                            <select v-model="bisList[index].difficulty" class="text-center">
                                <option disabled value="">-- SELECT ONE OPTION --</option>
                                <option value="NM">nm</option>
                                <option value="HM">hm</option>
                                <option value="MM">mm</option>
                            </select>
                        </div>
                    </td>
                    <td class="p-3">
                        <div v-if="editedRowNumber != index">{{ item.location }}</div>
                        <div v-else>
                            <select v-model="bisList[index].location" class="text-center">
                                <option disabled value="">-- SELECT ONE OPTION --</option>
                                <option value="Amirdrassil">Amirdrassil: The Dream's Hope</option>
                                <option value="MM+">Mythic +</option>
                            </select>
                        </div>
                    </td>
                    <td class="p-3">
                        <div v-if="editedRowNumber != index">
                            <X v-if="!item.obtained" size="32" class="block m-auto text-red-500" />
                            <Check v-else size="32" class="block m-auto text-lime-400" />
                        </div>
                        <div v-else>
                            <input class="text-center" type="checkbox" v-model="bisList[index].obtained" />
                        </div>
                    </td>
                    <td class="p-3">
                        <button @click="editedRowNumber = index" v-if="editedRowNumber != index"
                            class="p-2 rounded-xl bg-blue-500 hover:bg-blue-700 text-white">
                            Edit
                        </button>
                        <button @click="saveChanges(index)" v-else class="p-2 rounded-xl bg-sky-500
                            hover:bg-sky-700 text-white">
                            Apply changes
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { X, Check } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'

const bisList = ref([])
const editedRowNumber = ref(-1)

async function getBisList() {
    const { data } = await supabase.from('bisitems').select()
    bisList.value = data
}

function saveChanges(index) {
    console.log(bisList.value[index].name);
    const { error } = supabase
        .from('bisitems')
        .update(
            {
                name: bisList.value[index].name,
                difficulty: bisList.value[index].difficulty,
                location: bisList.value[index].location,
                obtained: bisList.value[index].obtained
            })
        .eq('character_id', 0);
    console.log(error)
    editedRowNumber.value = -1;
}

onMounted(async () => {
    getBisList()
})
</script>