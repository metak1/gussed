import { component$, useStore } from '@builder.io/qwik';

export const LootTable = component$(() => {

    const store = useStore({
        table: [
            { "test": "test" },
            { "test": "test" },
            { "test": "test" },
            { "test": "test" }
        ]
    });

    return <div>
        <table class="table-auto border border-black">
            <thead>
                <tr>
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
                    <tr>
                        <td class="p-3">
                            Zizi de gus
                        </td>
                        <td class="p-3">
                            Aberrus the gus crucible
                        </td>
                        <td class="p-3">
                            <span class="p-1 rounded-full border border-green-600 text-white bg-green-600">Obtained</span>
                        </td>
                        <td class="p-3">
                            <button class="p-2 rounded-full bg-sky-500 hover:bg-sky-700 ...">
                                Edit line
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
});