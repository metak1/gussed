import { component$, useStore } from '@builder.io/qwik';
import { LuCheck, LuX } from "@qwikest/icons/lucide";

export const LootTable = component$(() => {

    const store = useStore({
        table: [
            { "slot": "Head", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Neck", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Shoulder", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Cloak", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Chest", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Wrist", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Hands", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Waist", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Legs", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Feet", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Ring", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Ring", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Trinket 1", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Trinket 2", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Weapon", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
            { "slot": "Offhand", "name": "Gussed", "location": "Aberrus the gusible", "obtained": false },
        ],
        editedRowNumber: -1
    });

    return <div>
        {store.editedRowNumber}
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
                {store.table.map((item, index) => (
                    <tr key={index}>
                        <td class="p-3">
                            {item.slot}
                        </td>
                        <td class="p-3"> {
                            store.editedRowNumber != index ? item.name : <input class="text-center" type='text' value={item.name} />
                        }
                        </td>
                        <td class="p-3"> {
                            store.editedRowNumber != index ? item.location :
                                <select>
                                    <option value="raid">RAID</option>
                                    <option value="mythic_plus">MM+</option>
                                </select>
                        }
                        </td>
                        <td class="p-3">
                            {store.editedRowNumber != index ?
                                item.obtained ? <LuCheck class="block m-auto text-lime-400 text-3xl" />
                                    : <LuX class="block m-auto text-red-500 text-3xl" />
                                : <input type="checkbox" />
                            }
                        </td>
                        <td class="p-3">
                            {store.editedRowNumber != index ?
                                <button onClick$={() => store.editedRowNumber = index} class="p-2 rounded-xl bg-blue-500 hover:bg-blue-700">
                                    Edit
                                </button>
                                :
                                <button onClick$={() => store.editedRowNumber = index} class="p-2 rounded-full bg-sky-500 hover:bg-sky-700">
                                    Apply changes
                                </button>
                            }

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div >
});